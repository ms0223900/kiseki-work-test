module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    indent: [
      'warn',
      2
    ],
    semi: [
      'warn',
      'always'
    ],
    'vue/attribute-hyphenation': [
      0
    ]
  }
};
