import { defineNitroConfig } from 'nitropack/config';

export default defineNitroConfig({
  srcDir: 'src',
  imports: false,
  routeRules: {
    '/github': {
      cors: true,
      headers: {
        'content-type': 'image/svg+xml',
        // 'access-control-allow-origin': '*',
        // 'access-control-allow-methods': 'GET',
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
