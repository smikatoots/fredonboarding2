import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import AppContainer2 from './containers/AppContainer2';


export default (
    <Switch>
        <Route exact path="/" component={AppContainer} />
        <Route exact path="/form2" component={AppContainer2} />
        {/* <Route path="/about" component={About} /> */}
    </Switch>
);
