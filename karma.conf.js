

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-jasmine',
      'karma-webpack'
    ],
    files: [
      "./test/**/*.js"
    ],
    exclude: [
    ],
    preprocessors: {
      // add webpack as preprocessor
      "./test/**/*.js": ['webpack']
    },

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
      resolve: {
        root: [
            './src'
        ],
        extensions: [ '', '.js' ]
      },
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    },
    reporters: ['spec'],
    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: true,  // do not print error summary
      suppressFailed: true,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },
    port: 8088,
    colors: true,
    autoWatch: true,
    singleRun: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS']
  });
};