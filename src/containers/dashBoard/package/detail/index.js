// @flow weak

import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as viewsActions        from '../../../../actions/viewAction';
import * as packageActions      from '../../../../actions/packageActions';
import Detail                   from './Detail';
import * as errorActions        from "../../../../actions/errorActions";

const mapStateToProps = (state) => {
    return {
        // containers:
        currentView:  state.views.currentView,

        packageDetail: state._package.packageDetail,
        isBrowseSuccess: state._package.isBrowseSuccess,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators(
            {
                ...viewsActions,
                ...packageActions,
                ...errorActions,
            },
            dispatch
        )
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);
