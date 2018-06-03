// @flow weak

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../../../actions/viewAction';
import * as userAuthActions   from '../../../../actions/userAuthAction';
import * as skillActions      from '../../../../actions/skillActions';
import ListSkill              from './ListSkill';
import * as errorActions      from "../../../../actions/errorActions";

const mapStateToProps = (state) => {
    return {
        // containers:
        currentView:  state.views.currentView,

        // useAuth:
        isError:         state.skill.isError,
        errorMessage:    state.skill.errorMessage,
        isFetching:      state.skill.isFetching,

        skills:          state.skill.skills,
        pages:           state.skill.pages,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators(
            {
                ...viewsActions,
                ...userAuthActions,
                ...skillActions,
                ...errorActions,
            },
            dispatch
        )
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListSkill);
