import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './views/LandingPage/LandingPage';

const routing = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

function App() {
  return <div className="App">{routing}</div>;
}

export default App;
