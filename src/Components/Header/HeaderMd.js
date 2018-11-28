import React from 'react';
import Left from './Left/LeftMd';
import Right from './Right/RightMd';

const header = () => {
    return (
        <header className="row tablet-nav">
            <div className="header-container row">
                <Left/>
                <Right/>
            </div>

        </header>
    )
};

export default header;