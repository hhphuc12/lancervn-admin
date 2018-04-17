// @flow strong

import React, {PureComponent} from 'react';
import { dateFormatter, truncateText } from "../../../../helpers";
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { validate } from './validation';

class Detail extends PureComponent<Props, State> {
    constructor(props) {
        super(props);

        this.renderField = this.renderField.bind(this);
        this.fetchListChild = this.fetchListChild.bind(this);
    }

    state = {
        nameAdd: '',
        descriptionAdd: '',
        isOK: true
    };

    async componentDidMount() {
        const {
            actions: {
                enterDetailCategory,
            },
            match,
        } = this.props;
        await this.setState({ parentId: match.params.id });
        this.fetchListChild(this.state.parentId);
        enterDetailCategory();
    }

    fetchListChild(parentId) {
        this.props.actions.getDetailIfNeed(parentId);
    }

    componentWillUnmount() {
        this.props.actions.leaveListCategory();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isCategoryAdded)
            this.fetchListChild(this.state.parentId);
        if (nextProps.syncValidation && !nextProps.syncValidation.syncErrors) {
            this.setState({ isOK: false });
        } else {
            this.setState({ isOK: true });
        }
    }

    renderField = ({input, label, id, type, fieldValue, meta: {touched, error, warning}}) => {
        return (
            <div className="form-group">
                <label htmlFor={id} className="text-left">{label}</label>
                <input
                    {...input}
                    type={type}
                    className={'form-control'}
                    id={id}
                    value={fieldValue}
                    onChange={e => this.setState({[input.name]: e.target.value.trim()})}
                />
                {touched && ((error && <label className="text-danger" style={{ marginTop: 5 }}>{`* ${error}`}</label>) ||
                    (warning && <label className="text-danger" style={{ marginTop: 5 }}>{`* ${warning}`}</label>))}
            </div>
        )
    };

    onAdd = async (
        event: SyntheticEvent<>
    ) => {
        if (event) {
            event.preventDefault();
        }
        const { addCategoryIfNeed, errorBadRequest } = this.props.actions;
        const { nameAdd, descriptionAdd } = this.state;
        try {
            addCategoryIfNeed({
                name: nameAdd,
                description: descriptionAdd,
                parentId: this.props.match.params.id,
                isParent: false,
            });
        } catch (error) {
            errorBadRequest();
            /* eslint-disable no-console */
            console.log('login went wrong..., error: ', error);
            /* eslint-enable no-console */
        }
    };

    render() {
        const { listChild, name, isFetching } = this.props;
        const { nameAdd, descriptionAdd, isOK } = this.state;
        const listChildJSX = listChild.map((cate, index) => (
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
                                    <h5 className="card-title mb-4" style={{ padding: 7 }}>{`Lĩnh vực con (${name})`}</h5>
                                    <div>
                                        <a
                                            data-toggle="modal"
                                            href="#addSubCategory"
                                            className="btn btn-primary"
                                            data-backdrop="static"
                                            data-keyboard="false"
                                        >
                                            <i className="fa fa-plus"/>
                                            Tạo lĩnh vực con
                                        </a>
                                    </div>
                                    <div className="modal fade" id="addSubCategory">
                                        <div className="modal-dialog">
                                            <div className="modal-content" style={{ backgroundColor: '#cce6ff' }}>
                                                <div className="modal-header">
                                                    <h4 className="modal-title">{`Thêm lĩnh vực con cho "${name}"`}</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <form className="forms-sample">
                                                        <Field
                                                            id="name"
                                                            type="text"
                                                            name="nameAdd"
                                                            label="Tên loại công việc"
                                                            component={this.renderField}
                                                            fieldValue={nameAdd}
                                                        />
                                                        <Field
                                                            id="description"
                                                            type="text"
                                                            name="descriptionAdd"
                                                            label="Mô tả (không bắt buộc)"
                                                            component={this.renderField}
                                                            fieldValue={descriptionAdd}
                                                        />
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <div className="button-area-2">
                                                        <button className="btn btn-light" data-dismiss="modal">Hủy bỏ</button>
                                                        <button
                                                            className="btn btn-success mr-2"
                                                            type="button"
                                                            onClick={this.onAdd}
                                                            disabled={isOK || isFetching}
                                                        >
                                                            {
                                                                isFetching ?
                                                                    <span>
                                                                        <i className="fa fa-spinner fa-pulse fa-fw"/>
                                                                    </span>
                                                                    :
                                                                    <span>
                                                                        Thêm
                                                                    </span>
                                                            }
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                            listChildJSX
                                        }
                                        </tbody>
                                    </table>
                                    {
                                        listChild.length === 0 ? <p className="text-center">Không có dữ liệu</p> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'syncValidation',
    validate,
})(Detail);
