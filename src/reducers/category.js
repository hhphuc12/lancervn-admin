// @flow weak
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
    RESET_ADD_STATE,
} from "../constants/categoryType";
import moment from "moment/moment";

const initialState = {
    categories: [],
    isFetching: false,
    isCategoryAdded: false,
    isError: false,
    errorMessage: '',
    name: '',
    listChild: [],
};

const currentTime = moment().format();

export default function (
    state = initialState,
    action
) {
    switch (action.type) {
        case REQUEST_LIST_CATEGORY:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_LIST_CATEGORY:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                categories: action && action.categories ? action && action.categories : initialState.categories,
            };

        case ERROR_LIST_CATEGORY:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case REQUEST_ADD_CATEGORY:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_ADD_CATEGORY:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isCategoryAdded: true,
                isError: false,
                errorMessage: '',
            };

        case ERROR_ADD_CATEGORY:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isCategoryAdded: false,
                isError: true,
                errorMessage: action && action.msg,
            };

        case REQUEST_DETAIL_CATEGORY:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_DETAIL_CATEGORY:
            const { name, listChild } = action && action.category;
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isError: false,
                errorMessage: '',
                name,
                listChild,
            };

        case ERROR_DETAIL_CATEGORY:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isError: true,
                errorMessage: '',
            };

        case RESET_ADD_STATE:
            return {
                ...state,
                isCategoryAdded: false,
            };

        default:
            return { ...state };
    }
}
