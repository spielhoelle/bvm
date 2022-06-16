module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'max-len': 0,
    'jsx-a11y/alt-text': 0,
  },
};
