import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Right extends Component {
    render(){
        return (
            <div className="nav-container">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Fleet Builder</Link>
                    </li>
                    <li>
                        <a href="/auth/google">Log In</a>
                    </li>
                    <li>
                        {/*<Link to="/">Contact</Link>*/}
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        auth: state.auth
    }
};
export default connect(mapStateToProps)(Right);