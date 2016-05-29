import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default function LandingView() {
  return (
    <div className="pa3 pa4-ns">
      <Helmet title="simple-starter" />
      <span className="f3">
        Hello from home
      </span>
    </div>
  );
}
