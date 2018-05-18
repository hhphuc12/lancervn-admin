// @flow weak
import moment from 'moment';
import { listUser, getDetailUser } from '../services/api';
import {
    REQUEST_LIST_USER,
    RECEIVED_LIST_USER,
    ERROR_LIST_USER,
    REQUEST_DETAIL_USER,
    RECEIVED_DETAIL_USER,
    ERROR_DETAIL_USER,
} from "../constants/userType";
import { errorBadRequest } from './errorActions';

function requestListUsers(time = moment().format()) {
    return {
        type:       REQUEST_LIST_USER,
        isFetching: true,
        time
    };
}
function receivedListUsers(users, time = moment().format()) {
    return {
        type:       RECEIVED_LIST_USER,
        isFetching: false,
        users,
        time
    };
}
function errorListUsers(time = moment().format()) {
    return {
        type:       ERROR_LIST_USER,
        isFetching: false,
        time
    };
}

export function getUsersIfNeed(): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldGetUsers(getState())) {
            return dispatch(getUsers());
        }
        return Promise.resolve('already fetching users...');
    }
}

function shouldGetUsers(
    state: any
): boolean {
    const isFetching = state.user.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function getUsers() {
    return dispatch => {
        dispatch(requestListUsers());
        listUser()
            .then(res => {
                if (res.status !== 200)
                    return dispatch(errorBadRequest(res.status));
                dispatch(receivedListUsers(res.data.docs));
            })
            .catch(error => {
                dispatch(errorListUsers(error));
                dispatch(errorBadRequest(400));
            });
    };
};

function requestDetailUser(time = moment().format()) {
    return {
        type:       REQUEST_DETAIL_USER,
        isFetching: true,
        time
    };
}
function receivedDetailUser(user, time = moment().format()) {
    return {
        type:       RECEIVED_DETAIL_USER,
        isFetching: false,
        user,
        time
    };
}
function errorDetailUser(time = moment().format()) {
    return {
        type:       ERROR_DETAIL_USER,
        isFetching: false,
        time
    };
}

export function getUserIfNeed(id): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldGetDetailUser(getState())) {
            return dispatch(detailUser(id));
        }
        return Promise.resolve('already fetching user...');
    }
}

function shouldGetDetailUser(
    state: any
): boolean {
    const isFetching = state.user.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function detailUser(user) {
    return dispatch => {
        dispatch(requestDetailUser());
        getDetailUser(user)
            .then(res => {
                if (res.status !== 201)
                    return dispatch(errorBadRequest(res.status));
                dispatch(receivedDetailUser());
            })
            .catch(res => {
                dispatch(errorDetailUser());
                dispatch(errorBadRequest(400));
            });
    };
};
