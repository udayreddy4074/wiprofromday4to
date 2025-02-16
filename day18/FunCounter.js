import React, { useState } from 'react';

const FunCounter = () => {
  
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    alert(`Count increased to: ${count + 1}`);
  };

  const decrement = () => {
    setCount(count - 1);
    alert(`Count decreased to: ${count - 1}`);
  };

  return (
    <div style={{ textAlign: 'left', marginTop: '5px' }}>
      <h1>Count: {count}</h1>

      <button onClick={increment} style={{ margin: '10px' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '10px' }}>Decrement</button>
    </div>
  );
};

export default FunCounter;
