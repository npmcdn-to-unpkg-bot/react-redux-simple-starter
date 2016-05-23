import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class CounterView extends Component {

  render() {
    return (
      <div>
        <Helmet title="simple-starter" />
        <h1>Hello from home</h1>
      </div>
    );
  }
}
