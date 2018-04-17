// @flow strong

import React, {PureComponent} from 'react';
import { dateFormatter, truncateText } from "../../../helpers";
import { Link } from 'react-router-dom';

class ListAdmin extends PureComponent<Props, State> {
    componentDidMount() {
        const {
            actions: {
                getCategoriesIfNeed,
                enterListCategory,
            }
        } = this.props;
        enterListCategory();
        getCategoriesIfNeed();
    }

    componentWillUnmount() {
        this.props.actions.leaveListCategory();
    }

    render() {
        const { categories } = this.props;
        const categoriesJSX = categories.map((cate, index) => (
            <tr key={index}>
                <td className="table-cell-content">{index + 1}</td>
                <td className="table-cell-content">{cate.name}</td>
                <td className="table-cell-content">{truncateText(cate.description, 30)}</td>
                <td className="table-cell-content">{dateFormatter(cate.updatedAt)}</td>
                <td className="text-right">
                    <Link to={`/dashboard/category/${cate._id}`} className="btn btn-outline-success btn-sm">
                        Chi tiết
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
                                    <h5 className="card-title mb-4" style={{ padding: 7 }}>Lĩnh vực</h5>
                                    <div>
                                        <a href="/dashboard/add-category" className="btn btn-primary">
                                            <i className="fa fa-plus"/>
                                            Tạo lĩnh vực
                                        </a>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table center-aligned-table table-striped">
                                        <thead>
                                        <tr>
                                            <th className="border-bottom-0">No.</th>
                                            <th className="border-bottom-0">Name</th>
                                            <th className="border-bottom-0">Description</th>
                                            <th className="border-bottom-0">Updated at</th>
                                            <th className="border-bottom-0 text-right">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            categoriesJSX
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
