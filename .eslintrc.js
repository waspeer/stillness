module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js', 'plugin:cypress/recommended'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.tsx', 'test/**/*'] },
    ],
    quotes: ['error', 'single', { allowTemplateLiterals: false }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
