import { useRef, useState } from 'react';

export default function useStaticState(initialValue) {
  const state = useRef(initialValue);
  const [ticks, tick] = useState(0);

  return [
    () => state.current,
    (value) => state.current = value,
    () => tick(ticks + 1)
  ];
}
