import React from 'react';
import { Link } from 'react-router-dom'

const right = (props) => {
    return (
        <div className="nav-container">
            <ul className="nav-links">
                <li>
                    <Link to="/ships">Fleet Builder</Link>
                </li>
                <li>
                    <Link to="/ships">Head to Head</Link>
                </li>
                <li>
                    <Link to="/ships">Contact</Link>
                </li>
            </ul>
        </div>


    )
}

export default right;