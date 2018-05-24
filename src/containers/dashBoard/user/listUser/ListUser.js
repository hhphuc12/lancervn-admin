// @flow strong

import React, {PureComponent} from 'react';
import { dateFormatter } from "../../../../helpers/index";
import swal from "sweetalert";

class ListUser extends PureComponent<Props, State> {
    componentDidMount() {
        const {
            actions: {
                getUsersIfNeed,
                enterListUser,
            }
        } = this.props;
        enterListUser();
        getUsersIfNeed();
    }

    componentWillUnmount() {
        this.props.actions.leaveListUser();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isDataChange) {
            swal("Xong!", "Thao tác thành công!", "success");
            nextProps.actions.getUsersIfNeed();
            nextProps.actions.resetDataChangeState();
        }
    }

    onBlock = (event, userId) => {
        event.preventDefault();
        const { changeBlockStateUserIfNeed, errorBadRequest } = this.props.actions;
        try {
            changeBlockStateUserIfNeed(userId);
        } catch (error) {
            errorBadRequest();
            /* eslint-disable no-console */
            console.log('browse package went wrong..., error: ', error);
            /* eslint-enable no-console */
        }
    };

    render() {
        const { users } = this.props;
        const usersJSX = users.map((user, index) => (
            <tr key={index}>
                <td className="table-cell-content">{index + 1}</td>
                <td className="table-cell-content">{user.name}</td>
                <td className="table-cell-content">{user.email}</td>
                <td className="table-cell-content">{user.occupation}</td>
                <td className="table-cell-content">{dateFormatter(user.createdAt)}</td>
                <td className="text-right">
                    <a
                        href="#"
                        className="btn btn-outline-danger btn-sm"
                        onClick={e => this.onBlock(e, user._id)}
                        style={{ marginRight: '0.5rem' }}
                    >
                        {user.isBlocked ? 'Mở khóa' : 'Khóa'}
                    </a>
                    <a href="#" className="btn btn-outline-success btn-sm">
                        Chi tiết
                    </a>
                </td>
            </tr>
        ));

        return (
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-list-header">
                                    <h5 className="card-title mb-4" style={{ padding: 7 }}>Users</h5>
                                </div>
                                <div className="table-responsive">
                                    <table className="table center-aligned-table table-striped">
                                        <thead>
                                        <tr>
                                            <th className="border-bottom-0">No.</th>
                                            <th className="border-bottom-0">Name</th>
                                            <th className="border-bottom-0">Email</th>
                                            <th className="border-bottom-0">Occupation</th>
                                            <th className="border-bottom-0">Created at</th>
                                            <th className="border-bottom-0 text-right">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            usersJSX
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListUser;
