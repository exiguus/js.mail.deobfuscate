/*
 * Gruntfile.js
 */

'use strict'

var config = require('./build/helper/config')

module.exports = function (grunt) {
  // load only used tasks and add fallbacks for those which cannot be find
  require('jit-grunt')(grunt, {
    'replace': 'grunt-text-replace'
  })
  // measures the time each task takes
  require('time-grunt')(grunt)

  // Load grunt configurations automatically
  var configs = require('load-grunt-configs')(grunt, config.options)

  // Define the configuration for all the tasks
  grunt.initConfig(configs)

  /*
   * TASKS
   */

  grunt.registerTask('build', [
    'eslint',
    'uglify'
  ])

  grunt.registerTask('dist', [
    'clean',
    'build',
    'copy:dist'
  ])

  grunt.registerTask('default', ['dist'])
}
