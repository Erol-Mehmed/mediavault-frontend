import { defineConfig, globalIgnores } from 'eslint/config';
import next from '@next/eslint-plugin-next';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import * as tseslint from 'typescript-eslint';

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

  ...tseslint.configs.recommended,

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  prettierConfig,
]);
