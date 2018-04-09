// @flow weak
import moment                 from 'moment';
import auth                   from '../services/auth';

import {
    LOG_OUT_ADMIN,
    CHECK_IF_ADMIN_IS_AUTHENTICATED,
    ERROR_LOG_ADMIN,
    RECEIVED_LOG_ADMIN,
    REQUEST_LOG_ADMIN,
} from '../constants/userAuthType'
import { adminDataKey } from "../constants/common";

// --------------------------------
// REDUCER ADMIN AUTH
// --------------------------------
const user = auth.getUserInforByField();
const initialState = {
    // actions details
    isFetching:      false,
    isLogging:       false,
    time:            '',

    /* eslint-disable no-mixed-operators */
    username: user && user.username || '',

    token: auth.getToken(),
    isAuthenticated: auth.isAuthenticated(),   // authentication status (token based auth)
    isError: false,
    errorMessage: '',
};

export default function (
    state = initialState,
    action
) {
const currentTime = moment().format();

switch (action.type) {

    case CHECK_IF_ADMIN_IS_AUTHENTICATED:
        return {
            ...state,
            actionTime:      currentTime,
            isAuthenticated: action.isAuthenticated,
            token:           action.token || initialState.token,
            id:              action.user && action.user.id         ? action.user.id:        initialState.id,
            login:           action.user && action.user.login      ? action.user.login:     initialState.login,
        };

    case LOG_OUT_ADMIN:
        return {
            ...state,
            actionTime:      currentTime,
            isAuthenticated: false,
            isError:         false,
            token:           initialState.token,
            username:        initialState.username,
        };

    // user login (get token and userInfo)
    case REQUEST_LOG_ADMIN:
        return {
            ...state,
            actionTime: currentTime,
            isLogging:  true
        };

    case RECEIVED_LOG_ADMIN:
        auth.setToken(action.data.token);
        localStorage.setItem(adminDataKey, JSON.stringify(action.data));
        return {
            ...state,
            actionTime:      currentTime,
            isAuthenticated: true,
            token:           action.data,
            isError: false,
            errorMessage: '',
            isLogging:       false,
            id: action && action.data && action.data._id,
            username: action && action.data && action.data.username,
        };

    case ERROR_LOG_ADMIN:
        return {
            ...state,
            actionTime:         currentTime,
            isAuthenticated:    false,
            isLogging:          false,
            isError:            true,
            errorMessage:       action && action.msg,
        };

    default:
        return state;
    }
}
