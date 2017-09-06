var path = require('path');
var wallabyWebpack = require('wallaby-webpack');
var wallabyPostprocessor = wallabyWebpack({
  entryPatterns: ['test/unit/setup.js', 'test/unit/**/*.spec.js'],
  resolve: {
    alias: {
      'kendo-ui/js': '@progress/kendo-ui/js',
      'kendo-ui': '@progress/kendo-ui/js/kendo.core.js'
    }
  }
});

module.exports = function () {
  return {
    files: [
      { pattern: 'src/**/*.ts', load: false },
      { pattern: 'test/unit/setup.ts', load: false }
    ],

    tests: [
      { pattern: 'test/unit/**/*.spec.ts', load: false }
    ],

    env: {
      kind: 'chrome'
    },

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};
