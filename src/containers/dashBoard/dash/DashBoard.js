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
                                        <p className="card-text text-right">Total Revenue</p>
                                        <div className="fluid-container">
                                            <h3 className="card-title font-weight-bold text-right mb-0">$65,650</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted mt-3">
                                    <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"/> 65%
                                    lower growth
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
                                        <p className="card-text text-right">Orders</p>
                                        <div className="fluid-container">
                                            <h3 className="card-title font-weight-bold text-right mb-0">3455</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted mt-3">
                                    <i className="mdi mdi-bookmark-outline mr-1"
                                       aria-hidden="true"/> Product-wise sales
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
                                        <p className="card-text text-right">Sales</p>
                                        <div className="fluid-container">
                                            <h3 className="card-title font-weight-bold text-right mb-0">5693</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted mt-3">
                                    <i className="mdi mdi-calendar mr-1" aria-hidden="true"/> Weekly
                                    Sales
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
                                        <p className="card-text text-right">Employees</p>
                                        <div className="fluid-container">
                                            <h3 className="card-title font-weight-bold text-right mb-0">246</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted mt-3">
                                    <i className="mdi mdi-reload mr-1" aria-hidden="true"/> Product-wise
                                    sales
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Orders</h5>
                                <div className="table-responsive">
                                    <table className="table center-aligned-table">
                                        <thead>
                                        <tr>
                                            <th className="border-bottom-0">Order No</th>
                                            <th className="border-bottom-0">Product Name</th>
                                            <th className="border-bottom-0">Purchased On</th>
                                            <th className="border-bottom-0">Shipping Status</th>
                                            <th className="border-bottom-0">Payment Method</th>
                                            <th className="border-bottom-0">Payment Status</th>
                                            <th className="border-bottom-0"></th>
                                            <th className="border-bottom-0"></th>
                                            <th className="border-bottom-0"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>034</td>
                                            <td>Iphone 7</td>
                                            <td>12 May 2017</td>
                                            <td>Dispatched</td>
                                            <td>Credit card</td>
                                            <td><label className="badge badge-teal">Approved</label></td>
                                            <td><a href="#" className="btn btn-outline-success btn-sm">View
                                                Order</a></td>
                                            <td><a href="#"
                                                   className="btn btn-outline-danger btn-sm">Cancel</a></td>
                                        </tr>
                                        <tr>
                                            <td>035</td>
                                            <td>Galaxy S8</td>
                                            <td>15 May 2017</td>
                                            <td>Dispatched</td>
                                            <td>Internet banking</td>
                                            <td><label className="badge badge-warning">Pending</label></td>
                                            <td><a href="#" className="btn btn-outline-success btn-sm">View
                                                Order</a></td>
                                            <td><a href="#"
                                                   className="btn btn-outline-danger btn-sm">Cancel</a></td>
                                        </tr>
                                        <tr>
                                            <td>036</td>
                                            <td>Amazon Echo</td>
                                            <td>17 May 2017</td>
                                            <td>Dispatched</td>
                                            <td>Credit card</td>
                                            <td><label className="badge badge-teal">Approved</label></td>
                                            <td><a href="#" className="btn btn-outline-success btn-sm">View
                                                Order</a></td>
                                            <td><a href="#"
                                                   className="btn btn-outline-danger btn-sm">Cancel</a></td>
                                        </tr>
                                        <tr>
                                            <td>037</td>
                                            <td>Google Pixel</td>
                                            <td>17 May 2017</td>
                                            <td>Dispatched</td>
                                            <td>Cash on delivery</td>
                                            <td><label className="badge badge-danger">Rejected</label></td>
                                            <td><a href="#" className="btn btn-outline-success btn-sm">View
                                                Order</a></td>
                                            <td><a href="#"
                                                   className="btn btn-outline-danger btn-sm">Cancel</a></td>
                                        </tr>
                                        <tr>
                                            <td>038</td>
                                            <td>Mac Mini</td>
                                            <td>19 May 2017</td>
                                            <td>Dispatched</td>
                                            <td>Debit card</td>
                                            <td><label className="badge badge-teal">Approved</label></td>
                                            <td><a href="#" className="btn btn-outline-success btn-sm">View
                                                Order</a></td>
                                            <td><a href="#"
                                                   className="btn btn-outline-danger btn-sm">Cancel</a></td>
                                        </tr>
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

export default DashBoard;
