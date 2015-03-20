// not "use strict" so we can declare global "Promise"
/*global Promise:true */

if (typeof Promise === 'undefined') {
  Promise = require('./lib/core.js')
  require('./lib/es6-extensions.js')
}

require('./polyfill-done.js')
