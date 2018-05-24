// @flow weak
import moment from 'moment';
import { listUser, postChangeBlockStateUser } from '../services/api';
import {
    REQUEST_LIST_USER,
    RECEIVED_LIST_USER,
    ERROR_LIST_USER,
    REQUEST_CHANGE_BLOCK_STATE_USER,
    RECEIVED_CHANGE_BLOCK_STATE_USER,
    ERROR_CHANGE_BLOCK_STATE_USER,
    RESET_DATA_CHANGE_STATE,
} from "../constants/userType";
import { errorBadRequest } from './errorActions';
import auth from "../services/auth";

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

function requestChangeBlockStateUser(time = moment().format()) {
    return {
        type:       REQUEST_CHANGE_BLOCK_STATE_USER,
        isFetching: true,
        time
    };
}
function receivedChangeBlockStateUser(time = moment().format()) {
    return {
        type:       RECEIVED_CHANGE_BLOCK_STATE_USER,
        isFetching: false,
        time
    };
}
function errorChangeBlockStateUser(time = moment().format()) {
    return {
        type:       ERROR_CHANGE_BLOCK_STATE_USER,
        isFetching: false,
        time
    };
}

export function changeBlockStateUserIfNeed(id): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldChangeBlockStateUser(getState())) {
            return dispatch(changeBlockStateUser(id));
        }
        return Promise.resolve('already fetching user...');
    }
}

function shouldChangeBlockStateUser(
    state: any
): boolean {
    const isFetching = state.user.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function changeBlockStateUser(id) {
    return dispatch => {
        dispatch(requestChangeBlockStateUser());
        const adminToken = auth.getToken();
        postChangeBlockStateUser(id, adminToken)
            .then(res => {
                if (res.status !== 200)
                    return dispatch(errorBadRequest(res.status));
                dispatch(receivedChangeBlockStateUser());
            })
            .catch(res => {
                dispatch(errorChangeBlockStateUser());
                dispatch(errorBadRequest(400));
            });
    };
};

export function resetDataChangeState(time = moment().format()) {
    return {
        type:       RESET_DATA_CHANGE_STATE,
        isFetching: false,
        time
    };
}
