import React, { Component } from 'react';
import LeftSmall from './Left/LeftSmall';
import RightSmall from './Right/RightSmall';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Header extends Component {
    user = () => {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <ul className="mobile-nav-ul">
                        <li><Link to="/">Fleet Builder</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><a href="/auth/google">Log In</a></li>
                    </ul>
                );
            default:
                return (
                    <ul className="mobile-nav-ul long-ul">
                        <li><Link to="/">Fleet Builder</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/face-off">Head to Head</Link></li>
                        <li><a href="/api/logout">Log Out</a></li>
                    </ul>
                )
        }
    };
    render() {
        let style = "";
        if (this.props.menuShown){
            style = "show-mobile-nav";
        }

        return (
            <React.Fragment>
                <div className="topnav small-nav row">
                    <div className="mobile-header-cont">
                        <LeftSmall/>
                        <RightSmall/>
                    </div>
                    <div className={`mobile-links ${style}`}>
                        {this.user()}
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        menuShown: state.menuShown
    }
};
export default withRouter(connect(mapStateToProps, actions)(Header));