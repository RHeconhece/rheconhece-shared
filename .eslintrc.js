module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      'tsconfig.json',
      'tsconfig.dev.json'
    ],
    sourceType: 'module'
  },
  ignorePatterns: [
    '**/build', // Ignore built files
    '**/*.d.ts', // Ignore *.d.ts files
    '**/*.test.*', // Ignore test files
    '**/*.spec.*', // Ignore spec files
    '**/*.config.*' // Ignore config files
  ],
  plugins: [
    'import',
    '@typescript-eslint'
  ],
  rules: {
    // plugins rules
    'import/no-unresolved': 0,
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-interface': [
      'error', {
        'allowSingleExtends': true
      }
    ],
    '@typescript-eslint/no-require-imports': [
      'error', {
        'allowAsImport': true
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }
    ],
    '@typescript-eslint/no-namespace': [
      'error', {
        'allowDeclarations': true
      }
    ],
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // custom rules
    'indent': 'off',
    'no-useless-catch': 0,
    'no-async-promise-executor': 'off',
    'new-cap': [
      'error', {
        'newIsCap': true,
        'capIsNew': false
      }
    ],
    'max-len': [
      'error', {
        'code': 120
      }
    ],
    'prefer-promise-reject-errors': [
      'error', {
        'allowEmptyReject': true
      }
    ],
    // change quotes do single
    'quotes': [
      'error',
      'single'
    ],
    // spaces in objetcs, arrays, etc..
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'computed-property-spacing': [
      'error',
      'always'
    ],
    // disable trailing comma
    'comma-dangle': [
      'error',
      'never'
    ],
    'space-before-function-paren': [
      'error', {
        'anonymous': 'always',
        'asyncArrow': 'always',
        'named': 'never'
      }
    ],
    // disable semicolon in end
    'semi': [
      'error',
      'never'
    ]
  }
}
