import React from 'react';
import { Link } from 'react-router-dom'

const addShip = () => {

    return (
        <div className="add-ship-container">
            <Link to="/ships"><button id="ship-button">Add Ship</button></Link>
        </div>
    )
};

export default addShip;