import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Welcome from './welcome';
import Login from './login';
import Register from './register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;
