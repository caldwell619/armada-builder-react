import React from 'react';
import Name from './Name';
import Points from './Points'

const FleetDisplay = props => {
    return (
        <div className="fleet-display">
            <Name/>
            <Points {...props}/>
        </div>
    )
};

export default FleetDisplay;