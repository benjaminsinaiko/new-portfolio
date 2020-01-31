import React from 'react';
import { useSpring, animated } from 'react-spring';
import orange from '@material-ui/core/colors/orange';

export default function HeaderBox({ boxOn }) {
  const fullScreenColor = orange[200];
  const bigRectColor = orange[300];
  const smallRectColor = orange[400];

  const props = useSpring({
    from: { left: '0%', top: '0%', width: '0%', height: '0%', background: fullScreenColor },
    to: async next => {
      while (boxOn) {
        await next({
          left: '0%',
          top: '0%',
          width: '100%',
          height: '100%',
          background: fullScreenColor
        });
        await next({ height: '25%', background: bigRectColor });
        await next({ width: '25%', left: '75%', background: smallRectColor });
        await next({ top: '0%', height: '100%', background: bigRectColor });
        await next({ top: '75%', height: '25%', background: smallRectColor });
        await next({ left: '0%', width: '100%', background: bigRectColor });
        await next({ width: '25%', background: smallRectColor });
        await next({ top: '50%', height: '50%', background: bigRectColor });
        await next({ top: '50%', height: '25%', background: smallRectColor });
        await next({ width: '100%', background: bigRectColor });
        await next({ left: '75%', width: '25%', background: smallRectColor });
        await next({ top: '0%', height: '75%', background: bigRectColor });
        await next({ height: '25%', background: smallRectColor });
        await next({ left: '0%', width: '100%', background: bigRectColor });
        await next({ width: '25%', background: smallRectColor });
        await next({ height: '0%', width: '0%', background: fullScreenColor });
      }
    }
  });
  return <animated.div style={{ ...props, position: 'absolute' }} />;
}
