// @flow strong

// #region imports
import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import {dateFormater} from '../../../../helpers';
import swal from "sweetalert";

class Detail extends PureComponent<Props, State> {
    componentDidMount() {
        const {
            enterJobDetail,
            getJobDetailIfNeed,
        } = this.props.actions;
        enterJobDetail();
        getJobDetailIfNeed(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.actions.leaveJobDetail();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isBrowseSuccess) {
            swal("Xong!", "Công việc đã được duyệt và hiển thị lên trang chủ!", "success");
            nextProps.history.push('/dashboard/jobs');
        }
    }

    renderField = ({input, label, id, type, fieldValue, disabled, meta: {touched, error, warning}}) => {
        return (
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <input
                    {...input}
                    type={type}
                    className={'form-control'}
                    id={id}
                    value={fieldValue}
                    disabled={disabled}
                    onChange={e => this.setState({[input.name]: e.target.value})}
                />
                {touched && ((error && <label className="text-danger" style={{marginTop: 5}}>{`* ${error}`}</label>) ||
                    (warning && <label className="text-danger" style={{marginTop: 5}}>{`* ${warning}`}</label>))}
            </div>
        )
    };

    renderTextArea = ({input, label, id, fieldValue, disabled, meta: {touched, error, warning}}) => {
        return (
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <textarea
                    {...input}
                    className={'form-control'}
                    id={id}
                    rows='10'
                    disabled={disabled}
                    value={fieldValue}
                    onChange={e => this.setState({[input.name]: e.target.value})}
                />
                {touched && ((error && <label className="text-danger" style={{marginTop: 5}}>{`* ${error}`}</label>) ||
                    (warning && <label className="text-danger" style={{marginTop: 5}}>{`* ${warning}`}</label>))}
            </div>
        )
    };

    onBrowse = (event, jobId) => {
        event.preventDefault();
        const { browseJobIfNeed, errorBadRequest } = this.props.actions;
        try {
            browseJobIfNeed(jobId);
        } catch (error) {
            errorBadRequest();
            /* eslint-disable no-console */
            console.log('browse job went wrong..., error: ', error);
            /* eslint-enable no-console */
        }
    };

    render() {
        const { jobDetail, isFetching } = this.props;
        const {
            _id,
            name,
            category,
            content,
            deadlineOffer,
            priceExpected,
            province,
            prioritize,
            skill,
            userPost,
            isAdminBrowsed,
        } = jobDetail;
        if (!userPost) {
            return (<div>Loading...</div>);
        }

        return (
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h4>Khách hàng</h4>
                                <div className="profile-box">
                                    <img
                                        src={userPost.avatarUri}
                                        alt={`${userPost.firstName} ${userPost.lastName}`}
                                        className="avatar avatar-profile"
                                    />
                                    <h1 className="profile-name">
                                        {`${userPost.firstName} ${userPost.lastName}`}
                                    </h1>
                                </div>
                                <form>
                                    <h4>Thông tin công việc</h4>
                                    <br/>
                                    <Field
                                        id="name"
                                        type="text"
                                        name="name"
                                        label="Tên công việc"
                                        component={this.renderField}
                                        fieldValue={name}
                                        disabled={true}
                                    />
                                    <br/>
                                    <Field
                                        id="category"
                                        type="text"
                                        name="category"
                                        label="Lĩnh vực"
                                        component={this.renderField}
                                        fieldValue={category}
                                        disabled={true}
                                    />
                                    <br/>
                                    <Field
                                        id="content"
                                        type="text"
                                        name="content"
                                        label="Mô tả yêu cầu"
                                        component={this.renderTextArea}
                                        fieldValue={content}
                                        disabled={true}
                                    />
                                    <br/>
                                    <Field
                                        id="deadlineOffer"
                                        type="text"
                                        name="deadlineOffer"
                                        label="Hạn gửi báo giá"
                                        component={this.renderField}
                                        fieldValue={dateFormater(deadlineOffer)}
                                        disabled={true}
                                    />
                                    <br/>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <Field
                                                id="zip-code"
                                                type="text"
                                                name="zipCode"
                                                label="Mức giá đề xuất"
                                                component={this.renderField}
                                                fieldValue={priceExpected}
                                                disabled={true}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <Field
                                                id="province"
                                                type="text"
                                                name="province"
                                                label="Tỉnh/Thành phố"
                                                component={this.renderField}
                                                fieldValue={province}
                                                disabled={true}
                                            />
                                        </div>
                                    </div>
                                    <br/>
                                    <Field
                                        id="prioritize"
                                        type="text"
                                        name="prioritize"
                                        label="Ưu tiên"
                                        component={this.renderTextArea}
                                        fieldValue={prioritize}
                                        disabled={true}
                                    />
                                    <br/>
                                    <Field
                                        id="skill"
                                        type="text"
                                        name="skill"
                                        label="Yêu cầu kỹ năng"
                                        component={this.renderField}
                                        fieldValue={skill}
                                        disabled={true}
                                    />
                                    {
                                        isAdminBrowsed ? (<label className="badge badge-teal">Đã duyệt</label>) :
                                            (
                                                <div>
                                                    <button
                                                        className="btn btn-success mr-2"
                                                        type="button"
                                                        onClick={e => this.onBrowse(e, _id)}
                                                        disabled={isFetching}
                                                    >
                                                        {
                                                            isFetching ?
                                                                <span>
                                                                    <i className="fa fa-spinner fa-pulse fa-fw"/>
                                                                </span>
                                                                :
                                                                <span>
                                                                    Duyệt
                                                                </span>
                                                        }
                                                    </button>
                                                    <button className="btn btn-light">Hủy bỏ</button>
                                                </div>
                                            )
                                    }
                                </form>
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
})(Detail);
