import React from 'react';
import { Link } from 'react-router-dom'

const addSquadron = () => {
    return (
        <div className="add-squadron-container">
            <Link to="/squadrons"><button id="squad-button"><span>+</span> Add Squadron</button></Link>
            {/*link goes here*/}
        </div>
    )
};

export default addSquadron;