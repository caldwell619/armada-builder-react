import React from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Points from './Points'

const fleetDisplay = (props) => {
    return (
        <div className="fleet-display">
            <Name faction={props.faction} nameChange={props.nameChange}/>
            <Points points={props.points}/>
        </div>
    )
};

export default fleetDisplay;