import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameContainer from './containers/GameContainer';
import About from './components/About';

export default (
    <Switch>
        <Route exact path="/" component={GameContainer} />
        <Route path="/about" component={About} />
    </Switch>
);
