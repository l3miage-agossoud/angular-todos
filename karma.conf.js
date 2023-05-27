module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['ChromeHeadless'],
    files: [
      // Ajoutez ici les fichiers de test que vous souhaitez inclure
      'src/**/*.spec.ts'
    ],
    preprocessors: {
      // Préprocesseurs pour les fichiers de test
      'src/**/*.spec.ts': ['@angular-devkit/build-angular']
    },
    reporters: ['progress', 'junit'],
    junitReporter: {
      outputDir: 'test-results',
      outputFile: 'test-results.xml',
      useBrowserName: false
    },
    // Autres options de configuration si nécessaire
  });
};

