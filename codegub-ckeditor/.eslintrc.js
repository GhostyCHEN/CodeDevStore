module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': ['off', { endOfLine: 'auto' }],
        // eslint与prettier冲突项
        'vue/html-self-closing': 0,
        'vue/max-attributes-per-line': 0,
        'vue/attribute-hyphenation': 0,
        'vue/require-default-prop': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/multiline-html-element-content-newline': 0,
        'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
        'vue/comment-directive': 'off'
    }
};
