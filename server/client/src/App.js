import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Landing from './Components/Body/Landing'
import Login from './Components/Body/Login'
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Profile from "./Components/Body/Profile";
import Contact from "./Components/Body/Contact";

class App extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }

  render() {

    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <Header/>
                      <Route path='/builder/:faction' render={(routeProps) => <Body {...routeProps}/>}/>
                      <Route path='/login' render={() => <Login/>}/>
                      <Route path='/profile' render={() => <Profile/>}/>
                      <Route path='/contact' render={() => <Contact/>}/>
                      <Route path='/' exact render={(routeProps) => <Landing {...routeProps}/>}/>
              </div>
          </BrowserRouter>
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
