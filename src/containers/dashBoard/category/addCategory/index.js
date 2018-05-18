// @flow weak

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../../../actions/viewAction';
import * as userAuthActions   from '../../../../actions/userAuthAction';
import * as categoryActions   from '../../../../actions/categoryActions';
import AddCategory            from './AddCategory';
import * as errorActions      from "../../../../actions/errorActions";

const mapStateToProps = (state) => {
    return {
        // containers:
        currentView:  state.views.currentView,

        isError:         state.category.isError,
        errorMessage:    state.category.errorMessage,
        isFetching:      state.category.isFetching,
        isCategoryAdded: state.category.isCategoryAdded,

        syncValidation:  state.form.syncValidation,
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
)(AddCategory);
