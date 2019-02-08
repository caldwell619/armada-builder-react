import React from 'react';
import LeftSmall from './Left/LeftSmall';
import RightSmall from './Right/RightSmall';
import {Link} from "react-router-dom";

const header = () => {
    return (
        <React.Fragment>
            <div className="topnav small-nav row">
                <div className="mobile-header-cont">
                    <LeftSmall/>
                    <RightSmall/>
                </div>
                <div id="mobileLinks">
                    <ul>
                        <li><Link to="/ships">Fleet Builder</Link></li>
                        <li><Link to="/ships">Head to Head</Link></li>
                        <li><Link to="/ships">Contact</Link></li>
                    </ul>
                </div>
            </div>

        </React.Fragment>
    )
};

export default header;