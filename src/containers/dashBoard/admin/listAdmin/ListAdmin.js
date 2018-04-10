// @flow strong

import React, {PureComponent} from 'react';
import { dateFormatter } from "../../../../helpers";

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
        const adminsJSX = admins.map((admin, index) => (
            <tr>
                <td>{index + 1}</td>
                <td>{admin.username}</td>
                <td>{dateFormatter(admin.createdAt)}</td>
                <td>{dateFormatter(admin.updatedAt)}</td>
                <td><label className="badge badge-teal">Active</label></td>
            </tr>
        ));

        return (
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h5 className="card-title mb-4" style={{ padding: 7 }}>Admins</h5>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="/dashboard/add-admin" className="btn btn-primary">
                                            <i className="fa fa-plus"/>
                                            Thêm admin
                                        </a>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table center-aligned-table table-striped">
                                        <thead>
                                        <tr>
                                            <th className="border-bottom-0">No.</th>
                                            <th className="border-bottom-0">Username</th>
                                            <th className="border-bottom-0">Create at</th>
                                            <th className="border-bottom-0">Updated at</th>
                                            <th className="border-bottom-0">Status</th>
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
