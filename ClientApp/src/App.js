import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Web } from './components/Web';
import { Games } from './components/Games';
import { About } from './components/About';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/web' component={Web} />
        <Route path='/games' component={Games} />
        <Route path='/about' component={About} />
      </Layout>
    );
  }
}
