import { defineNitroConfig } from 'nitropack/config';

export default defineNitroConfig({
  srcDir: 'src',
  imports: false,
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
