// @flow
import auth                   from '../services/auth';
import {
    postLogin,
}                             from "../services/api";

import {
    LOG_OUT_ADMIN,
    REQUEST_LOG_ADMIN,
    RECEIVED_LOG_ADMIN,
    ERROR_LOG_ADMIN,
} from '../constants/userAuthType'
import moment from "moment";

/**
 *
 * set user isAuthenticated to false and clear all app localstorage:
 *
 * @export
 * @returns {action} action
 */
export function onLogout() {
    auth.clearAllAppStorage();
    return {
        type: LOG_OUT_ADMIN
    };
}

/**
 *
 * check if user is connected by looking at locally stored
 * - token
 * - user fonrmation
 *
 * @export
 * @returns {action} action
 */

function requestLoginAdmin(time = moment().format()) {
    return {
        type:       REQUEST_LOG_ADMIN,
        isFetching: true,
        time
    };
}
function receivedLoginAdmin(data, time = moment().format()) {
    return {
        type:       RECEIVED_LOG_ADMIN,
        isFetching: false,
        data,
        time
    };
}

function errorLoginAdmin(msg, time = moment().format()) {
    return {
        type:       ERROR_LOG_ADMIN,
        isFetching: false,
        msg,
        time
    }
}

/**
 *
 *  user login
 *
 * @param {string} login admin login
 * @param {string} password password
 * @returns {Promise<any>} promised action
 */
function logAdmin(username, password) {
    return dispatch => {
        dispatch(requestLoginAdmin());
        postLogin(username, password)
            .then(
                res => {
                    if(res.status !== 200)
                        throw res;

                    dispatch(receivedLoginAdmin(res.data))
                }
            )
            .catch(
                res => dispatch(errorLoginAdmin(res.error.message))
            );
    };
};

export function logAdminIfNeed(
    username: string,
    password: string
): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean
    ): any => {
        if (shouldLogAdmin(getState())) {
            return dispatch(logAdmin(username, password));
        }
        return Promise.resolve('Already logged in!');
    };
}

function shouldLogAdmin(
    state: any
): boolean {
    const isLogging = state.userAuth.isLogging;
    if (isLogging) {
        return false;
    }
    return true;
}
