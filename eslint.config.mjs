import { defineConfig, globalIgnores } from 'eslint/config';
import next from '@next/eslint-plugin-next';
import tsEslint from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'node_modules/**',
    'next-env.d.ts',
  ]),

  next.configs.recommended,
  next.configs['core-web-vitals'],

  ...tsEslint.configs.recommended,

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // report formatting issues as ESLint errors
      'prettier/prettier': ['error', { endOfLine: 'auto' }],

      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },

  prettierConfig,
]);
