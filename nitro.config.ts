import { defineNitroConfig } from 'nitropack/config';

export default defineNitroConfig({
  preset: 'vercel-edge',
  srcDir: 'src',
  imports: false,
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
        jsx: 'automatic',
        jsxImportSource: 'preact',
      },
    },
  },
});
