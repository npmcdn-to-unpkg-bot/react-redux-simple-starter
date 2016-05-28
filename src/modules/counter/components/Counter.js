import React from 'react';

export default function Counter({ counter, increment, decrement }) {
  return (
    <div>
      <div>
        <button type="button" onClick={decrement}>-</button>
        <button type="button" onClick={increment}>+</button>
      </div>
      <p>Count: {counter}</p>
    </div>
  );
}
