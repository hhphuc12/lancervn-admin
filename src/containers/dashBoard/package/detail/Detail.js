// @flow strong

// #region imports
import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import { moneyFormater } from '../../../../helpers';
import { Link } from 'react-router-dom';
import swal from "sweetalert";

class Detail extends PureComponent<Props, State> {
    componentDidMount() {
        const {
            enterPackageDetail,
            getPackageDetailIfNeed,
        } = this.props.actions;
        enterPackageDetail();
        getPackageDetailIfNeed(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.actions.leavePackageDetail();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isBrowseSuccess) {
            swal("Xong!", "Công việc đã được duyệt và hiển thị lên trang chủ!", "success");
            nextProps.history.push('/dashboard/packages');
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

    onBrowse = (event, packageId) => {
        event.preventDefault();
        const { browsePackageIfNeed, errorBadRequest } = this.props.actions;
        try {
            browsePackageIfNeed(packageId);
        } catch (error) {
            errorBadRequest();
            /* eslint-disable no-console */
            console.log('browse package went wrong..., error: ', error);
            /* eslint-enable no-console */
        }
    };

    render() {
        const { packageDetail, isFetching } = this.props;
        const {
            _id,
            name,
            category,
            expectedResult,
            target,
            priceExpected,
            process,
            dataNeed,
            userPost,
            isAdminBrowsed,
        } = packageDetail;
        if (!userPost) {
            return (<div>Loading...</div>);
        }

        return (
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h4>Nhà cung cấp</h4>
                                <div className="profile-box">
                                    <Link to={`/freelancer/${userPost._id}`} style={{ textDecoration: 'none' }}>
                                        <img
                                            src={userPost.avatarUri}
                                            alt={`${userPost.firstName} ${userPost.lastName}`}
                                            className="avatar avatar-profile"
                                        />
                                        <h1 className="profile-name">
                                            {`${userPost.firstName} ${userPost.lastName}`}
                                        </h1>
                                    </Link>
                                </div>
                                <form>
                                    <h4>Thông tin gói công việc</h4>
                                    <br/>
                                    <Field
                                        id="name"
                                        type="text"
                                        name="name"
                                        label="Tên gói công việc"
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
                                        id="target"
                                        type="text"
                                        name="target"
                                        label="Đối tượng khách hàng hướng tới"
                                        component={this.renderField}
                                        fieldValue={target}
                                        disabled={true}
                                    />
                                    <br/>
                                    <Field
                                        id="expectedResult"
                                        type="text"
                                        name="expectedResult"
                                        label="Kết quả đạt được"
                                        component={this.renderTextArea}
                                        fieldValue={expectedResult}
                                        disabled={true}
                                    />
                                    <br/>
                                    <div className="form-group">
                                        <label>Quy trình thực hiện:</label>
                                        <div style={{ marginTop: '0.5rem' }}>
                                            {
                                                process.map((p, index) => (
                                                    <div className="step" key={index}>
                                                        <div>
                                                            <div className="circle">{index + 1}</div>
                                                            <div className="line"/>
                                                        </div>
                                                        <div className="step-item">
                                                            <div className="title">{p}</div>
                                                            <div className="body"/>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <label className="media-cloud-title">Khách hàng cần cung cấp:</label>
                                        <ul>
                                            {
                                                dataNeed.map((d, index) => (
                                                    <li key={index} style={{ fontSize: '1rem' }}>
                                                        <i className="mdi mdi-checkbox-marked-outline text-primary" style={{ fontSize: '1.5rem', paddingRight: '0.5rem' }}/>
                                                        <span>{d}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <br/>
                                    <Field
                                        id="priceExpected"
                                        type="text"
                                        name="priceExpected"
                                        label="Mức giá bạn đưa ra"
                                        component={this.renderField}
                                        fieldValue={moneyFormater(priceExpected)}
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
