module.exports = function(wallaby) {
  return {
    debug: true,
    files: [
      'package.json',
      'test-resources/**',
      'src/**/*.js',
    ],

    tests: [
      'test/**/*.js',
    ],

    env: {
      type: 'node',
    },

    testFramework: 'mocha',
    workers: {restart: true},
  };
};
