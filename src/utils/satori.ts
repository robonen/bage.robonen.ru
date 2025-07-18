import type { Template } from '~/types';
import satori from 'satori';

export async function satoriRenderTemplate(tpl: Template, props: any) {
  const fonts = await Promise.all(
    tpl.fonts.map(async (font) => {
      const buffer = await font.loader();

      return {
        ...font,
        data: buffer!,
      };
    }),
  );

  return satori(tpl.root(props), {
    ...tpl.options,
    fonts,
  });
}
