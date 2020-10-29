'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var exports$1 = require('./exports-c15bc063.js');
require('string-hash');
require('asap');
require('inline-style-prefixer/lib/createPrefixer');
require('inline-style-prefixer/lib/plugins/backgroundClip');
require('inline-style-prefixer/lib/plugins/calc');
require('inline-style-prefixer/lib/plugins/crossFade');
require('inline-style-prefixer/lib/plugins/cursor');
require('inline-style-prefixer/lib/plugins/filter');
require('inline-style-prefixer/lib/plugins/flex');
require('inline-style-prefixer/lib/plugins/flexboxIE');
require('inline-style-prefixer/lib/plugins/flexboxOld');
require('inline-style-prefixer/lib/plugins/gradient');
require('inline-style-prefixer/lib/plugins/grid');
require('inline-style-prefixer/lib/plugins/imageSet');
require('inline-style-prefixer/lib/plugins/logical');
require('inline-style-prefixer/lib/plugins/position');
require('inline-style-prefixer/lib/plugins/sizing');
require('inline-style-prefixer/lib/plugins/transition');

var useImportant = true; // Add !important to all style definitions

var Aphrodite = exports$1.makeExports(useImportant);
var StyleSheet = Aphrodite.StyleSheet,
    StyleSheetServer = Aphrodite.StyleSheetServer,
    StyleSheetTestUtils = Aphrodite.StyleSheetTestUtils,
    css = Aphrodite.css,
    minify = Aphrodite.minify,
    flushToString = Aphrodite.flushToString,
    flushToStyleTag = Aphrodite.flushToStyleTag,
    injectAndGetClassName = Aphrodite.injectAndGetClassName,
    defaultSelectorHandlers = Aphrodite.defaultSelectorHandlers;

exports.StyleSheet = StyleSheet;
exports.StyleSheetServer = StyleSheetServer;
exports.StyleSheetTestUtils = StyleSheetTestUtils;
exports.css = css;
exports.defaultSelectorHandlers = defaultSelectorHandlers;
exports.flushToString = flushToString;
exports.flushToStyleTag = flushToStyleTag;
exports.injectAndGetClassName = injectAndGetClassName;
exports.minify = minify;
