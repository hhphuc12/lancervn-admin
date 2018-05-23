// @flow weak
import moment from 'moment';
import { listPackage, packageDetail, postBrowsePackage } from '../services/api';
import {
    REQUEST_BROWSE_PACKAGE,
    RECEIVED_BROWSE_PACKAGE,
    ERROR_BROWSE_PACKAGE,
    REQUEST_LIST_PACKAGE,
    RECEIVED_LIST_PACKAGE,
    ERROR_LIST_PACKAGE,
    REQUEST_PACKAGE_DETAIL,
    RECEIVED_PACKAGE_DETAIL,
    ERROR_PACKAGE_DETAIL,
} from "../constants/packageType";
import { errorBadRequest } from './errorActions';
import auth from '../services/auth';

function requestListPackages(time = moment().format()) {
    return {
        type:       REQUEST_LIST_PACKAGE,
        isFetching: true,
        time
    };
}
function receivedListPackages(packages, time = moment().format()) {
    return {
        type:       RECEIVED_LIST_PACKAGE,
        isFetching: false,
        packages,
        time
    };
}
function errorListPackages(time = moment().format()) {
    return {
        type:       ERROR_LIST_PACKAGE,
        isFetching: false,
        time
    };
}

export function getListPackageIfNeed(): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldGetPackages(getState())) {
            return dispatch(getPackages());
        }
        return Promise.resolve('already fetching packages...');
    }
}

function shouldGetPackages(
    state: any
): boolean {
    const isFetching = state._package.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function getPackages() {
    return dispatch => {
        dispatch(requestListPackages());
        const adminToken = auth.getToken();
        listPackage(1, adminToken)
            .then(res => {
                if (res.status !== 200)
                    return dispatch(errorBadRequest(res.status));
                dispatch(receivedListPackages(res.data.docs));
            })
            .catch(error => {
                dispatch(errorListPackages(error));
                dispatch(errorBadRequest(400));
            });
    };
}

function requestPackageDetail(time = moment().format()) {
    return {
        type:       REQUEST_PACKAGE_DETAIL,
        isFetching: true,
        time
    };
}
function receivedPackageDetail(packageDetail, time = moment().format()) {
    return {
        type:       RECEIVED_PACKAGE_DETAIL,
        isFetching: false,
        packageDetail,
        time
    };
}
function errorPackageDetail(time = moment().format()) {
    return {
        type:       ERROR_PACKAGE_DETAIL,
        isFetching: false,
        time
    };
}

export function getPackageDetailIfNeed(id): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldGetPackageDetail(getState())) {
            return dispatch(getPackageDetail(id));
        }
        return Promise.resolve('already fetching package...');
    }
}

function shouldGetPackageDetail(
    state: any
): boolean {
    const isFetching = state._package.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function getPackageDetail(id) {
    return dispatch => {
        dispatch(requestPackageDetail());
        const adminToken = auth.getToken();
        packageDetail(id, adminToken)
            .then(res => {
                if (res.status !== 200)
                    return dispatch(errorBadRequest(res.status));
                dispatch(receivedPackageDetail(res.data));
            })
            .catch(error => {
                dispatch(errorPackageDetail(error));
                dispatch(errorBadRequest(400));
            });
    };
}

function requestBrowsePackage(time = moment().format()) {
    return {
        type:       REQUEST_BROWSE_PACKAGE,
        isFetching: true,
        time
    };
}
function receivedBrowsePackage(packageDetail, time = moment().format()) {
    return {
        type:       RECEIVED_BROWSE_PACKAGE,
        isFetching: false,
        packageDetail,
        time
    };
}
function errorBrowsePackage(time = moment().format()) {
    return {
        type:       ERROR_BROWSE_PACKAGE,
        isFetching: false,
        time
    };
}

export function browsePackageIfNeed(id): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldBrowsePackage(getState())) {
            return dispatch(browsePackage(id));
        }
        return Promise.resolve('already fetching package...');
    }
}

function shouldBrowsePackage(
    state: any
): boolean {
    const isFetching = state._package.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function browsePackage(id) {
    return dispatch => {
        dispatch(requestBrowsePackage());
        const adminToken = auth.getToken();
        postBrowsePackage(id, adminToken)
            .then(res => {
                if (res.status !== 200)
                    return dispatch(errorBadRequest(res.status));
                dispatch(receivedBrowsePackage());
            })
            .catch(error => {
                dispatch(errorBrowsePackage(error));
                dispatch(errorBadRequest(400));
            });
    };
}
