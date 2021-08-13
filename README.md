# use-static-state

Static version of the `useState()` hook.  

Component is not re-rendered when state gets changed till _force update_ function is called.

```
const [getCounter, setCounter, refreshCounter] = useStaticState(0);
```

## Counter Example

```
function Counter() {
  const [getCounter, setCounter, refreshCounter] = useStaticState(0);

  function increase() {
    setCounter(getCounter() + 1);
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