// @flow
import moment from 'moment';
import {
    ENTER_LOGIN_VIEW,
    ENTER_LIST_ADMIN_VIEW,
    LEAVE_LIST_ADMIN_VIEW,
    ENTER_ADD_ADMIN_VIEW,
    LEAVE_ADD_ADMIN_VIEW,
    ENTER_LIST_JOB_VIEW,
    LEAVE_LIST_JOB_VIEW,
    ENTER_JOB_DETAIL_VIEW,
    LEAVE_JOB_DETAIL_VIEW,
    ENTER_LIST_PACKAGE_VIEW,
    LEAVE_LIST_PACKAGE_VIEW,
    ENTER_PACKAGE_DETAIL_VIEW,
    LEAVE_PACKAGE_DETAIL_VIEW,
    ENTER_DASHBOARD_VIEW,
    LEAVE_DASHBOARD_VIEW,
    ENTER_LIST_CATEGORY_VIEW,
    LEAVE_LIST_CATEGORY_VIEW,
    ENTER_ADD_CATEGORY_VIEW,
    LEAVE_ADD_CATEGORY_VIEW,
    ENTER_DETAIL_CATEGORY_VIEW,
    LEAVE_DETAIL_CATEGORY_VIEW,
    ENTER_PAGE_NOT_FOUND_VIEW,
    LEAVE_LOGIN_VIEW,
    LEAVE_PAGE_NOT_FOUND_VIEW,
    ENTER_PAGE_BAD_REQUEST_VIEW,
    LEAVE_PAGE_BAD_REQUEST_VIEW,
    ENTER_LIST_SKILL_VIEW,
    LEAVE_LIST_SKILL_VIEW,
    ENTER_ADD_SKILL_VIEW,
    LEAVE_ADD_SKILL_VIEW,
    ENTER_LIST_USER_VIEW,
    LEAVE_LIST_USER_VIEW,
    ENTER_DETAIL_USER_VIEW,
    LEAVE_DETAIL_USER_VIEW,
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
        currentView:  'ListUser',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveListAdmin(time: string = moment().format()) {
    return {
        type:         LEAVE_LIST_ADMIN_VIEW,
        currentView:  'ListUser',
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

export function enterListJob(time: string = moment().format()) {
    return {
        type:         ENTER_LIST_JOB_VIEW,
        currentView:  'ListJob',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveListJob(time: string = moment().format()) {
    return {
        type:         LEAVE_LIST_JOB_VIEW,
        currentView:  'ListJob',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterJobDetail(time: string = moment().format()) {
    return {
        type:         ENTER_JOB_DETAIL_VIEW,
        currentView:  'JobDetail',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveJobDetail(time: string = moment().format()) {
    return {
        type:         LEAVE_JOB_DETAIL_VIEW,
        currentView:  'JobDetail',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterListPackage(time: string = moment().format()) {
    return {
        type:         ENTER_LIST_PACKAGE_VIEW,
        currentView:  'ListPackage',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveListPackage(time: string = moment().format()) {
    return {
        type:         LEAVE_LIST_PACKAGE_VIEW,
        currentView:  'ListPackage',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterPackageDetail(time: string = moment().format()) {
    return {
        type:         ENTER_PACKAGE_DETAIL_VIEW,
        currentView:  'PackageDetail',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leavePackageDetail(time: string = moment().format()) {
    return {
        type:         LEAVE_PACKAGE_DETAIL_VIEW,
        currentView:  'PackageDetail',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterListCategory(time: string = moment().format()) {
    return {
        type:         ENTER_LIST_CATEGORY_VIEW,
        currentView:  'ListCategory',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveListCategory(time: string = moment().format()) {
    return {
        type:         LEAVE_LIST_CATEGORY_VIEW,
        currentView:  'ListCategory',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterAddCategory(time: string = moment().format()) {
    return {
        type:         ENTER_ADD_CATEGORY_VIEW,
        currentView:  'AddCategory',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveAddCategory(time: string = moment().format()) {
    return {
        type:         LEAVE_ADD_CATEGORY_VIEW,
        currentView:  'AddCategory',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterDetailCategory(time: string = moment().format()) {
    return {
        type:         ENTER_DETAIL_CATEGORY_VIEW,
        currentView:  'DetailCategory',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveDetailCategory(time: string = moment().format()) {
    return {
        type:         LEAVE_DETAIL_CATEGORY_VIEW,
        currentView:  'DetailCategory',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterListSkill(time: string = moment().format()) {
    return {
        type:         ENTER_LIST_SKILL_VIEW,
        currentView:  'ListUser',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveListSkill(time: string = moment().format()) {
    return {
        type:         LEAVE_LIST_SKILL_VIEW,
        currentView:  'ListUser',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterAddSkill(time: string = moment().format()) {
    return {
        type:         ENTER_ADD_SKILL_VIEW,
        currentView:  'AddSkill',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveAddSkill(time: string = moment().format()) {
    return {
        type:         LEAVE_ADD_SKILL_VIEW,
        currentView:  'AddSkill',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterListUser(time: string = moment().format()) {
    return {
        type:         ENTER_LIST_USER_VIEW,
        currentView:  'ListUser',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveListUser(time: string = moment().format()) {
    return {
        type:         LEAVE_LIST_USER_VIEW,
        currentView:  'ListUser',
        enterTime:    null,
        leaveTime:    time
    };
}

export function enterDetailUser(time: string = moment().format()) {
    return {
        type:         ENTER_DETAIL_USER_VIEW,
        currentView:  'DetailUser',
        enterTime:    time,
        leaveTime:    null
    };
}

export function leaveDetailUser(time: string = moment().format()) {
    return {
        type:         LEAVE_DETAIL_USER_VIEW,
        currentView:  'DetailUser',
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
