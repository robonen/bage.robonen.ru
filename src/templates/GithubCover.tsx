import { useStorage } from 'nitropack/runtime';
import { Circles } from '~/components/Circles';
import { Grid } from '~/components/Grid';
import { Robot } from '~/components/Robot';
import type { Template } from '~/types';

export interface GithubCoverProps {
  theme: string;
  profile: string;
  project: string;
  description?: string;
}

const background = {
  width: '100%',
  height: '100%',
  background: '#000',
  color: '#fff',
};

const robot = {
  position: 'absolute',
  top: '25px',
  left: '25px',
};

const project = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: '25px',
  left: '25px',
  fontSize: '20px',
};

const circles = {
  position: 'absolute',
  top: '-80%',
  right: '-20%',
};

function GithubCover(props: GithubCoverProps) {
  return (
    <Grid style={background}>
      <Robot style={robot} />
      <div style={project}>
        <span style={{ opacity: '0.5' }}>{props.profile}</span>
        <span>{props.project}</span>
      </div>
      <Circles style={circles}>
        {props.description}
      </Circles>
    </Grid>
  );
}

export const GithubCoverOptions: Template = {
  root: GithubCover,
  options: {
    width: 896,
    height: 270,
  },
  fonts: [
    {
      name: 'Syne',
      weight: 400,
      style: 'normal',
      loader: () =>
        useStorage('assets:server').getItemRaw<ArrayBufferLike>('fonts/syne/Syne-Regular.ttf'),
    },
    {
      name: 'Roboto',
      weight: 100,
      style: 'normal',
      loader: () =>
        useStorage('assets:server').getItemRaw<ArrayBufferLike>('fonts/roboto/Roboto-Thin.ttf'),
    },
  ],
};
