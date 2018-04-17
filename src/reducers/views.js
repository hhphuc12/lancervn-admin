// @flow weak
import {
    ENTER_LOGIN_VIEW,
    ENTER_DASHBOARD_VIEW,
    ENTER_LIST_ADMIN_VIEW,
    ENTER_ADD_ADMIN_VIEW,
    ENTER_LIST_CATEGORY_VIEW,
    ENTER_ADD_CATEGORY_VIEW,
    ENTER_DETAIL_CATEGORY_VIEW,
    LEAVE_LOGIN_VIEW,
    LEAVE_DASHBOARD_VIEW,
    LEAVE_LIST_ADMIN_VIEW,
    LEAVE_ADD_ADMIN_VIEW,
    LEAVE_LIST_CATEGORY_VIEW,
    LEAVE_ADD_CATEGORY_VIEW,
    LEAVE_DETAIL_CATEGORY_VIEW,
} from '../constants/viewTypes';

const initialState = {
    currentView:  'home',
    enterTime:    null,
    leaveTime:    null
};

export default function views(state: Object = initialState, action: Object) {
    switch (action.type) {
        case ENTER_LOGIN_VIEW:
        case ENTER_DASHBOARD_VIEW:
        case ENTER_LIST_ADMIN_VIEW:
        case ENTER_ADD_ADMIN_VIEW:
        case ENTER_LIST_CATEGORY_VIEW:
        case ENTER_ADD_CATEGORY_VIEW:
        case ENTER_DETAIL_CATEGORY_VIEW:
            // can't enter if you are already inside
            if (state.currentView !== action.currentView) {
                return {
                    ...state,
                    currentView:  action.currentView,
                    enterTime:    action.enterTime,
                    leaveTime:    action.leaveTime
                };
            }
            return state;
        case LEAVE_LOGIN_VIEW:
        case LEAVE_DASHBOARD_VIEW:
        case LEAVE_LIST_ADMIN_VIEW:
        case LEAVE_ADD_ADMIN_VIEW:
        case LEAVE_LIST_CATEGORY_VIEW:
        case LEAVE_ADD_CATEGORY_VIEW:
        case LEAVE_DETAIL_CATEGORY_VIEW:
            // can't leave if you aren't already inside
            if (state.currentView === action.currentView) {
                return {
                    ...state,
                    currentView:  action.currentView,
                    enterTime:    action.enterTime,
                    leaveTime:    action.leaveTime
                };
            }
            return state;

        default:
            return state;
    }
}
