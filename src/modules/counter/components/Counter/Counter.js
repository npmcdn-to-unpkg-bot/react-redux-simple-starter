import React from 'react';
import styles from './Counter.scss';

export default function Counter({ counter, increment, decrement }) {
  return (
    <div>
      <div>
        <button className={styles.btn} type="button" onClick={decrement}>-</button>
        <button className={`${styles.btn} ml2`} type="button" onClick={increment}>+</button>
      </div>
      <p>Count: {counter}</p>
    </div>
  );
}
