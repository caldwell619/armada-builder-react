import React from 'react';
import Name from './Name';
import Points from './Points'

const fleetDisplay = () => {
    return (
        <div className="fleet-display">
            <Name/>
            <Points/>
        </div>
    )
};

export default fleetDisplay;