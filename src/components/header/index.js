// @flow weak

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { I18n } from 'react-i18next';

export default class Header extends Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t, {i18n}) => (
                        <header>
                            <nav className="navbar _navbar navbar-fixed-top">
                                <div className="container-fluid">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <Link className="navbar-brand" to="/">
                                            <img src="/images/logo.png" alt="mua1k.com"/>
                                        </Link>
                                    </div>
                                    <div className="visible-xs menu-mb">
                                        <div className="menu-top">
                                            <ul>
                                                <li className="dropdown">
                                                    <p className="area-login-register">
                                                        <Link to={'/login'} className="login-text"> {t("Login")}</Link> |
                                                        <Link to={'/register'} className="register-text"> {t("Register")}</Link>
                                                    </p>
                                                </li>
                                                <li className="cart">
                                                    <Link to="/"><i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                    </Link>
                                                    <span className="number"></span>
                                                </li>
                                                <li>
                                                    <div className="btn-menu-mb" id="btn-menu-mb">
                                                        <a>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="sidebar-mb" id="sidebar_mobile">
                                                <div className="sidebar-content">
                                                    <div className="box_sidebar">
                                                        <h3 className="box_sidebar_title">{t('title_menu')}</h3>
                                                        <div className="box_sidebar_body">
                                                            <div className="user_box">
                                                                <Link to="/help/edit_profile" className="edit_profile">
                                                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                                                </Link>
                                                                <div className="user_box_avatar">
                                                                </div>
                                                                <div className="user_box_content">
                                                                    <h4 className="ubc_name">XXX</h4>
                                                                    <p>{t('coin')} :    <b>12コイン</b>
                                                                    </p><p>{t('point')}:     <b>12</b>
                                                                </p><p>{t('uid')} :    <b>12</b>
                                                                </p><div className="ubc_dh">
                                                                    <Link to="/" className="btn-md btn-white"><img src="/images/icons/award.png" alt="" /> ポイント</Link>
                                                                    <Link to="/" className="btn-md btn-green">交換</Link>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="menu_sidebar">
                                                                <div className="menu_sidebar_inner">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="backdrop"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <form className="navbar-form navbar-left">
                                            <div className="input-group header_search">
                                                <input type="text" className="form-control"
                                                       placeholder={t("placeholder_search")} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress}/>
                                                <span className="input-group-btn">
                                              <button className="btn btn-default" type="button" onClick={this.handleSearch}>
                                                  <i className="fa fa-search" aria-hidden="true"></i>
                                              </button>
                                          </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </header>
                    )
                }
            </I18n>
        );
    }
}


Header.propTypes = {
    isAuthenticated: PropTypes.bool,
    notify: PropTypes.number,
    username: PropTypes.string,
    image: PropTypes.string,
    onClick: PropTypes.func,
    // poin: PropTypes.number,
    // coin: PropTypes.number,
    // uid: PropTypes.number
};

Header.defaultProps = {
    isAuthenticated: false,
    notify: 0,
    username: 'username',
    image: '/images/avatar.jpg',
    poin: 0,
    coin: 0,
    uid: 0
};
