import { defineNitroConfig } from 'nitropack/config';

export default defineNitroConfig({
  compatibilityDate: '2025-07-19',
  srcDir: 'src',
  imports: false,
  routeRules: {
    '/github': {
      cors: true,
      headers: {
        'content-type': 'image/svg+xml',
      },
    },
  },
  runtimeConfig: {
    fallback: 'https://github.com/robonen',
  },
  experimental: {
    asyncContext: true,
  },
  esbuild: {
    options: {
      jsx: 'automatic',
      jsxImportSource: 'preact',
    },
  },
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        jsxImportSource: 'preact',
      },
    },
  },
});
