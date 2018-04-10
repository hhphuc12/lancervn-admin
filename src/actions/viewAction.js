// @flow
import moment from 'moment';
import {
    ENTER_LOGIN_VIEW,
    ENTER_LIST_ADMIN_VIEW,
    LEAVE_LIST_ADMIN_VIEW,
    ENTER_ADD_ADMIN_VIEW,
    LEAVE_ADD_ADMIN_VIEW,
    ENTER_DASHBOARD_VIEW,
    LEAVE_DASHBOARD_VIEW,
    ENTER_PAGE_NOT_FOUND_VIEW,
    LEAVE_LOGIN_VIEW,
    LEAVE_PAGE_NOT_FOUND_VIEW,
    ENTER_PAGE_BAD_REQUEST_VIEW,
    LEAVE_PAGE_BAD_REQUEST_VIEW,
} from "../constants/viewTypes";

export function enterDashboard(time: string = moment().format()) {
    return {
        type:         ENTER_DASHBOARD_VIEW,
        currentView:  'DashBoard',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveDashboard(time: string = moment().format()) {
    return {
        type:         LEAVE_DASHBOARD_VIEW,
        currentView:  'DashBoard',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterPageNotFound(time: string = moment().format()) {
    return {
        type:         ENTER_PAGE_NOT_FOUND_VIEW,
        currentView:  'PageNotFound',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leavePageNotFound(time: string = moment().format()) {
    return {
        type:         LEAVE_PAGE_NOT_FOUND_VIEW,
        currentView:  'PageNotFound',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterLogin(time: string = moment().format()) {
    return {
        type:         ENTER_LOGIN_VIEW,
        currentView:  'Login',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveLogin(time: string = moment().format()) {
    return {
        type:         LEAVE_LOGIN_VIEW,
        currentView:  'Login',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterListAdmin(time: string = moment().format()) {
    return {
        type:         ENTER_LIST_ADMIN_VIEW,
        currentView:  'ListAdmin',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveListAdmin(time: string = moment().format()) {
    return {
        type:         LEAVE_LIST_ADMIN_VIEW,
        currentView:  'ListAdmin',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterAddAdmin(time: string = moment().format()) {
    return {
        type:         ENTER_ADD_ADMIN_VIEW,
        currentView:  'AddAdmin',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveAddAdmin(time: string = moment().format()) {
    return {
        type:         LEAVE_ADD_ADMIN_VIEW,
        currentView:  'AddAdmin',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterPageBadRequest(time: string = moment().format()) {
    return {
        type:         ENTER_PAGE_BAD_REQUEST_VIEW,
        currentView:  'PageBadRequest',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leavePageBadRequest(time: string = moment().format()) {
    return {
        type:         LEAVE_PAGE_BAD_REQUEST_VIEW,
        currentView:  'PageBadRequest',
        enterTime:    null,
        leaveTime:    time
    };
}
