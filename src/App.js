import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [datrMode, setDardMode] = useState(false);
  useEffect(() => {
    console.log('use-effect run');
    document.title = count;
  }, [count]);
  console.log('compoent-render');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setCount((state) => state + 1)}>{count}</button>
      <button onClick={() => setDardMode((state) => !state)}>
        {'toggle DarkMode'}
      </button>
    </div>
  );
}

/*
1. whenever compoent render useeffect callback run everytime
decide when you want to call useeffect to prevent infinite loop
2. useeffect run every single time when you compoent render and rerender.
*/

/*
logic change
*/

/*
there is miner issue with this method
let's we introduce a new state dardmode
*/
