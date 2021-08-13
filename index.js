import { useRef, useState } from 'react';

export default function useStaticState(initialValue) {
  const state = useRef(initialValue);
  const [ticks, tick] = useState(0);

  return [
    () => state.current,
    value => {
      if (typeof value === 'function') {
        state.current = value(state.current);
      } else {
        state.current = value;
      }
    },
    () => tick(ticks + 1)
  ];
}
