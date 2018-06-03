// @flow strong

import React, {PureComponent} from 'react';
import { dateFormatter } from "../../../../helpers";
import { MaterialProgress } from "../../../../components";
import { Link } from 'react-router-dom';

class ListAdmin extends PureComponent<Props, State> {
    componentDidMount() {
        const {
            actions: {
                getAdminsIfNeed,
                enterListAdmin,
            }
        } = this.props;
        enterListAdmin();
        getAdminsIfNeed();
    }

    componentWillUnmount() {
        this.props.actions.leaveListAdmin();
    }

    render() {
        const { admins } = this.props;
        if (admins.length === 0)
            return (
                <div className="content-wrapper loading-wrapper">
                    <MaterialProgress/>
                </div>
            );

        const adminsJSX = admins.map((admin, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{admin.username}</td>
                <td>{dateFormatter(admin.createdAt)}</td>
                <td>{dateFormatter(admin.updatedAt)}</td>
                <td className="text-right"><label className="badge badge-teal">Active</label></td>
            </tr>
        ));

        return (
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-list-header">
                                    <h5 className="card-title mb-4" style={{ padding: 7 }}>Danh sách quản trị viên</h5>
                                    <div>
                                        <Link to="/dashboard/add-admin" className="btn btn-primary">
                                            <i className="fa fa-plus"/>
                                            Thêm admin
                                        </Link>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table center-aligned-table table-striped">
                                        <thead>
                                        <tr>
                                            <th className="border-bottom-0">STT</th>
                                            <th className="border-bottom-0">Tên đăng nhập</th>
                                            <th className="border-bottom-0">Ngày tạo</th>
                                            <th className="border-bottom-0">Lần chỉnh sửa cuối</th>
                                            <th className="border-bottom-0 text-right">Trạng thái</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            adminsJSX
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

export default ListAdmin;
