// @flow strong

import React, {PureComponent} from 'react';
import { MaterialProgress } from '../../../../components';
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
        getUsersIfNeed(1);
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

    onSearch = async (
        event: SyntheticEvent<>
    ) => {
        const search = event.target.value;
        this.setState({ search });
        if (event.key === 'Enter') {
            this.props.actions.getUsersIfNeed(1, search);
        }
    };

    render() {
        const { users } = this.props;
        if (users.length === 0)
            return (
                <div className="content-wrapper loading-wrapper">
                    <MaterialProgress/>
                </div>
            );

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
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend bg-primary border-primary">
                                        <span className="input-group-text bg-transparent">
                                            <i className="fa fa-search text-white"/>
                                        </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập thông tin tìm kiếm"
                                            aria-label="Tìm kiếm"
                                            aria-describedby="colored-addon2"
                                            onKeyPress={e => this.onSearch(e)}
                                        />
                                    </div>
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
