import React from 'react';

const points = () => {
    return (
        <div className="row big-points-container">
            <div className="points-container col span-1-of-2">
                <div className="current-points">Current Points:</div>
                <div className="points-display">0</div>
            </div>
            <div className="max-points col span-1-of-2">
                <label htmlFor="fleet-total">Max Points:</label>
                <input type="text" id="fleet-total" name="fleet-total" value="400"></input>
            </div>
        </div>
    )
};

export default points;