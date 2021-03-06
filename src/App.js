import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import Navbar from './components/navbar/navbar.component';
import SignInPage from './pages/signInUpPage/signPage.component';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Navbar currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;