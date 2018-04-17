// @flow weak
import {
    REQUEST_LIST_SKILL,
    RECEIVED_LIST_SKILL,
    ERROR_LIST_SKILL,
    REQUEST_ADD_SKILL,
    RECEIVED_ADD_SKILL,
    ERROR_ADD_SKILL,
} from "../constants/skillType";
import moment from "moment/moment";

const initialState = {
    skills: [],
    isFetching: false,
    isSkillAdded: false,
    isError: false,
    errorMessage: '',
};

const currentTime = moment().format();

export default function (
    state = initialState,
    action
) {
    switch (action.type) {
        case REQUEST_LIST_SKILL:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_LIST_SKILL:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                skills: action && action.skills ? action && action.skills : initialState.skills,
            };

        case ERROR_LIST_SKILL:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
            };

        case REQUEST_ADD_SKILL:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching
            };

        case RECEIVED_ADD_SKILL:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching: action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isSkillAdded: true,
                isError: false,
                errorMessage: '',
            };

        case ERROR_ADD_SKILL:
            return {
                ...state,
                actionTime: action && action.time ?  action && action.time : currentTime,
                isFetching:  action && action.isFetching ?  action && action.isFetching : initialState.isFetching,
                isSkillAdded: false,
                isError: true,
                errorMessage: action && action.msg,
            };

        default:
            return { ...state };
    }
}
