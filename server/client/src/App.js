import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Landing from './Components/Body/Landing'
import Login from './Components/Body/Login'
import {Route, Switch} from 'react-router-dom';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Header/>
          <Switch>
            <Route path='/builder/:faction' render={(routeProps) => <Body {...routeProps}/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/' render={(routeProps) => <Landing {...routeProps}/>}/>
          </Switch>
      </div>
    );
  }
}

export default App;
