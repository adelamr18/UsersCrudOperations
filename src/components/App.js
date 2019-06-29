import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../containers/login'
import Home from './home';
class App extends Component {
  constructor() {
    super()
    this.state = {
      isauthenticated: false
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;