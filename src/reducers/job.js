// @flow weak
import {
    REQUEST_LIST_JOB,
    RECEIVED_LIST_JOB,
    ERROR_LIST_JOB,
    REQUEST_BROWSER_JOB,
    RECEIVED_BROWSER_JOB,
    ERROR_BROWSER_JOB,
} from "../constants/jobType";
import moment from "moment/moment";

const initialState = {
    jobs: [],
    isFetching: false,
    isError: false,
    errorMessage: '',
};

const currentTime = moment().format();

export default function (
    state = initialState,
    action
) {
    switch (action.type) {
        case REQUEST_LIST_JOB:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_LIST_JOB:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                jobs: action && action.jobs ? action && action.jobs : initialState.jobs,
            };

        case ERROR_LIST_JOB:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
            };

        // case REQUEST_ADD_ADMIN:
        //     return {
        //         ...state,
        //         actionTime: action && action.time ?  action && action.time : currentTime,
        //         isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
        //     };
        //
        // case RECEIVED_ADD_ADMIN:
        //     return {
        //         ...state,
        //         actionTime: action && action.time ?  action && action.time : currentTime,
        //         isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
        //         isAdminAdded: true,
        //         isError: false,
        //         errorMessage: '',
        //     };
        //
        // case ERROR_ADD_ADMIN:
        //     return {
        //         ...state,
        //         actionTime: action && action.time ?  action && action.time : currentTime,
        //         isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
        //         isAdminAdded: false,
        //         isError: true,
        //         errorMessage: action && action.msg,
        //     };

        default:
            return { ...state };
    }
}
