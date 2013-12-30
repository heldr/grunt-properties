/*
 * grunt-properties
 * https://github.com/helder/grunt-properties
 *
 * Copyright (c) 2013 Helder Santana
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    properties: {
      page_config: {
        files: {
          'tmp/page_config.js': ['test/fixtures/page_config.properties'],
        },
      },
      page_color_config: {
        options: {
          namespace: 'mypage'
        },
        files: {
          'tmp/page_color_config.js': ['test/fixtures/page_config.properties', 'test/fixtures/page_color_config.properties'],
        },
      },
      page_font_config: {
        files: {
          'tmp/page_font_config.js': ['test/fixtures/page_font_config.properties'],
        },
      },
      page_no_ns_config: {
        options: {
          namespace: ''
        },
        files: {
          'tmp/page_no_ns_config.js': ['test/fixtures/page_config.properties'],
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'properties', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
