/*
 *  ESLint flat configuration
 *  Created On 05 April 2026
 */

import js from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            perfectionist,
        },
        rules: {
            'perfectionist/sort-imports': 'error',
        },
    },
    {
        ignores: ['dist/**', 'node_modules/**'],
    },
)
