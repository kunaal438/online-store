import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homePage.component';

// components

const HatsPage = () => (
  <div>
    <h2>hats page</h2>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;