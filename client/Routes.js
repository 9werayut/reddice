import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Greetings} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}