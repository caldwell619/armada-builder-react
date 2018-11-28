import React from 'react';
import Name from './Name/Name';
import Points from './Points/Points'

const fleetDisplay = () => {
    return (
        <div className="fleet-display">
            <Name/>
            <Points/>
        </div>
    )
};

export default fleetDisplay;