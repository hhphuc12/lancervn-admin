// @flow strong

import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import {validate} from './validation';

class AddAdmin extends PureComponent<Props, State> {
    constructor(props) {
        super(props);

        this.onAdd = this.onAdd.bind(this);
    }

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
        const { history } = this.props;
        if (nextProps.isAdminAdded)
            history.push('/dashboard/admins');
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

    onAdd() {
        const {
            actions: {
                addAdminIfNeed,
            }
        } = this.props;
        const { username, password } = this.state;

        addAdminIfNeed({ username, password });
    }

    render() {
        const { username, password, confirmPassword } = this.state;

        return (
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Thêm admin</h4>
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
                                    <button type="button" className="btn btn-success mr-2" onClick={this.onAdd}>Thêm</button>
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
