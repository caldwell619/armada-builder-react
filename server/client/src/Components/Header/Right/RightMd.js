import React from 'react';
import { Link } from 'react-router-dom'

const right = () => {
    return (
        <div className="nav-container">
            <ul className="nav-links">
                <li>
                    <Link to="/">Fleet Builder</Link>
                </li>
                <li>
                    {/*<Link to="/">Head to Head</Link>*/}
                </li>
                <li>
                    {/*<Link to="/">Contact</Link>*/}
                </li>
            </ul>
        </div>


    )
}

export default right;