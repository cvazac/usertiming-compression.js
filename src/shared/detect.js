//
// Export to the appropriate location
//
/* eslint-disable eol-last,indent */
if (typeof define === "function" && define.amd) {
  //
  // AMD / RequireJS
  //
  define([], function() { // eslint-disable-line strict
    return {{name}}; // eslint-disable-line no-undef
  });
} else if (typeof module !== "undefined" && module.exports) {
  //
  // Node.js
  //
  module.exports = {{name}}; // eslint-disable-line no-undef
} else if (typeof root !== "undefined") {
  //
  // Browser Global
  //
  root.{{name}} = {{name}}; // eslint-disable-line no-undef
}
/* eslint-enable indent */