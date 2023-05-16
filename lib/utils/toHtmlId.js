"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Converts a string to an html id suitable for use in an anchor link
var toHtmlId = function (phrase) { return phrase
    .replace(/^[^a-zA-Z]+/, '') // Ensure id starts with a letter
    .replace(/[^\w-_\s]+/g, '')
    .replace(/\s+/g, '-'); };
exports.default = toHtmlId;
