// @flow weak
import {
    REQUEST_LIST_JOB,
    RECEIVED_LIST_JOB,
    ERROR_LIST_JOB,
    REQUEST_BROWSE_JOB,
    RECEIVED_BROWSE_JOB,
    ERROR_BROWSE_JOB,
    REQUEST_JOB_DETAIL,
    RECEIVED_JOB_DETAIL,
    ERROR_JOB_DETAIL,
} from "../constants/jobType";
import moment from "moment/moment";

const initialState = {
    jobs: [],
    jobDetail: {},
    isBrowseSuccess: false,
    isFetching: false,
    isError: false,
    errorMessage: '',
    pages: 1,
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
                pages: action && action.pages ? action && action.pages : initialState.pages,
            };

        case ERROR_LIST_JOB:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
            };

        case REQUEST_JOB_DETAIL:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_JOB_DETAIL:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                jobDetail: action && action.jobDetail ? action && action.jobDetail : initialState.jobDetail,
            };

        case ERROR_JOB_DETAIL:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
            };

        case REQUEST_BROWSE_JOB:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_BROWSE_JOB:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isBrowseSuccess: true,
            };

        case ERROR_BROWSE_JOB:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isBrowseSuccess: false,
            };

        default:
            return { ...state };
    }
}
