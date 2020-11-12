import React from 'react';
import Home from './Home';

import FilterPage from './FilterPage';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/FilterPage">
        <FilterPage />
      </Route>
    </div>
  );
};

export default App;
