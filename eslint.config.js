import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
    {
        ignores: ['**/dist/**', '**/build/**', '**/*.js', '**/*.config.ts'],
    },
    ...tseslint.config(
        eslint.configs.recommended,
        tseslint.configs.recommendedTypeChecked,
        {
            languageOptions: {
                parserOptions: {
                    projectService: true,
                    tsconfigRootDir: import.meta.dirname,
                },
            },
            rules: {
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-unnecessary-condition': 'error',
                '@typescript-eslint/no-unsafe-argument': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/require-await': 'off',
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        argsIgnorePattern: '^_',
                        varsIgnorePattern: '^_',
                        caughtErrors: 'none',
                    },
                ],
            },
        },
    ),
]
