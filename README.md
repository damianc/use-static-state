# use-static-state

Static version of the `useState()` hook.  

Component is not re-rendered when state gets changed till _force update_ function is called.

```
const [getCounter, setCounter, refreshCounter] = useStaticState(0);
```

## Install

```
npm i -P use-static-state
```

## Counter Example

```
import React from 'react';
import useStaticState from 'use-static-state';

function Counter() {
  const [getCounter, setCounter, refreshCounter] = useStaticState(0);

  function increase() {
    setCounter(getCounter() + 1);

    // or:
    
    setCounter(counter => counter + 1);
  }

  function refresh() {
    refreshCounter();
  }

  return <div>
    { getCounter() }
    <button onClick={increase}>+</button>
    <button onClick={refresh}>REFRESH</button>
  </div>;
}
```