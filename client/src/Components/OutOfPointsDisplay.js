import React from 'react';
import PropTypes from 'prop-types';

const OutOfPointsDisplay = ({ currentPoints, maxPoints}) => {
    return (maxPoints - currentPoints) < 22 ?  null :
        <div className="crawl-container">
            <div className="fade"/>
            <section className="star-wars">
                <div className="crawl">
                    <div className="title">
                    </div>
                    <p>Out of points, you are</p>
                </div>
            </section>
        </div>;
};

OutOfPointsDisplay.propTypes = {
    currentPoints: PropTypes.number,
    maxPoints: PropTypes.number,
};

export default OutOfPointsDisplay;
