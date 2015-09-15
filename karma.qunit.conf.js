module.exports = function(config) {
  config.set({
    frameworks: ['qunit'],

    files: [
      'bower_components/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'js/controller.js',
      'js/**/*.qtest.js'
    ],

    exclude: [],

    port: 8080,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};
