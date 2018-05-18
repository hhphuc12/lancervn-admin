// @flow weak
import moment from 'moment';
import { listAdmin, postAdmin } from '../services/api';
import {
    REQUEST_LIST_ADMIN,
    RECEIVED_LIST_ADMIN,
    ERROR_LIST_ADMIN,
    REQUEST_ADD_ADMIN,
    RECEIVED_ADD_ADMIN,
    ERROR_ADD_ADMIN,
} from "../constants/adminType";
import { errorBadRequest } from './errorActions';

function requestListAdmins(time = moment().format()) {
    return {
        type:       REQUEST_LIST_ADMIN,
        isFetching: true,
        time
    };
}
function receivedListAdmins(admins, time = moment().format()) {
    return {
        type:       RECEIVED_LIST_ADMIN,
        isFetching: false,
        admins,
        time
    };
}
function errorListAdmins(time = moment().format()) {
    return {
        type:       ERROR_LIST_ADMIN,
        isFetching: false,
        time
    };
}

export function getAdminsIfNeed(): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldGetAdmins(getState())) {
            return dispatch(getAdmins());
        }
        return Promise.resolve('already fetching admins...');
    }
}

function shouldGetAdmins(
    state: any
): boolean {
    const isFetching = state.admin.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function getAdmins() {
    return dispatch => {
        dispatch(requestListAdmins());
        listAdmin()
            .then(res => {
                if (res.status !== 200)
                    return dispatch(errorBadRequest(res.status));
                dispatch(receivedListAdmins(res.data.docs));
            })
            .catch(error => {
                dispatch(errorListAdmins(error));
                dispatch(errorBadRequest(400));
            });
    };
};

function requestAddAdmin(time = moment().format()) {
    return {
        type:       REQUEST_ADD_ADMIN,
        isFetching: true,
        time
    };
}
function receivedAddAdmin(time = moment().format()) {
    return {
        type:       RECEIVED_ADD_ADMIN,
        isFetching: false,
        time
    };
}
function errorAddAdmin(msg, time = moment().format()) {
    return {
        type:       ERROR_ADD_ADMIN,
        isFetching: false,
        msg,
        time
    };
}

export function addAdminIfNeed(admin): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldAddAdmin(getState())) {
            return dispatch(addAdmin(admin));
        }
        return Promise.resolve('already fetching admin...');
    }
}

function shouldAddAdmin(
    state: any
): boolean {
    const isFetching = state.admin.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function addAdmin(admin) {
    return dispatch => {
        dispatch(requestAddAdmin());
        postAdmin(admin)
            .then(res => {
                if (res.status !== 201)
                    throw res;
                dispatch(receivedAddAdmin());
            })
            .catch(res => {
                dispatch(errorAddAdmin(res.error.message));
                dispatch(errorBadRequest(400));
            });
    };
};
