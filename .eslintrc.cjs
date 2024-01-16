/*
 *  ESLint config for this project.
 *  Created On 16 January 2024
 */

module.exports = {
    ignorePatterns: ['dist/**'],
    'env': {
        'es2021': true
    },
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
        'perfectionist',
    ],
    'parserOptions': {
        'sourceType': 'module',
        'ecmaVersion': 'latest'
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'rules': {
        'space-before-blocks': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        'object-curly-spacing': ['error', 'always'],
        'space-infix-ops': ['error', { int32Hint: false }],
        'indent': [
            'error',
            4
        ],
        'comma-spacing': ['error', { after: true, before: false }],
        'keyword-spacing': ['error', { after: true, before: true }],
        'semi': [
            'error',
            'never'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'key-spacing': ['error', { afterColon: true, beforeColon: false, }],
        'linebreak-style': [
            'error',
            'unix'
        ],
        '@typescript-eslint/consistent-type-imports': ['error', {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports'
        }],
        'perfectionist/sort-objects': [
            'error',
            {
                order: 'asc',
                'ignore-case': true,  
                type: 'line-length',
                'partition-by-comment': true,
            },
        ],
        'perfectionist/sort-imports': [
            'error',
            {
                order: 'asc',
                type: 'line-length',
                'newlines-between': 'never',
                groups: [
                    'type',
                    'nanostores',
                    ['builtin', 'external'],
                    'internal-type',
                    'internal',
                    ['parent-type', 'sibling-type', 'index-type'],
                    ['parent', 'sibling', 'index'],
                    'side-effect',
                    'style',
                    'object',
                    'unknown',
                ],
            },
        ]
    }
}
