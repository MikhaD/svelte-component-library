interface InternalOptions {
	override: boolean;
	extensions: string[];
	replaceWithReactiveValues: replaceWithReactiveValues
	indent: string;
	keepNode: (n: TemplateNode) => boolean;
}

interface replaceWithReactiveValues {
	bind: boolean;
	attribute: boolean;
	attributeShorthand: boolean;
}

interface ReplaceEntry {
	start: number,
	end: number,
	replace: string,
}

type PreprocessorGroup = import("svelte/types/compiler/preprocess").PreprocessorGroup;
type Script = import("svelte/types/compiler/interfaces").Script;
type TemplateNode = import("svelte/types/compiler/interfaces").TemplateNode;
type Element = import("svelte/types/compiler/interfaces").Element;
type Attribute = import("svelte/types/compiler/interfaces").Attribute;