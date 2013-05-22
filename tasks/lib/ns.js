// based on: http://addyosmani.com/blog/essential-js-namespacing/

'use strict';

module.exports = function ( ns, ns_string, lastPropertyValue ) {
  var parts = ns_string.split('.'),
      parent = ns,
      pl, i;
  if (parts[0] == "myApp") {
      parts = parts.slice(1);
  }
  pl = parts.length;
  for (i = 0; i < pl; i++) {
      //create a property if it doesnt exist
      if (i !== (parts.length - 1) && typeof parent[parts[i]] == 'undefined') {
        parent[parts[i]] = {};
      } else if (typeof parent[parts[i]] == 'undefined') {
        parent[parts[i]] = lastPropertyValue;
      }
      parent = parent[parts[i]];
  }
  return ns;
};
