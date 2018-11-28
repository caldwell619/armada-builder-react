import React from 'react';

const bottomButtons = () => {
    return (
        <div className="action-bar">
            <div id="nav-fleet"></div>
            <button id="print-button">print</button>
            <button id="save-button">SAVE</button>
            <div className="export-container">
                <button id="export-button">EXPORT</button>
            </div>
        </div>

    )
};

export default bottomButtons;