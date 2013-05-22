'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.properties = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  page_config: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/page_config.js');
    var expected = grunt.file.read('test/expected/page_config.js');
    test.equal(actual, expected, 'Should run with default namespace');

    test.done();
  },
  page_color_config: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/page_color_config.js');
    var expected = grunt.file.read('test/expected/page_color_config.js');
    test.equal(actual, expected, 'Should use a namespace');

    test.done();
  },
};
