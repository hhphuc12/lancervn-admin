// @flow weak
import moment from 'moment';
import { listJob, jobDetail, postBrowseJob } from '../services/api';
import {
    REQUEST_BROWSE_JOB,
    RECEIVED_BROWSE_JOB,
    ERROR_BROWSE_JOB,
    REQUEST_LIST_JOB,
    RECEIVED_LIST_JOB,
    ERROR_LIST_JOB,
    REQUEST_JOB_DETAIL,
    RECEIVED_JOB_DETAIL,
    ERROR_JOB_DETAIL,
} from "../constants/jobType";
import { errorBadRequest } from './errorActions';
import auth from '../services/auth';

function requestListJobs(time = moment().format()) {
    return {
        type:       REQUEST_LIST_JOB,
        isFetching: true,
        time
    };
}
function receivedListJobs(jobs, time = moment().format()) {
    return {
        type:       RECEIVED_LIST_JOB,
        isFetching: false,
        jobs,
        time
    };
}
function errorListJobs(time = moment().format()) {
    return {
        type:       ERROR_LIST_JOB,
        isFetching: false,
        time
    };
}

export function getListJobIfNeed(): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldGetJobs(getState())) {
            return dispatch(getJobs());
        }
        return Promise.resolve('already fetching jobs...');
    }
}

function shouldGetJobs(
    state: any
): boolean {
    const isFetching = state.job.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function getJobs() {
    return dispatch => {
        dispatch(requestListJobs());
        const adminToken = auth.getToken();
        listJob(1, adminToken)
            .then(res => {
                if (res.status !== 200)
                    return dispatch(errorBadRequest(res.status));
                dispatch(receivedListJobs(res.data.docs));
            })
            .catch(error => {
                dispatch(errorListJobs(error));
                dispatch(errorBadRequest(400));
            });
    };
}

function requestJobDetail(time = moment().format()) {
    return {
        type:       REQUEST_JOB_DETAIL,
        isFetching: true,
        time
    };
}
function receivedJobDetail(jobDetail, time = moment().format()) {
    return {
        type:       RECEIVED_JOB_DETAIL,
        isFetching: false,
        jobDetail,
        time
    };
}
function errorJobDetail(time = moment().format()) {
    return {
        type:       ERROR_JOB_DETAIL,
        isFetching: false,
        time
    };
}

export function getJobDetailIfNeed(id): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldGetJobDetail(getState())) {
            return dispatch(getJobDetail(id));
        }
        return Promise.resolve('already fetching job...');
    }
}

function shouldGetJobDetail(
    state: any
): boolean {
    const isFetching = state.job.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function getJobDetail(id) {
    return dispatch => {
        dispatch(requestJobDetail());
        const adminToken = auth.getToken();
        jobDetail(id, adminToken)
            .then(res => {
                if (res.status !== 200)
                    return dispatch(errorBadRequest(res.status));
                dispatch(receivedJobDetail(res.data));
            })
            .catch(error => {
                dispatch(errorJobDetail(error));
                dispatch(errorBadRequest(400));
            });
    };
}

function requestBrowseJob(time = moment().format()) {
    return {
        type:       REQUEST_BROWSE_JOB,
        isFetching: true,
        time
    };
}
function receivedBrowseJob(jobDetail, time = moment().format()) {
    return {
        type:       RECEIVED_BROWSE_JOB,
        isFetching: false,
        jobDetail,
        time
    };
}
function errorBrowseJob(time = moment().format()) {
    return {
        type:       ERROR_BROWSE_JOB,
        isFetching: false,
        time
    };
}

export function browseJobIfNeed(id): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldBrowseJob(getState())) {
            return dispatch(browseJob(id));
        }
        return Promise.resolve('already fetching job...');
    }
}

function shouldBrowseJob(
    state: any
): boolean {
    const isFetching = state.job.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function browseJob(id) {
    return dispatch => {
        dispatch(requestBrowseJob());
        const adminToken = auth.getToken();
        postBrowseJob(id, adminToken)
            .then(res => {
                if (res.status !== 200)
                    return dispatch(errorBadRequest(res.status));
                dispatch(receivedBrowseJob());
            })
            .catch(error => {
                dispatch(errorBrowseJob(error));
                dispatch(errorBadRequest(400));
            });
    };
}
