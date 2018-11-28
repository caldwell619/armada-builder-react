import React from 'react';
import { Link } from 'react-router-dom'

const right = (props) => {
    return (
        <div>
            <div id="myLinks">
                <Link to="/ships">Fleet Builder</Link>
                <Link to="/ships">Head to Head</Link>
                <Link to="/ships">Contact</Link>
            </div>
            <Link to="/ships" className="icon"><i className = "fa fa-bars" ></i></Link>
        </div>
    )
}

export default right;