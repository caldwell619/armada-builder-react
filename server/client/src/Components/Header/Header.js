import React from 'react';
import HeaderSmall from './HeaderSmall';
import HeaderMd from './HeaderMd'

const header = () => {
    return (
        <nav>
            <div id="top"></div>
            <HeaderSmall/>
            <HeaderMd/>
        </nav>


    )
};

export default header;