// @flow weak
import {
    REQUEST_LIST_PACKAGE,
    RECEIVED_LIST_PACKAGE,
    ERROR_LIST_PACKAGE,
    REQUEST_BROWSE_PACKAGE,
    RECEIVED_BROWSE_PACKAGE,
    ERROR_BROWSE_PACKAGE,
    REQUEST_PACKAGE_DETAIL,
    RECEIVED_PACKAGE_DETAIL,
    ERROR_PACKAGE_DETAIL,
} from "../constants/packageType";
import moment from "moment/moment";

const initialState = {
    packages: [],
    packageDetail: {},
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
        case REQUEST_LIST_PACKAGE:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_LIST_PACKAGE:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                packages: action && action.packages ? action && action.packages : initialState.packages,
                pages: action && action.pages ? action && action.pages : initialState.pages,
            };

        case ERROR_LIST_PACKAGE:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
            };

        case REQUEST_PACKAGE_DETAIL:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_PACKAGE_DETAIL:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                packageDetail: action && action.packageDetail ? action && action.packageDetail : initialState.packageDetail,
            };

        case ERROR_PACKAGE_DETAIL:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
            };

        case REQUEST_BROWSE_PACKAGE:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_BROWSE_PACKAGE:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isBrowseSuccess: true,
            };

        case ERROR_BROWSE_PACKAGE:
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
