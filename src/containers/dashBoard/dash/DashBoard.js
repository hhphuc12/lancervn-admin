// @flow strong

import React, {PureComponent} from 'react';

class DashBoard extends PureComponent<Props, State> {
    componentDidMount() {
        this.props.actions.enterDashboard();
    }

    componentWillUnmount() {
        this.props.actions.leaveDashboard();
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                        <div className="card card-statistics">
                            <div className="card-body">
                                <div className="clearfix">
                                    <div className="float-left">
                                        <i className="mdi mdi-cube text-danger icon-lg"/>
                                    </div>
                                    <div className="float-right">
                                        <p className="card-text text-right">Công việc</p>
                                        <div className="fluid-container">
                                            <h3 className="card-title font-weight-bold text-right mb-0">15</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted mt-3">
                                    <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"/>
                                    Công việc người dùng đã đăng
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                        <div className="card card-statistics">
                            <div className="card-body">
                                <div className="clearfix">
                                    <div className="float-left">
                                        <i className="mdi mdi-receipt text-warning icon-lg"/>
                                    </div>
                                    <div className="float-right">
                                        <p className="card-text text-right">Gói công việc</p>
                                        <div className="fluid-container">
                                            <h3 className="card-title font-weight-bold text-right mb-0">15</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted mt-3">
                                    <i className="mdi mdi-bookmark-outline mr-1"
                                       aria-hidden="true"/>Gói công việc người dùng đã đăng
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                        <div className="card card-statistics">
                            <div className="card-body">
                                <div className="clearfix">
                                    <div className="float-left">
                                        <i className="mdi mdi-poll-box text-teal icon-lg"/>
                                    </div>
                                    <div className="float-right">
                                        <p className="card-text text-right">Người dùng</p>
                                        <div className="fluid-container">
                                            <h3 className="card-title font-weight-bold text-right mb-0">9</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted mt-3">
                                    <i className="mdi mdi-calendar mr-1" aria-hidden="true"/>
                                    Người dùng hoạt động trên hệ thống
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                        <div className="card card-statistics">
                            <div className="card-body">
                                <div className="clearfix">
                                    <div className="float-left">
                                        <i className="mdi mdi-account-location text-info icon-lg"/>
                                    </div>
                                    <div className="float-right">
                                        <p className="card-text text-right">Quản trị viên</p>
                                        <div className="fluid-container">
                                            <h3 className="card-title font-weight-bold text-right mb-0">2</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted mt-3">
                                    <i className="mdi mdi-reload mr-1" aria-hidden="true"/>
                                    Quản trị viên hệ thống
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;
