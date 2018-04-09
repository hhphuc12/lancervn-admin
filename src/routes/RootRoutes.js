// @flow
/* eslint no-process-env:0 */
import React                    from 'react';
import {
    Route,
    Switch
}                               from 'react-router-dom';
import Login                    from '../containers/login';
import DashBoard                from '../containers/dashBoard';

const MainRoutes = () => (
    <Switch>
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={DashBoard} />
    </Switch>
);

export default MainRoutes;
