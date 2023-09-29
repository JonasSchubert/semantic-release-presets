module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'scope-case': [2, 'always', 'lower-case'],
    'scope-min-length': [2, 'always', 3],
    'subject-case': [1, 'always', 'lower-case'],
    'subject-min-length': [2, 'always', 8]
  }
};
