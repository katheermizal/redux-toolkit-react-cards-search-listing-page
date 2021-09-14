import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlossaryList from './components/containers/GlossaryList';

test('renders learn react link', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={GlossaryList} />
      </Switch>
    </BrowserRouter>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
