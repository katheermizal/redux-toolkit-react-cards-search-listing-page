import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlossaryList from './components/containers/GlossaryList';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={GlossaryList} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
