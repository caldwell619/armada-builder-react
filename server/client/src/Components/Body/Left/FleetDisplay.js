import React from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Points from './Points'

const fleetDisplay = (props) => {
    return (
        <div className="fleet-display">
            <Name faction={props.faction}/>
            <Points points={props.points}/>
        </div>
    )
};

export default fleetDisplay;