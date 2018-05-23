// @flow strong

import React, {PureComponent} from 'react';
import { moneyFormater, str30Format } from "../../../../helpers/index";

class ListJob extends PureComponent<Props, State> {
    componentDidMount() {
        const {
            actions: {
                getListJobIfNeed,
                enterListJob,
            }
        } = this.props;
        enterListJob();
        getListJobIfNeed();
    }

    componentWillUnmount() {
        this.props.actions.leaveListJob();
    }

    render() {
        const { jobs } = this.props;

        const jobsJSX = jobs.map((j, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{str30Format(j.name)}</td>
                <td>{j.userPost.name}</td>
                <td>{str30Format(j.content)}</td>
                <td>{moneyFormater(j.priceExpected)}</td>
                <td>
                    {
                        j.isAdminBrowsed ? (<label className="badge badge-teal">Đã duyệt</label>)
                            : (<label className="badge badge-warning">Chờ xử lý</label>)
                    }
                </td>
                <td className="text-right">
                    <a href={`/dashboard/job/${j._id}`} className="btn btn-outline-success btn-sm">
                        Xem chi tiết
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
                                    <h5 className="card-title mb-4" style={{ padding: 7 }}>Danh sách công việc</h5>
                                </div>
                                <div className="table-responsive">
                                    <table className="table center-aligned-table table-striped">
                                        <thead>
                                        <tr>
                                            <th className="border-bottom-0">No.</th>
                                            <th className="border-bottom-0">Tên</th>
                                            <th className="border-bottom-0">Người đăng</th>
                                            <th className="border-bottom-0">Mô tả</th>
                                            <th className="border-bottom-0">Mức giá</th>
                                            <th className="border-bottom-0">Tình trạng</th>
                                            <th className="border-bottom-0 text-right">Hành động</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            jobsJSX
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

export default ListJob;
