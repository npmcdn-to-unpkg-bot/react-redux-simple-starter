import React, { Component } from 'react';
import Navigation from './Navigation';

export default class App extends Component {

  render() {
    const { children } = this.props;

    return (
      <div>
        <Navigation />
        {children}
      </div>
    );
  }
}
