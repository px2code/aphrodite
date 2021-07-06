'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var exports$1 = require('./exports-cab1e088.js');
require('string-hash');
require('asap');

/* @flow */
var useImportant = false; // Don't add !important to style definitions

var noAutoPrefix = true;
var Aphrodite = exports$1.makeExports(useImportant, noAutoPrefix);
var StyleSheet = Aphrodite.StyleSheet,
    StyleSheetServer = Aphrodite.StyleSheetServer,
    StyleSheetTestUtils = Aphrodite.StyleSheetTestUtils,
    css = Aphrodite.css,
    minify = Aphrodite.minify,
    prefix = Aphrodite.prefix,
    flushToStyleTag = Aphrodite.flushToStyleTag,
    injectAndGetClassName = Aphrodite.injectAndGetClassName,
    defaultSelectorHandlers = Aphrodite.defaultSelectorHandlers;

exports.StyleSheet = StyleSheet;
exports.StyleSheetServer = StyleSheetServer;
exports.StyleSheetTestUtils = StyleSheetTestUtils;
exports.css = css;
exports.defaultSelectorHandlers = defaultSelectorHandlers;
exports.flushToStyleTag = flushToStyleTag;
exports.injectAndGetClassName = injectAndGetClassName;
exports.minify = minify;
exports.prefix = prefix;
