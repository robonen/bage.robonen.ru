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

function GithubCover(props: GithubCoverProps) {
  return (
    <Grid style={{
      width: '100%',
      height: '100%',
      background: '#000',
      color: '#fff',
    }}
    >
      <Robot style={{
        position: 'absolute',
        top: '25px',
        left: '25px',
      }}
      />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        bottom: '25px',
        left: '25px',
        fontSize: '20px',
      }}
      >
        <span style={{ opacity: '0.5' }}>{props.profile}</span>
        <span>{props.project}</span>
      </div>
      <Circles style={{
        position: 'absolute',
        top: '-80%',
        right: '-20%',
      }}
      >
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
