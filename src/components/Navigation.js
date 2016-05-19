import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {

  render() {

    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
      </div>
    );
  }
}
