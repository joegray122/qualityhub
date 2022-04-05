module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['prettier', 'react'],
    rules: {
        'prettier/prettier': ['error'],
        'global-require': 0,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
