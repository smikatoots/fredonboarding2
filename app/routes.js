import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppContainer from './containers/AppContainer';

export default (
    <Switch>
        <Route exact path="/" component={AppContainer} />
        {/* <Route path="/about" component={About} /> */}
    </Switch>
);
