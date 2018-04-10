// @flow
/* eslint no-process-env:0 */
import React                    from 'react';
import {
    Route,
    Switch
}                               from 'react-router-dom';
import DashBoard                from '../containers/dashBoard/dash';
import ListAdmin                from '../containers/dashBoard/admin/listAdmin';
import AddAdmin                 from  '../containers/dashBoard/admin/addAdmin';
import PageNotFound             from '../containers/pageNotFound';

const DashRoutes = () => (
    <Switch>
        <Route exact path='/dashboard' component={DashBoard} />
        <Route exact path='/dashboard/admins' component={ListAdmin} />
        <Route exact path='/dashboard/add-admin' component={AddAdmin} />
        <Route component={PageNotFound} />
    </Switch>
);

export default DashRoutes;
