import React from 'react';
import Name from './Name';
import Points from './Points'

const fleetDisplay = (props) => {
    return (
        <div className="fleet-display">
            <Name faction={props.faction} nameChange={props.nameChange} name={props.name}/>
            <Points points={props.points}/>
        </div>
    )
};

export default fleetDisplay;