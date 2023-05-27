module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    files: [
      'src/**/*.spec.ts'
    ],
    browsers: ['Chrome'],
    reporters: ['progress', 'kjhtml'],
    singleRun: true
  });
};
