// @flow strong

import React, {PureComponent} from 'react';
import { moneyFormater, str30Format } from "../../../../helpers/index";
import { Link } from 'react-router-dom';
import { MaterialProgress } from "../../../../components";

class ListPackage extends PureComponent<Props, State> {
    componentDidMount() {
        const {
            actions: {
                getListPackageIfNeed,
                enterListPackage,
            }
        } = this.props;
        enterListPackage();
        getListPackageIfNeed();
    }

    componentWillUnmount() {
        this.props.actions.leaveListPackage();
    }

    render() {
        const { packages } = this.props;
        if (packages.length === 0)
            return (
                <div className="content-wrapper loading-wrapper">
                    <MaterialProgress/>
                </div>
            );

        const packagesJSX = packages.map((p, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{str30Format(p.name)}</td>
                <td>{p.userPost.name}</td>
                <td>{str30Format(p.expectedResult)}</td>
                <td>{moneyFormater(p.priceExpected)}</td>
                <td>
                    {
                        p.isAdminBrowsed ? (<label className="badge badge-teal">Đã duyệt</label>)
                            : (<label className="badge badge-warning">Chờ xử lý</label>)
                    }
                </td>
                <td className="text-right">
                    <Link to={`/dashboard/package/${p._id}`} className="btn btn-outline-success btn-sm">
                        Xem chi tiết
                    </Link>
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
                                    <h5 className="card-title mb-4" style={{ padding: 7 }}>Danh sách gói công việc</h5>
                                </div>
                                <div className="table-responsive">
                                    <table className="table center-aligned-table table-striped">
                                        <thead>
                                        <tr>
                                            <th className="border-bottom-0">No.</th>
                                            <th className="border-bottom-0">Tên</th>
                                            <th className="border-bottom-0">Người đăng</th>
                                            <th className="border-bottom-0">Kết quả</th>
                                            <th className="border-bottom-0">Mức giá</th>
                                            <th className="border-bottom-0">Tình trạng</th>
                                            <th className="border-bottom-0 text-right">Hành động</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            packagesJSX
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

export default ListPackage;
