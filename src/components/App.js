import React from 'react';
import Navigation from './Navigation';

export default function App({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
