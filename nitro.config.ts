import { defineNitroConfig } from 'nitropack/config';
import { process } from 'std-env';

export default defineNitroConfig({
  srcDir: 'src',
  imports: false,
  routeRules: {
    '/github': {
      cors: true,
      swr: 1800,
      isr: 3600,
      headers: {
        'content-type': 'image/svg+xml',
      },
    },
  },
  runtimeConfig: {
    fallback: 'https://github.com/robonen',
    bypassToken: process.env.VERCEL_BYPASS_TOKEN,
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
