import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import Navbar from './components/navbar/navbar.component';
import SignInPage from './pages/signInUpPage/signPage.component';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;