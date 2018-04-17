// @flow weak

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../../actions/viewAction';
import * as userAuthActions   from '../../../actions/userAuthAction';
import * as categoryActions   from '../../../actions/categoryActions';
import ListCategory               from './ListCategory';
import * as errorActions      from '../../../actions/errorActions';

const mapStateToProps = (state) => {
    return {
        // containers:
        currentView:  state.views.currentView,

        // useAuth:
        isAuthenticated: state.userAuth.isAuthenticated,
        isError:         state.userAuth.isError,
        errorMessage:    state.userAuth.errorMessage,
        isFetching:      state.userAuth.isFetching,

        categories:      state.category.categories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators(
            {
                ...viewsActions,
                ...userAuthActions,
                ...categoryActions,
                ...errorActions,
            },
            dispatch
        )
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListCategory);
