import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Face from './components/Face';
import BarChart from './components/BarChart';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/face" component={Face} exact />
        <Route path="/barchart" component={BarChart} exact />
        {/* <PrivateRoute path="/protected" component={Profile} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
