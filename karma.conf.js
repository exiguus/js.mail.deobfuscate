module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    files: [{
      pattern: 'src/js/*.class.test.js',
      watched: false,
    }, {
      pattern: 'src/js/*.module.test.js',
      watched: false,
    }],
    preprocessors: {
      'src/js/*.test.js': ['webpack'],
    },
    webpack: {
      mode: 'production',
      module: {
        rules: [
          // BABEL
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,
            options: {
              compact: true,
            },
          },
        ],
      },
    },
  });
};
