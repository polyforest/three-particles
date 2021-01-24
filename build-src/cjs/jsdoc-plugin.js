/**
 * @typedef {object} FileEvent
 * @property {string} filename The name of the file.
 * @property {string} source The contents of the file.
 */

 /**
  * @typedef {object} DocCommentFoundEvent
  * @property {string} filename The name of the file.
  * @property {string} comment The text of the JSDoc comment.
  * @property {number} lineno The line number.
  * @property {number} columnno The column number.
  */

/**
 * A regex to find typedef imports.
 * Contains two groups, the path and the symbol name.
 */
// eslint-disable-next-line max-len
const typedefRegex = /\/\*\*\s*@typedef\s+{\s*([!?]?)import\(['"](?:\.\/)?([\/\w-\$]*)(?:\.js)['"]\)([\w-\$]*)\}\s*([\w-\$]*)\s*\*\//g;

// eslint-disable-next-line max-len
const importRegex = /(\@\w+\s*){\s*([!?]?)import\(['"](?:\.\/)?([\/\w-\$]*)(?:\.js)?['"]\)\.([\w-\$]*)\}/g;

/**
 * @type {Map<string, Map<string, string>>}
 */
const fileToReplacements = new Map();

/**
 * The beforeParse event is fired before parsing has begun.
 *
 * @param {FileEvent} e The event.
 */
function beforeParse(e) {
  const toReplace = /** @type {Map<string, string>} */ new Map();
  e.source = e.source.replace(typedefRegex,
    (_substring, path, opts, symbolName, aliasName) => {
    toReplace.set(aliasName, `${opts}{module:${path}~${symbolName}}`);
    return '';
  });
  // Replace inline imports
  e.source = e.source.replace(importRegex, '$1{$2module:$3~$4}');
  fileToReplacements.set(e.filename, toReplace);
};

/**
 * The jsdocCommentFound event is fired whenever a JSDoc comment is found.
 *
 * @param {DocCommentFoundEvent} e The event.
 */
function jsdocCommentFound(e) {
  fileToReplacements.get(e.filename).forEach((value, key) => {
    // Replace typedef aliases
    e.comment = e.comment.replace(new RegExp(`\{\s*${key}\\s*}`, 'g'), value);
  });
}

exports.handlers = {
  beforeParse: beforeParse,
  jsdocCommentFound: jsdocCommentFound,
};
