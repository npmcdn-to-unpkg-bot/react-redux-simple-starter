import React from 'react';
import Navbar from './Navbar';
import '../styles/core.scss';

export default function App({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
