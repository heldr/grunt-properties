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
  page_font_config: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/page_font_config.js');
    var expected = grunt.file.read('test/expected/page_font_config.js');
    test.equal(actual, expected, 'Should use nested keys');

    test.done();
  },
  page_no_ns_config: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/page_no_ns_config.js');
    var expected = grunt.file.read('test/expected/page_no_ns_config.js');
    test.equal(actual, expected, 'Should not use a namespace');

    test.done();
  },
  page_font_nested_object_config: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/page_font_nested_object_config.js');
    var expected = grunt.file.read('test/expected/page_font_nested_object_config.js');
    test.equal(actual, expected, 'should generate nested object');

    test.done();
  },
  page_font_nested_object_no_ns_config: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/page_font_nested_object_no_ns_config.js');
    var expected = grunt.file.read('test/expected/page_font_nested_object_no_ns_config.js');
    test.equal(actual, expected, 'should generate nested object');

    test.done();
  },
  i18n_properties_base: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/i18n/base.js');
    var expected = grunt.file.read('test/expected/i18n/base.js');
    test.equal(actual, expected, 'should be without keys from other property files');

    test.done();
  },
  i18n_properties_base_en: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/i18n/base_en.js');
    var expected = grunt.file.read('test/expected/i18n/base_en.js');
    test.equal(actual, expected, 'should be without keys from other property files');

    test.done();
  },
  i18n_properties_base_de: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/i18n/base_de.js');
    var expected = grunt.file.read('test/expected/i18n/base_de.js');
    test.equal(actual, expected, 'should be without keys from other property files');

    test.done();
  }
};
