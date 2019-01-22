import React from 'react';
import {Link} from 'react-router-dom'


const objectiveButtons = () => {
    return (
        <ul>
            <Link to="/objectives/assault"><button className="obj-button" id="assault-button">Add
                Assault
            </button></Link>
            <Link to="/objectives/defense"><button className="obj-button" id="defense-button">Add Defense</button></Link>
            <Link to="/objectives/navigation"><button className="obj-button" id="navigation-button">Add Navigation</button></Link>
        </ul>
    )
};

export default objectiveButtons;