module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    quotes: ['error', 'single', {
      allowTemplateLiterals: true,
    }],
    semi: ['error', 'always'],
    'import/extensions': ['error', 'never'],
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': ['error', {
      ObjectExpression: 'always',
      ObjectPattern: {
        multiline: true,
      },
      ImportDeclaration: 'never',
      ExportDeclaration: {
        multiline: true, minProperties: 3,
      },
    }],
    'max-len': 'off',
  },
};
