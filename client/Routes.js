import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Greetings} />
            <Route path="/signup" component={SignupPage} />
        </Switch>
    )
}