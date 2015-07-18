/*
 * grunt-properties
 * https://github.com/helder/grunt-properties
 *
 * Copyright (c) 2013 Helder Santana
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var pParser = require('properties-parser');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('properties', 'Convert java .properties files to javascript', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
          namespace: 'config'
        }),
        useNS = options.namespace.length > 0,
        useKeysSplitter = options.keysSplitter !== undefined,
        src = useKeysSplitter=== true ? '' : (useNS === false ? '{\n' :
            'var ' + options.namespace + ' = ' + options.namespace + ' || {};\n');

      function splitKeys(obj, splitter) {
          var keys, value, parent, result = {};
          for (var key in obj) {
              keys = key.split(splitter);
              value = obj[key].replace(/"/g, '\\"');
              parent = result;
              for (var j = 0; j < keys.length-1; j++) {
                  parent = parent[keys[j]] = parent[keys[j]] || {};
              }
              parent[keys[keys.length-1]] = value;
          }
          return JSON.stringify(result, null, 2);
      }

    function convert(filepath) {
      var fileContent = grunt.file.read(filepath),
          ns = options.namespace,
          exp = null,
          code = [];

      fileContent = pParser.parse(fileContent);

      if(useKeysSplitter === true) {
          return useNS ? 'var ' + options.namespace + ' = ' + splitKeys(fileContent, options.keysSplitter) + ";"
              : splitKeys(fileContent, options.keysSplitter);
      } else {
          for (var file in fileContent) {
              exp =
                  (useNS ? ns + '[' : '  ') + '"' + file + '"' +
                  (useNS ? ']' : '') + (useNS ? ' = ' : ': ') + '"' +
                  fileContent[file].replace(/"/g, '\\"') + '"' + (useNS ? ';' : ',');

              code.push(exp);
          }

          return code.join('\n');
      }
    }

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      var output = src;

      // Concat specified files.
      output += f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('.properties file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(convert).join('\n');

      if (useNS !== true && useKeysSplitter !== true) {
        output = output.substring(0, output.length - 1) + '\n};';
      }

      // Write the destination file.
      grunt.file.write(f.dest, output);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
