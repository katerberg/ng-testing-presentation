module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],

    files: [
      'bower_components/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'js/controller.js',
      'js/**/*.mtest.js'
    ],

    exclude: [],

    port: 8080,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};
