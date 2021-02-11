import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './RoutesNames';
import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";
import HomePage from "../pages/HomePage/containers/HomePage";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ routes.home } component={ HomePage }/>
                <Route path={ routes.counter } component={ CounterPageContainer }/>
            </Switch>
        </div>
    );
};

export default Routes;
