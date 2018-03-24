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
  }
}
