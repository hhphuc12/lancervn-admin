// @flow weak
import {
    REQUEST_LIST_ADMIN,
    RECEIVED_LIST_ADMIN,
    ERROR_LIST_ADMIN,
    REQUEST_ADD_ADMIN,
    RECEIVED_ADD_ADMIN,
    ERROR_ADD_ADMIN,
} from "../constants/adminType";
import moment from "moment/moment";

const initialState = {
    admins: [],
    isFetching: false,
    isAdminAdded: false,
    isError: false,
    errorMessage: '',
};

const currentTime = moment().format();

export default function (
    state = initialState,
    action
) {
    switch (action.type) {
        case REQUEST_LIST_ADMIN:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_LIST_ADMIN:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                admins: action && action.admins ? action && action.admins : initialState.admins,
            };

        case ERROR_LIST_ADMIN:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
            };

        case REQUEST_ADD_ADMIN:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_ADD_ADMIN:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isAdminAdded: true,
                isError: false,
                errorMessage: '',
            };

        case ERROR_ADD_ADMIN:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isAdminAdded: false,
                isError: true,
                errorMessage: action && action.msg,
            };

        default:
            return { ...state };
    }
}
