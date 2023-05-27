module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      // Spécifiez les fichiers source et les fichiers de tests
      'src/**/*.js',
      'test/**/*.spec.js'
    ],

    exclude: [
      // Spécifiez les fichiers à exclure si nécessaire
    ],

    browsers: ['Chrome'], // ou tout autre navigateur pris en charge par Karma

    reporters: ['progress', 'junit'], // Vous pouvez utiliser d'autres reporters selon vos besoins

    junitReporter: {
      outputDir: 'test-results', // Répertoire de sortie des rapports JUnit
      outputFile: 'test-results.xml' // Nom du fichier de rapport JUnit
    }
  });
};
