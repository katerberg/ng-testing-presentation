module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'bower_components/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'js/**/*.js'
    ],

    exclude: [],

    port: 8080,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};
