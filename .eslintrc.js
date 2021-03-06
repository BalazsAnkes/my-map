module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    expect: true,
    sinon: true
  },
  overrides: [
    {
      files: [
        '**/*.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    },
    {
      files: '*.spec.js',
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
}
