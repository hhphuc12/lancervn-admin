// @flow weak
import moment from 'moment';
import { listCategory, postAddCategory, detailCategory } from '../services/api';
import {
    REQUEST_LIST_CATEGORY,
    RECEIVED_LIST_CATEGORY,
    ERROR_LIST_CATEGORY,
    REQUEST_ADD_CATEGORY,
    RECEIVED_ADD_CATEGORY,
    ERROR_ADD_CATEGORY,
    REQUEST_DETAIL_CATEGORY,
    RECEIVED_DETAIL_CATEGORY,
    ERROR_DETAIL_CATEGORY,
} from "../constants/categoryType";
import { errorBadRequest } from './errorActions';

function requestListCategories(time = moment().format()) {
    return {
        type:       REQUEST_LIST_CATEGORY,
        isFetching: true,
        time
    };
}
function receivedListCategories(categories, time = moment().format()) {
    return {
        type:       RECEIVED_LIST_CATEGORY,
        isFetching: false,
        categories,
        time
    };
}
function errorListCategories(time = moment().format()) {
    return {
        type:       ERROR_LIST_CATEGORY,
        isFetching: false,
        time
    };
}

export function getCategoriesIfNeed(): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldGetCategories(getState())) {
            return dispatch(getCategories());
        }
        return Promise.resolve('already fetching categories...');
    }
}

function shouldGetCategories(
    state: any
): boolean {
    const isFetching = state.category.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function getCategories() {
    return dispatch => {
        dispatch(requestListCategories());
        listCategory()
            .then(res => {
                if (res.status !== 200)
                    return dispatch(errorBadRequest(res.status));
                dispatch(receivedListCategories(res.data.docs));
            })
            .catch(error => {
                dispatch(errorListCategories(error));
                dispatch(errorBadRequest(400));
            });
    };
};

function requestAddCategory(time = moment().format()) {
    return {
        type:       REQUEST_ADD_CATEGORY,
        isFetching: true,
        time
    };
}
function receivedAddCategory(time = moment().format()) {
    return {
        type:       RECEIVED_ADD_CATEGORY,
        isFetching: false,
        time
    };
}
function errorAddCategory(msg, time = moment().format()) {
    return {
        type:       ERROR_ADD_CATEGORY,
        isFetching: false,
        msg,
        time
    };
}

export function addCategoryIfNeed(category): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldAddCategory(getState())) {
            return dispatch(addCategory(category));
        }
        return Promise.resolve('already fetching admin...');
    }
}

function shouldAddCategory(
    state: any
): boolean {
    const isFetching = state.category.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function addCategory(category) {
    return dispatch => {
        dispatch(requestAddCategory());
        postAddCategory(category)
            .then(res => {
                if (res.status !== 201)
                    throw res;
                dispatch(receivedAddCategory());
            })
            .catch(res => {
                dispatch(errorAddCategory(res.error.message));
                dispatch(errorBadRequest(400));
            });
    };
};

function requestDetailCategory(time = moment().format()) {
    return {
        type:       REQUEST_DETAIL_CATEGORY,
        isFetching: true,
        time
    };
}
function receivedDetailCategory(category, time = moment().format()) {
    return {
        type:       RECEIVED_DETAIL_CATEGORY,
        isFetching: false,
        category,
        time
    };
}
function errorDetailCategory(time = moment().format()) {
    return {
        type:       ERROR_DETAIL_CATEGORY,
        isFetching: false,
        time
    };
}

export function getDetailIfNeed(id): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldGetDetail(getState())) {
            return dispatch(getDetail(id));
        }
        return Promise.resolve('already fetching categories...');
    }
}

function shouldGetDetail(
    state: any
): boolean {
    const isFetching = state.category.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function getDetail(id) {
    return dispatch => {
        dispatch(requestDetailCategory());
        detailCategory(id)
            .then(res => {
                if (res.status !== 200)
                    return dispatch(errorBadRequest(400));
                dispatch(receivedDetailCategory(res.data));
            })
            .catch(error => {
                dispatch(errorListCategories(error));
                dispatch(errorBadRequest(400));
            });
    };
};
