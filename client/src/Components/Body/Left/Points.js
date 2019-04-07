import React from 'react';
import * as PropTypes from "prop-types";

const Points = ({ totalPoints, maxAllowablePoints}) => (
    <div className="row big-points-container">
        <div className="points-container col span-1-of-2">
            <div className="current-points">Current Points:</div>
            <div className="points-display">{totalPoints}</div>
        </div>
        <div className="max-points col span-1-of-2">
            <div className="max-points-label-cont">
                <label htmlFor="fleet-total" id={`max-points-label`}>Max Points:</label>
            </div>
            <div className="max-points-input-cont">
                <input type="number" id="fleet-total" value={maxAllowablePoints} onChange={() => console.log("change me")} name="fleet-total" placeholder="400"/>
            </div>
        </div>
    </div>
);


Points.propTypes = {
    totalPoints: PropTypes.number,
    maxAllowablePoints: PropTypes.number,
};


export default Points;
