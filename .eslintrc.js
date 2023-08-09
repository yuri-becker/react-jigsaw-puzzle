module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12
  },
  plugins: ['react', 'storybook', '@typescript-eslint', 'filename-rules'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prefer-arrow-callback': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'filename-rules/match': [2, {
      '.tsx': 'kebab-case',
      '.ts': 'kebab-case'
    }],
    'react/prop-types': 0,
    'no-console': ['error']
  }
}
