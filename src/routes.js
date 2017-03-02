import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './modules/App';
import Home from './modules/Home';
import SignUpForm from './modules/SignUpForm';
import Step1 from './modules/SignUpForm/components/Step1';
import Step2 from './modules/SignUpForm/components/Step2';
import Step3 from './modules/SignUpForm/components/Step3';
import Step4 from './modules/SignUpForm/components/Step4';
import Step5 from './modules/SignUpForm/components/Step5';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="signup" component={SignUpForm}>
      <IndexRedirect to="/step1" />
      <Route path="/step1" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/step3" component={Step3} />
      <Route path="/step4" component={Step4} />
      <Route path="/step5" component={Step5} />
    </Route>
  </Route>
);
