import React from 'react';

const left = () => {
    return (
        <a href="https://www.fantasyflightgames.com/en/products/star-wars-armada/"
           className="active armada-logo-container">
            <img src={require("../../../images/home-page/armada-logo.png")} className="armada-logo-img" alt="logo">
            </img>
        </a>
    )
}

export default left;