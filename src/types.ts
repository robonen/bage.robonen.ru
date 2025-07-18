import type { h } from 'preact';
import type { SatoriOptions } from 'satori';

export interface Template {
  root: (props: any) => h.JSX.Element;
  options: Omit<SatoriOptions, 'fonts'> & { width: number; height: number };
  fonts: (
    Omit<SatoriOptions['fonts'][number], 'data'>
    & { loader: () => Promise<ArrayBuffer | null> }
  )[];
}
