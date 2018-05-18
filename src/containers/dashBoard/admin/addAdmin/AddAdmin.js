// @flow strong

// #region imports
import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from './validation';

class AddAdmin extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.renderField = this.renderField.bind(this);
    }

    static defaultProps = {
        isFetching: false
    };

    state = {
        username: '',
        password: '',
        confirmPassword: '',
        isOK: true
    };

    componentDidMount() {
        this.props.actions.enterAddAdmin();
    }

    componentWillUnmount() {
        this.props.actions.leaveAddAdmin();
    }

    componentWillReceiveProps(nextProps) {
        const {history} = this.props;
        if (nextProps.isAdminAdded)
            history.push('/dashboard/admins');
        if (nextProps.syncValidation && !nextProps.syncValidation.syncErrors) {
            this.setState({ isOK: false });
        } else {
            this.setState({ isOK: true });
        }
    }

    renderField = ({input, label, id, type, fieldValue, meta: {touched, error, warning}}) => {
        return (
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
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
        const { addAdminIfNeed, errorBadRequest } = this.props.actions;
        const { username, password } = this.state;
        try {
            addAdminIfNeed({ username, password });
        } catch (error) {
            errorBadRequest();
            /* eslint-disable no-console */
            console.log('login went wrong..., error: ', error);
            /* eslint-enable no-console */
        }
    };

    render() {
        const { username, password, confirmPassword, isOK } = this.state;
        const { isFetching, isError, errorMessage } = this.props;
        return (
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Thêm admin</h4>
                                {
                                    isError ? <label className="text-danger">{`* ${errorMessage}`}</label> : null
                                }
                                <form className="forms-sample">
                                    <Field
                                        id="username"
                                        type="text"
                                        name="username"
                                        label="Tên đăng nhập"
                                        component={this.renderField}
                                        fieldValue={username}
                                    />
                                    <Field
                                        id="password"
                                        type="password"
                                        name="password"
                                        label="Mật khẩu"
                                        component={this.renderField}
                                        fieldValue={password}
                                    />
                                    <Field
                                        id="confirm-password"
                                        type="password"
                                        name="confirmPassword"
                                        label="Nhập lại mật khẩu"
                                        component={this.renderField}
                                        fieldValue={confirmPassword}
                                    />
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
                                    <button className="btn btn-light">Hủy bỏ</button>
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
    validate,
})(AddAdmin);
