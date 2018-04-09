// @flow weak

import { connect }              from 'react-redux';
import {
    bindActionCreators,
    compose
}                               from 'redux';
import { withRouter }           from 'react-router';
import * as viewsActions        from '../../../actions/viewAction';
import * as errorActions        from '../../../actions/errorActions';
import Main                     from './Main';

const mapStateToProps = (state) => {
    return {
        // views:
        currentView: state.views.currentView,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators(
            {
                // views:
                ...viewsActions,
                // error:
                ...errorActions
            },
            dispatch
        )
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Main);
