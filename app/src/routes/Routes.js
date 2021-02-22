import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CounterOfCountersPageContainer from '../pages/CounterOfCountersPage/containers/CounterOfCountersPageContainer';
import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";
import HomePage from "../pages/HomePage/containers/HomePage";

import routes from './RoutesNames';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ routes.HOME } component={ HomePage }/>
                <Route path={ routes.COUNTER } component={ CounterPageContainer }/>
                <Route path={ routes.TOTAL_COUNTERS } component={ CounterOfCountersPageContainer }/>
            </Switch>
        </div>
    );
};

export default Routes;
