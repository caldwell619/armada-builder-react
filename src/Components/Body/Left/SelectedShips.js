import React from 'react';

const selectedShips = (props) => {
    let shipDiv = null;
    if (props.click) {
        shipDiv = (
            <p>I'm HERE!</p>
        )
    }
    return (
        <div className="selected-ships">
            {shipDiv}
        </div>
    )
};

export default selectedShips;