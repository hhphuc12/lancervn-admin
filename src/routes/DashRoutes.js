// @flow
/* eslint no-process-env:0 */
import React                    from 'react';
import {
    Route,
    Switch
}                               from 'react-router-dom';
import DashBoard                from '../containers/dashBoard/dash';
import ListAdmin                from '../containers/dashBoard/admin/listAdmin';
import AddAdmin                 from '../containers/dashBoard/admin/addAdmin';
import ListCategory             from '../containers/dashBoard/category';
import AddCategory              from '../containers/dashBoard/category/addCategory';
import DetailCategory           from '../containers/dashBoard/category/categoryDetail';
import ListSkill                from '../containers/dashBoard/skill/listSkill';
import AddSkill                 from '../containers/dashBoard/skill/addSkill';
import ListUser                 from '../containers/dashBoard/user/listUser';
import ListJob                  from '../containers/dashBoard/job';
import PageNotFound             from '../containers/pageNotFound';

const DashRoutes = () => (
    <Switch>
        <Route exact path='/dashboard' component={DashBoard} />
        <Route path='/dashboard/admins' component={ListAdmin} />
        <Route path='/dashboard/add-admin' component={AddAdmin} />
        <Route path='/dashboard/categories' component={ListCategory} />
        <Route path='/dashboard/add-category' component={AddCategory} />
        <Route path='/dashboard/category/:id' component={DetailCategory} />
        <Route path='/dashboard/skills' component={ListSkill} />
        <Route path='/dashboard/add-skill' component={AddSkill} />
        <Route path='/dashboard/users' component={ListUser} />
        <Route path='/dashboard/jobs' component={ListJob} />
        <Route component={PageNotFound} />
    </Switch>
);

export default DashRoutes;
