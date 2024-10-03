import { defineNitroConfig } from 'nitropack/config';

export default defineNitroConfig({
  srcDir: 'src',
  imports: false,
  routeRules: {
    '/github': {
      cors: true,
      isr: 3600,
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
        jsx: 'react',
        jsxImportSource: 'preact',
      },
    },
  },
});
