// @flow weak
import moment from 'moment';
import { listJob } from '../services/api';
import {
    REQUEST_BROWSER_JOB,
    RECEIVED_BROWSER_JOB,
    ERROR_BROWSER_JOB,
    REQUEST_LIST_JOB,
    RECEIVED_LIST_JOB,
    ERROR_LIST_JOB,
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
        return Promise.resolve('already fetching admins...');
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

// function requestAddAdmin(time = moment().format()) {
//     return {
//         type:       REQUEST_ADD_ADMIN,
//         isFetching: true,
//         time
//     };
// }
// function receivedAddAdmin(time = moment().format()) {
//     return {
//         type:       RECEIVED_ADD_ADMIN,
//         isFetching: false,
//         time
//     };
// }
// function errorAddAdmin(msg, time = moment().format()) {
//     return {
//         type:       ERROR_ADD_ADMIN,
//         isFetching: false,
//         msg,
//         time
//     };
// }
//
// export function addAdminIfNeed(admin): (...any) => Promise<any> {
//     return (
//         dispatch: (any) => any,
//         getState: () => boolean,
//     ): any => {
//         if(shouldAddAdmin(getState())) {
//             return dispatch(addAdmin(admin));
//         }
//         return Promise.resolve('already fetching admin...');
//     }
// }
//
// function shouldAddAdmin(
//     state: any
// ): boolean {
//     const isFetching = state.admin.isFetching;
//     if (isFetching) {
//         return false;
//     }
//     return true;
// }
//
// function addAdmin(admin) {
//     return dispatch => {
//         dispatch(requestAddAdmin());
//         postAdmin(admin)
//             .then(res => {
//                 if (res.status !== 201)
//                     throw res;
//                 dispatch(receivedAddAdmin());
//             })
//             .catch(res => {
//                 dispatch(errorAddAdmin(res.error.message));
//                 dispatch(errorBadRequest(400));
//             });
//     };
// };
