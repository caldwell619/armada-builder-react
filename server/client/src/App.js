import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Landing from './Components/Body/Landing'
import Login from './Components/Body/Login'
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import './App.css';

class App extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }

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

const mapStateToProps = state => {
    return {
        user: state.auth
    }
}
export default connect(mapStateToProps, actions)(App);
