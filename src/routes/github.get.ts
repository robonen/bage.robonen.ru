import { defineEventHandler, getQuery } from 'h3';
import { GithubCoverOptions, type GithubCoverProps } from '~/templates/GithubCover';
import { satoriRenderTemplate } from '~/utils/satori';

export default defineEventHandler(async (event) => {
  const params = getQuery<GithubCoverProps>(event);

  return await satoriRenderTemplate(GithubCoverOptions, params);
});
