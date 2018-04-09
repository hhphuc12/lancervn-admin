// @flow weak
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewActions       from '../../actions/viewAction';
import * as campaignActions   from '../../actions/campaignActions';
import PageHome               from './home';

const mapStateToProps = (state) => {
    return {
        // view
        currentView:  state.views.currentView,

        // error
        errorStatus: state.error.errorStatus,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators(
            {
                //  containers
                ...viewActions,
                // campaign
                ...campaignActions,
            },
            dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageHome);
