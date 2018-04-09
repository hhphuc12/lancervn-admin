// @flow weak
import React, {
    PureComponent
}                                   from 'react'
import { Link }                     from 'react-router-dom';
import { I18n }                     from 'react-i18next';
import {
    AnimatedView,
}  from '../../components';

// #region flow types
type
    Props = any;
type
    State = any;
// #endregion

class PageHome extends PureComponent<Props, State> {
    static propTypes = {

    };

    handleLoadMore(e){
        e.preventDefault();
        const {
            actions: {
                loadMore
            },
            pageNumberAuction
        } = this.props;
        loadMore(pageNumberAuction);
    }

    render() {

        return(
            <I18n ns="translations">
                {
                    (t, {i18n}) => (
                        <AnimatedView>
                            <div className='wrapper'>
                                <div className="_banner">
                                    <div className="container">
                                        <div id="banner-slide" className="owl-carousel banner-slide"/>
                                    </div>
                                </div>
                                <div className="_content">
                                    <div className="container">
                                        <section className="slider-category">
                                            <div id="slider-category">
                                            </div>
                                        </section>
                                        <div className="main_content">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4">
                                                    <div className="sidebar_left">
                                                        <div className="box_sidebar">
                                                            <h3 className="box_sidebar_title">
                                                                <img src="images/icons/spinner.png" alt="Quay số"/>
                                                                Quay số
                                                            </h3>
                                                            <div className="box_sidebar_content">
                                                                <div className="text-center mgt-20">
                                                                </div>
                                                                <div className="loading_spinner">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-7 col-md-8 col-lg-8">
                                                    <div className="content_right">
                                                        <div className="_title">
                                                            <div className="pull-right">
                                                                <div className="dropdown">
                                                                    <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">
                                                                        <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></button>
                                                                    <ul className="dropdown-menu">
                                                                        <li><Link to="/" data-type="1" onClick={this.handleFilter}>Yêu thích</Link></li>
                                                                        <li><Link to="/" data-type="2" onClick={this.handleFilter}>Sắp hết hạng</Link></li>
                                                                        <li><Link to="/" data-type="3" onClick={this.handleFilter}>Mới nhất</Link></li>
                                                                        <li><Link to="/" data-type="4"onClick={this.handleFilter}>Giá cao</Link></li>
                                                                        <li><Link to="/" data-type="5" onClick={this.handleFilter}>Giá thấp</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content_inner">
                                                            <div className="list_product_main">

                                                            </div>
                                                            <div className="text-center mgt-20">
                                                            </div>
                                                            <div className="loading_spinner">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedView>
                    )
                }
            </I18n>
        );
    }
}

export default PageHome;
