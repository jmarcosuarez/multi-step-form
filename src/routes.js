import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './modules/App';
import Home from './modules/Home';
import SignUpForm from './modules/SignUpForm';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/signup" component={SignUpForm} />
  </Route>
);
