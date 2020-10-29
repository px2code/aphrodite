import makeExports from './exports';

const useImportant = true; // Add !important to all style definitions

const Aphrodite = makeExports(useImportant);

const {
    StyleSheet,
    StyleSheetServer,
    StyleSheetTestUtils,
    css,
    minify,
    flushToString,
    flushToStyleTag,
    injectAndGetClassName,
    defaultSelectorHandlers,
} = Aphrodite;

export {
    StyleSheet,
    StyleSheetServer,
    StyleSheetTestUtils,
    css,
    minify,
    flushToString,
    flushToStyleTag,
    injectAndGetClassName,
    defaultSelectorHandlers,
};
