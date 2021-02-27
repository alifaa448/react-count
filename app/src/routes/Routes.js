import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CounterOfCountersPageContainer from '../pages/CounterOfCountersPage/containers/CounterOfCountersPageContainer';
import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";
import HomePage from "../pages/HomePage/containers/HomePage";
import TodoListPageContainer from "../pages/TodoPage/containers/TodoListPageContainer";

import routes from './routesNames';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ routes.HOME } component={ HomePage }/>
                <Route path={ routes.COUNTER } component={ CounterPageContainer }/>
                <Route path={ routes.TOTAL_COUNTERS } component={ CounterOfCountersPageContainer }/>
                <Route path={ routes.TODOLIST } component={ TodoListPageContainer }/>
            </Switch>
        </div>
    );
};

export default Routes;
