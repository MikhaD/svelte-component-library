import { parse } from "svelte/compiler";
import defu from "defu";

/**
 * Find the start and end indices of an attribute in a node if it exists. If not, return a start and
 * end a position where an attribute could be inserted.
 * @param {TemplateNode} node - The node to find the position of the attribute in
 * @param {string} attribute - The attribute to find the position of
 */
function findAttribute(node, attribute) {
	const attribute_object = node.attributes.find((/** @type {Attribute} */ attr) => attr.name === attribute);
	let start = node.start + node.name.length + 1;
	let end = start;
	if (attribute_object) {
		start = attribute_object.start;
		end = attribute_object.end;
	}
	return { start, end };
}

/**
 * Return the position where the node's children start and end.
 * @param {TemplateNode} node
 */
function findChildren(node) {
	if (node.children && node.children.length > 0) {
		const startChild = node.children[0];
		const endChild = node.children?.at(-1) || startChild;
		return { start: startChild.start, end: endChild.end };
	}
	return { start: 0, end: 0 };
}

/**
 * Return true if the node matches the provided type and the expression is a variable.
 * @param {TemplateNode} node - The node to check
 * @param {string} type - The type of node to check for
 * @param {Set<string>} variables - A set of variable names
 */
function relevantIdentifier(node, type, variables) {
	return (node.type === type && node.expression?.type === "Identifier" && variables.has(node.expression?.name));
}

/**
 * Remove a section of a string and replace it with another string.
 * @param {string} str - The string to splice
 * @param {number} index - The index at which to start the splice
 * @param {number} count - The number of characters to remove
 * @param {string} add - The value to insert in the space
 */
function splice(str, index, count, add) {
	return str.slice(0, index) + add + str.slice(index + count);
}

/**
 * Format the given svelte code by standardizing the indentation and removing unnecessary elements.
 * @param {string} src
 * @param {InternalOptions} options
*/
function formatSrc(src, options) {
	const /** @type {ReplaceEntry[]} */ changes = [];

	/** @param {TemplateNode} node */
	function processChildren(node, depth = 0) {
		if (!node.children) return;
		for (let i = 0; i < node.children.length; ++i) {
			const child = node.children[i];
			if (!options.keepNode(child)) {
				changes.unshift({ start: child.start, end: child.end, replace: "" });
			}
			else if (child.type === "Text") {
				if (i < node.children.length - 1 && !options.keepNode(node.children[i + 1])) {
					changes.unshift({ start: child.start, end: child.end, replace: "" });
					continue;
				}
				if (child.data === "\n") {
					let indent_str = "\n" + options.indent.repeat(i === node.children.length - 1 ? depth - 1 : depth);
					changes.unshift({ start: child.start, end: child.end, replace: indent_str });
				} else {
					const lines = child.data.split("\n");
					let stop = lines.length;
					if (lines.length > 1 && lines.at(-1) === "") {
						stop = lines.length - 1;
						lines[lines.length - 1] = options.indent.repeat(depth - 1);
					}
					for (let l = 1; l < stop; ++l) {
						lines[l] = options.indent.repeat(depth) + lines[l];
					}
					changes.unshift({ start: child.start, end: child.end, replace: lines.join("\n") });
				}
			} else {
				processChildren(child, depth + 1);
			}
		}
	}

	src = src.split("\n").map((line) => line.trim()).join("\n");
	const ast = parse(src);

	processChildren(ast.html);
	for (const { start, end, replace } of changes) {
		src = splice(src, start, end - start, replace);
	}

	return src;
}

/**
 * Format a value into a string that can be interpolated into a Svelte component. If the value is a
 * string, it will be wrapped in double quotes. Otherwise it will be wrapped in curly braces.
 * @param {string} str
 */
function formatReactiveValue(str) {
	return `\${typeof ${str} === "string" ? \`"\${${str}}"\` : \`{\${${str}}}\`}`;
}

/**
 * Substitute variables in the attributes of a node with reactive values.
 * @param {TemplateNode} node
 * @param {Set<string>} variables
 * @param {string} src
 * @param {InternalOptions} options
*/
function subInReactiveValues(node, variables, src, options) {
	const /** @type {ReplaceEntry[]} */ changes = [];

	/** @param {TemplateNode} node  */
	function sub(node) {
		if (node.hasOwnProperty("attributes")) {
			for (const attr of node.attributes) {
				if (options.replaceWithReactiveValues.bind && relevantIdentifier(attr, "Binding", variables)) {
					changes.unshift({ start: attr.start, end: attr.end, replace: `${attr.name}=${formatReactiveValue(attr.expression.name)}` });
				}
				if (options.replaceWithReactiveValues.attribute && attr.type === "Attribute") {
					for (const val of attr.value) {
						if (relevantIdentifier(val, "MustacheTag", variables)) {
							const name = val.expression.name;
							const inString = ["\"", "'"].includes(src.charAt(val.start - 1));
							const insert = attr.value.length > 1 || inString ? `\${${name}}` : formatReactiveValue(name);
							changes.unshift({ start: val.start, end: val.end, replace: insert });
						}
						if (options.replaceWithReactiveValues.attributeShorthand && relevantIdentifier(val, "AttributeShorthand", variables)) {
							const name = val.expression.name;
							changes.unshift({ start: attr.start, end: attr.end, replace: `${name}=${formatReactiveValue(name)}` });
						}
					}
				}
			}
		}
		if (node.hasOwnProperty("children")) {
			// @ts-ignore
			for (const child of node.children) {
				sub(child);
			}
		}
	}
	sub(node);
	for (const { start, end, replace } of changes) {
		src = splice(src, start, end - start, replace);
	}
	return src;
}

/**
 * Return a set of the variable names declared in the script tag of a Svelte component, accounting
 * for array and object destructuring & svelte reactive declarations (using $:).
 * @param {{[key: string]: any}[] | undefined} nodes - The content body array of the script tag.
 */
function variableSet(nodes) {
	const variables = new Set();
	if (!nodes) return variables;
	/**
	 * Find all identifiers in a node and add them to the variables set.
	 * @param {{[key: string]: any}} obj
	 */
	function findIdentifiers(obj) {
		if (obj.type === "Identifier") {
			variables.add(obj.name);
		} else if (obj.type === "ArrayPattern" || obj.type === "ObjectPattern") {
			for (let element of obj.elements || obj.properties) {
				if (element?.type === "Identifier") {
					variables.add(element.name);
				}
			}
		}
	}
	for (let node of nodes) {
		if (node.type === "VariableDeclaration") {
			for (let declarator of node.declarations) {
				findIdentifiers(declarator.id);
			}
			// If it is a reactive declaration or array/object destructuring
		} else if (node.type === "LabeledStatement" && node.label.name === "$") {
			if (node.body.type === "ExpressionStatement" && node.body.expression.type === "AssignmentExpression") {
				findIdentifiers(node.body.expression.left);
			}
		}
	}
	return variables;
}

/**
 *
 * @param {TemplateNode} node
 * @param {string} src
 * @param {Script | undefined} script
 * @param {InternalOptions} options
 */
function generateSourceChange(node, src, script, options) {
	const loc = findChildren(node);

	let component = formatSrc(src.slice(loc.start, loc.end), options);

	//! not going to work with constants declared outside of script tag
	if (Object.values(options.replaceWithReactiveValues).some(val => val)) {
		const variables = variableSet(script?.content.body)
		if (variables.size > 0) {
			component = subInReactiveValues(parse(component).html, variables, component, options);
		}
	}

	return ` source={\`${component}\`}`;
}

/**
 * Take a Svelte Histoire story file and insert the contents of the each Story or Variant into the
 * source attribute of the component, replacing variables with reactive values.
 * @param {string} src
 * @param {InternalOptions} options
 */
function preprocess(src, options) {
	const ast = parse(src);

	const /** @type {ReplaceEntry[]} */ changes = [];

	for (const node of ast.html.children || []) {
		if (node.name === "Hst.Story" || node.name === "Hst.Variant") {
			let variants = false;
			for (const child of node.children || []) {
				if (child.name === "Hst.Variant") {
					variants = true;
					const { start, end } = findAttribute(child, "source");
					if (start === end && !options.override) continue;

					changes.unshift({ start, end, replace: generateSourceChange(child, src, ast.instance, options) });
				}
			}
			if (variants) continue;
			const { start, end } = findAttribute(node, "source");
			if (start === end && !options.override) continue;

			changes.unshift({ start, end, replace: generateSourceChange(node, src, ast.instance, options) });
		}
	}
	for (const { start, end, replace } of changes) {
		src = splice(src, start, end - start, replace);
	}
	return src;
}

// Declared here so the types are available when using the preprocessor. All other types are non user facing.
/**
 * @typedef {Object} replaceWithReactiveValues
 * @property {boolean} bind
 * @property {boolean} attribute
 * @property {boolean} attributeShorthand
 */
/**
 * @typedef {Object} UserOptions
 * @property {boolean} override - Whether to override the source attribute if it already exists
 * @property {string | string[]} extensions
 * @property {replaceWithReactiveValues} replaceWithReactiveValues
 * @property {string | number} indent
 * @property {boolean} removeComments
 * @property {boolean} removeControlsSlot
 */

const /** @type {UserOptions} */ defaultOptions = {
	override: true,
	extensions: [".story.svelte"],
	replaceWithReactiveValues: {
		bind: true,
		attribute: true,
		attributeShorthand: true
	},
	indent: 4,
	removeComments: true,
	removeControlsSlot: true,
};

/**
 * Preprocessor for Svelte components that provides dynamic source code for Histoire stories & variants.
 * @param {UserOptions} options
 * @returns {PreprocessorGroup}
 */
export default function preprocessor(options) {
	options = defu(options, defaultOptions); // merge options with default options

	const KeepComponents = new Set(["InlineComponent", "Element", "Text", "SlotTemplate"]);
	if (!options.removeComments) KeepComponents.add("Comment");

	/** @type {InternalOptions} */
	const final_options = {
		override: options.override,
		extensions: options.extensions instanceof Array ? options.extensions : [options.extensions],
		replaceWithReactiveValues: options.replaceWithReactiveValues,
		indent: typeof options.indent === "number" ? " ".repeat(options.indent) : options.indent,
		keepNode: (node) => {
			if (KeepComponents.has(node.type)) {
				if (options.removeControlsSlot && node.attributes) {
					const slot = node.attributes.find((/** @type {Attribute} */ attr) => attr.name === "slot");
					if (slot?.value.length === 1) {
						return slot.value[0].data !== "controls";
					}
				}
				return true;
			}
			return false;
		}
	};

	return {
		name: "Histoire source provider",
		markup: function({ content, filename }) {
			if (final_options.extensions.some((ext) => filename?.endsWith(ext))) {
				content = preprocess(content, final_options);
			}
			return { code: content };
		}
	};
}