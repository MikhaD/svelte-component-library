# Svelte Component Library
A growing collection of all my reusable Svelte components and SVGs.

# Preprocessor
This project uses a custom made svelte pre-processor located in src/lib/preprocessors. The pre-processor adds dynamic source code to all the Histoire components and variants, replacing variable names with reactive values to make them easier to use in other projects.

Unfortunately there is currently a bug in Histoire that causes variants to all share the source of the last declared variant.

To use the pre processor it needs to be placed in the `preprocess` array after `vitePreprocess` in the svelte config. The available options will be displayed when you add an empty object as a parameter to the preprocessor.

## Shortcomings
- It does not replace variables with values in expressions that are not Identifiers
- It does not recognize variables declared with the @const directive
- It has not been tested with multiple stories in a file
- The only multiline thing that indents correctly is text. Everything else is missing indentation

## Components to add
- Tabs
- Loading animations from LoadersToMake
- Standard checkbox with custom animation
  - animated check
- Cubic Bezier curve editor
- Cubic Bezier curve preview
- Image/ Information carousel similar to the new version of my definition component in Wordle+
- Definition component (Wordle+)
### From Web Components
- Standard radio button with custom animation
- Completely custom radio buttons
- Toggle switch (as checkbox if possible)

## TODO
- Look into the issues with the color input component not going away when clicking outside or going away when clicking on the color input
- Look into the accessibility options for the color input & color picker components (arrow key controls etc)