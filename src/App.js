import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
import LandingPage from './views/LandingPage/LandingPage';
import InsuranceForm from './components/InsurancesForm';
import ViewInsurances from './components/ViewInsurances';

const routing = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/insuranceform" component={InsuranceForm}></Route>
        <Route path="/viewinsurance" component={ViewInsurances}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

function App() {
  return <div className="App">{routing}</div>;
}

export default App;
