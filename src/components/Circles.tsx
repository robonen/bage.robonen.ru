import type { h } from 'preact';

interface CirclesProps {
  style?: Record<string, string | number>;
  children?: string | h.JSX.Element | h.JSX.Element[];
}

export function Circles(props: CirclesProps) {
  return (
    <div style={{ display: 'flex', ...props.style }}>
      <div style={{ display: 'flex' }}>
        <div style={{
          width: '700px',
          height: '700px',
          background: '#000',
          borderRadius: '100%',
          boxShadow: '-6px 0px 60px #FFD0E3',
        }}
        />
        <div style={{
          display: 'flex',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '100%',
          background: '#ffffff40',
          boxShadow: '0 0 1px 0.5px #fff',
        }}
        >
          <div style={{
            maxWidth: '60%',
            marginLeft: '10%',
            alignItems: 'center',
            fontFamily: 'Roboto',
            fontWeight: 100,
            fontSize: '40px',
            textAlign: 'center',
          }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
