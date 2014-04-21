'use strict';

module.exports = function(grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    watch: {
      jsdoc: {
        files: [
          'Gruntfile.js',
          'jsdoc-templates/jsdoc3-grunt-template/jsdoc.conf.json'
        ],
        tasks: ['jsdoc']
      },
      server: {
        options: {
          livereload: true
        },
        files: 'docs/{,**/}*.html'
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: true
      },
      server: {
        options: {
          open: 'http://localhost:9000/grunt/',
          base: [
            'docs/',
          ],
        }
      },
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            'docs/',
          ]
        }]
      },
    },
    jsdoc: {
      dist: {
        src: [
          'Gruntfile.js'
        ],
        options: {
          destination: 'docs/grunt/',
          configure: 'jsdoc-templates/jsdoc3-grunt-template/jsdoc.conf.json',
          template: 'jsdoc-templates/jsdoc3-grunt-template'
        },
      },
    }
  });

  /**
   * @function grunt
   * @desc clean document directory and geranate jsdoc document
   */
  grunt.registerTask('default', [
    'clean',
    'jsdoc'
  ]);

  /**
   * @function grunt serve
   * @desc create server and watch Gruntfile.js and livereload JSDoc document.
   */
  grunt.registerTask('serve', [
    'connect',
    'watch'
  ]);
};