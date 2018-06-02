// @flow weak
import {
    REQUEST_LIST_USER,
    RECEIVED_LIST_USER,
    ERROR_LIST_USER,
    REQUEST_CHANGE_BLOCK_STATE_USER,
    RECEIVED_CHANGE_BLOCK_STATE_USER,
    ERROR_CHANGE_BLOCK_STATE_USER,
    RESET_DATA_CHANGE_STATE,
} from "../constants/userType";
import moment from "moment/moment";

const initialState = {
    users: [],
    user: {},
    isFetching: false,
    isDataChange: false,
};

const currentTime = moment().format();

export default function (
    state = initialState,
    action
) {
    switch (action.type) {
        case REQUEST_LIST_USER:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_LIST_USER:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                users: action && action.users ? action && action.users : initialState.users,
            };

        case ERROR_LIST_USER:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
            };

        case REQUEST_CHANGE_BLOCK_STATE_USER:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_CHANGE_BLOCK_STATE_USER:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isDataChange: true,
            };

        case ERROR_CHANGE_BLOCK_STATE_USER:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isDataChange: false,
            };

        case RESET_DATA_CHANGE_STATE:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isDataChange: false,
            };

        default:
            return { ...state };
    }
}
