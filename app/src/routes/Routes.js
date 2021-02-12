import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";
import HomePage from "../pages/HomePage/containers/HomePage";

import routes from './RoutesNames';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ routes.HOME } component={ HomePage }/>
                <Route path={ routes.COUNTER } component={ CounterPageContainer }/>
            </Switch>
        </div>
    );
};

export default Routes;
