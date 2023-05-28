/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
module.exports = {
  extends: ['plugin:hydrogen/recommended', 'plugin:hydrogen/typescript'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'hydrogen/prefer-image-component': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'no-case-declarations': 'off',
    // TODO: Remove jest plugin from hydrogen/eslint-plugin
    'jest/no-deprecated-functions': 'off',
    'prettier/prettier': ['error', prettierOptions],
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'index/only-import-export': 2,
    'import/extensions': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'import/no-default-export': 2,
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'index',
          'sibling',
          'object',
          'type',
        ],
      },
    ],
  },
};
