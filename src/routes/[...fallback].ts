import { defineEventHandler, sendRedirect } from 'h3';
import { useRuntimeConfig } from 'nitropack/runtime';

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();

  return sendRedirect(event, config.fallback, 301);
});
