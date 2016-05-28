import React from 'react';
import { Link } from 'react-router';

export default function Navigation() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>
    </div>
  );
}
