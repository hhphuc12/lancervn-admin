// @flow weak

import { connect }              from 'react-redux';
import {
    bindActionCreators,
    compose
}                               from 'redux';
import { withRouter }           from 'react-router';
import * as viewsActions        from '../../../actions/viewAction';
import * as errorActions        from '../../../actions/errorActions';
import * as userAuthActions     from '../../../actions/userAuthAction';
import Main                     from './main';

const mapStateToProps = (state) => {
    return {
        // views:
        currentView: state.views.currentView,

        isAuthenticated: state.userAuth.isAuthenticated,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators(
            {
                ...viewsActions,
                ...userAuthActions,
                ...errorActions,
            },
            dispatch
        )
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Main);
