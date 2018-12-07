import React from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Points from './Points'

const fleetDisplay = (props) => {
    return (
        <div className="fleet-display">
            <Name/>
            <Points points={props.points}/>
        </div>
    )
};

fleetDisplay.propTypes = {
    points: PropTypes.number
};
export default fleetDisplay;