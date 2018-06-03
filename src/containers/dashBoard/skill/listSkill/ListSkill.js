// @flow strong

import React, {PureComponent} from 'react';
import { dateFormatter } from "../../../../helpers";
import { MaterialProgress } from "../../../../components";
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

class ListSkill extends PureComponent<Props, State> {
    componentDidMount() {
        const {
            actions: {
                getSkillsIfNeed,
                enterListSkill,
            }
        } = this.props;
        enterListSkill();
        getSkillsIfNeed();
    }

    componentWillUnmount() {
        this.props.actions.leaveListSkill();
    }

    handlePageClick = data => {
        const page = data.selected + 1;
        this.props.actions.getSkillsIfNeed(page);
    };

    state = {
        data: [],
        offset: 0
    };

    render() {
        const { skills, pages } = this.props;
        if (skills.length === 0)
            return (
                <div className="content-wrapper loading-wrapper">
                    <MaterialProgress/>
                </div>
            );

        const skillsJSX = skills.map((skill, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{skill.name}</td>
                <td>{dateFormatter(skill.updatedAt)}</td>
                <td className="text-right">
                    <a href="#" className="btn btn-outline-danger btn-sm">
                        Xóa
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
                                    <h5 className="card-title mb-4" style={{ padding: 7 }}>Danh sách kỹ năng</h5>
                                    <div>
                                        <Link to="/dashboard/add-skill" className="btn btn-primary">
                                            <i className="fa fa-plus"/>
                                            Thêm kỹ năng
                                        </Link>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table center-aligned-table table-striped">
                                        <thead>
                                        <tr>
                                            <th className="border-bottom-0">STT</th>
                                            <th className="border-bottom-0">Kỹ năng</th>
                                            <th className="border-bottom-0">Lần cập nhật cuối</th>
                                            <th className="border-bottom-0 text-right">Hành động</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            skillsJSX
                                        }
                                        </tbody>
                                    </table>
                                </div>
                                <ReactPaginate
                                    previousLabel={"<"}
                                    nextLabel={">"}
                                    breakLabel={<a href="">...</a>}
                                    breakClassName={"break-me"}
                                    pageCount={pages}
                                    marginPagesDisplayed={1}
                                    pageRangeDisplayed={2}
                                    onPageChange={this.handlePageClick}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListSkill;
