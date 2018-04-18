// @flow weak
import {
    REQUEST_LIST_USER,
    RECEIVED_LIST_USER,
    ERROR_LIST_USER,
    REQUEST_DETAIL_USER,
    RECEIVED_DETAIL_USER,
    ERROR_DETAIL_USER,
} from "../constants/userType";
import moment from "moment/moment";

const initialState = {
    users: [],
    user: {},
    isFetching: false,
    isSkillAdded: false,
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

        case REQUEST_DETAIL_USER:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_DETAIL_USER:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                user: action && action.user ? action && action.user : initialState.user,
            };

        case ERROR_DETAIL_USER:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
            };

        default:
            return { ...state };
    }
}
