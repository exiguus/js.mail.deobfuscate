/**
 * Configuration file
 */
var config = module.exports

config.options = {
  config: {
    // in this directory you can find your grunt config tasks
    src: 'build/helper/_grunt/*.js'
  },
  paths: {
    // helpers folder with tasks
    helper: 'build/helper',
    // dev/working folder
    dev: 'src',
    // dist folder with minified and optimized files
    dist: 'dist'
  },
  name: {
    plugin: 'mail.deobfuscate'
  },
  banner: "/*!\n" + // eslint-disable-line quotes
          " * <%= pkg.name %> <%= pkg.version %>\n" + // eslint-disable-line quotes
          " * <%= pkg.repository.url %>\n" + // eslint-disable-line quotes
          " *\n" + // eslint-disable-line quotes
          " * <%= pkg.author %>\n" + // eslint-disable-line quotes
          " * Released under the <%= pkg.license %> license\n" + // eslint-disable-line quotes
          " *\n" + // eslint-disable-line quotes
          " * Date: <%= grunt.template.today('yyyy-mm-dd HH:mm:ss') %>\n" + // eslint-disable-line quotes
          " */" // eslint-disable-line quotes
}
