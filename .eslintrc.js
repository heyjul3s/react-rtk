module.exports = {
  ignorePatterns: ['node_modules/', 'dist/'],
  extends: [
    'react',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'prettier'
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/ban-ts-ignore': 'off',
    'react-hooks/exhaustive-deps': 0
  }
};
