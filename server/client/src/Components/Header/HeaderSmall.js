import React from 'react';
import LeftSmall from './Left/LeftSmall';
import RightSmall from './Right/RightSmall';

const header = () => {
    return (
        <div className = "topnav small-nav row">
         <LeftSmall/>
         <RightSmall/>
        </div>
    )
};

export default header;