import React from 'react';
import { Link } from 'react-router';
import styles from './Navbar.scss';

export default function Navbar() {
  return (
    <nav className={`pa3 pa4-ns ${styles.navbar}`}>
      <Link to="/" className="link dim black b f5 f4-ns dib mr3">
        simple-starter
      </Link>
      <Link to="counter" className="link dim gray f6 f5-ns dib" href="#">
        Counter
      </Link>
    </nav>
  );
}
