import { defineEventHandler, getQuery } from 'h3';
import { defineCachedFunction } from 'nitropack/runtime';
import { GithubCoverOptions, type GithubCoverProps } from '~/templates/GithubCover';
import { satoriRenderTemplate } from '~/utils/satori';

const cachedTemplate = defineCachedFunction(
  async (query: GithubCoverProps) => await satoriRenderTemplate(GithubCoverOptions, query),
  { maxAge: 3600 },
);

export default defineEventHandler(async (event) => {
  const params = getQuery<GithubCoverProps>(event);

  return await cachedTemplate(params);
});
