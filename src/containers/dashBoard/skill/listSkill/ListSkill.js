// @flow strong

import React, {PureComponent} from 'react';
import { dateFormatter } from "../../../../helpers";
import { MaterialProgress } from "../../../../components";
import ReactPaginate from 'react-paginate';

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

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        this.setState({offset: offset}, () => {
            console.log('hiihi');
        });
    };

    state = {
        data: [],
        offset: 0
    };

    render() {
        const { skills } = this.props;
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
                <td>{skill.description}</td>
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
                                    <h5 className="card-title mb-4" style={{ padding: 7 }}>Skills</h5>
                                    <div>
                                        <a href="/dashboard/add-skill" className="btn btn-primary">
                                            <i className="fa fa-plus"/>
                                            Thêm kỹ năng
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
                                            <th className="border-bottom-0 text-right">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            skillsJSX
                                        }
                                        </tbody>
                                    </table>
                                    <ReactPaginate
                                        previousLabel={"previous"}
                                        nextLabel={"next"}
                                        breakLabel={<a href="">...</a>}
                                        breakClassName={"break-me"}
                                        pageCount={this.state.pageCount}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
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
            </div>
        );
    }
}

export default ListSkill;
