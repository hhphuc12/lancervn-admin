// @flow strong

// #region imports
import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from './validation';

class Login extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.renderField = this.renderField.bind(this);
    }

    static defaultProps = {
        isLogging: false
    };

    state = {
        username: '',
        password: '',
        isOK: true
    };

    componentDidMount() {
        this.props.actions.enterLogin();
    }

    componentWillUnmount() {
        this.props.actions.leaveLogin();
    }

    componentWillReceiveProps(nextProps) {
        const {history} = this.props;
        if (nextProps.isAuthenticated)
            history.push('/dashboard');
        console.log('hehe', nextProps.syncValidation);
        if (nextProps.syncValidation && !nextProps.syncValidation.syncErrors) {
            this.setState({ isOK: false });
        } else {
            this.setState({ isOK: true });
        }
        console.log('ok', this.state.isOK);
    }

    renderField = ({input, label, id, type, fieldValue, icon, meta: {touched, error, warning}}) => {
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
                <i className={`mdi ${icon}`}/>
                {touched && ((error && <label className="text-danger">{`* ${error}`}</label>) ||
                    (warning && <label className="text-danger">{`* ${warning}`}</label>))}
            </div>
        )
    };

    onLogin = async (
        event: SyntheticEvent<>
    ) => {
        if (event) {
            event.preventDefault();
        }
        const { logAdminIfNeed, errorBadRequest } = this.props.actions;
        const { username, password } = this.state;
        try {
            logAdminIfNeed(username, password);
        } catch (error) {
            errorBadRequest();
            /* eslint-disable no-console */
            console.log('login went wrong..., error: ', error);
            /* eslint-enable no-console */
        }
    };

    goHome = (
        event: SyntheticEvent<>
    ) => {
        if (event) {
            event.preventDefault();
        }
        const {history} = this.props;
        history.push({pathname: '/'});
    };

    render() {
        const { username, password, isOK } = this.state;
        const { isLogging, isError, errorMessage } = this.props;
        return (
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth login-full-bg">
                        <div className="row w-100">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left p-5">
                                    <h2>Đăng nhập (Quản trị viên)</h2>
                                    {
                                        isError ? <label className="text-danger">{`* ${errorMessage}`}</label> : null
                                    }
                                    <form className="pt-5">
                                        <Field
                                            id="username"
                                            type="text"
                                            name="username"
                                            label="Tên đăng nhập"
                                            component={this.renderField}
                                            icon="mdi-account"
                                            fieldValue={username}
                                        />
                                        <Field
                                            id="password"
                                            type="password"
                                            name="password"
                                            label="Mật khẩu"
                                            component={this.renderField}
                                            icon="mdi-eye"
                                            fieldValue={password}
                                        />
                                        <div className="mt-5">
                                            <button
                                                className="btn btn-block btn-primary btn-lg font-weight-medium"
                                                onClick={this.onLogin}
                                                disabled={isOK || isLogging}
                                            >
                                                {
                                                    isLogging ?
                                                        <span>
                                                            <i className="fa fa-spinner fa-pulse fa-fw"/>
                                                        </span>
                                                        :
                                                        <span>
                                                            Đăng nhập
                                                        </span>
                                                }
                                            </button>
                                        </div>
                                        <div className="mt-3 text-center">
                                            <a href="#" className="auth-link text-black">Quên mật khẩu?</a>
                                        </div>
                                    </form>
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
})(Login);
