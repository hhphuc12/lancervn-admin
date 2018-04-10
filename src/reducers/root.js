// @flow weak
import { routerReducer }                 from 'react-router-redux';
import { combineReducers }               from 'redux';
import { reducer as reduxFormReducer }   from 'redux-form';
import views                             from './views';
import userAuth                          from './userAuth';
import admin                             from './admin';
import error                             from './error';

export const reducers = {
    views,
    userAuth,
    admin,
    error,
};

export default combineReducers({
    ...reducers,
    routing: routerReducer,
    form: reduxFormReducer,
});
