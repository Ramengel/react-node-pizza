module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx',
      ],
    },
  },
  rules: {
    'linebreak-style': 'off',
    'max-len': ['error', 150],
    'no-console': 'off',
    'no-alert': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
