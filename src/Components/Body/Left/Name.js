import React from 'react';
const logo = require("../../../images/home-page/empire-logo.png")

const name = () => {
        return (
            <div className="row logo-container">
                <div className="row img-container">
                    <img src={logo} alt="logo"/>
                </div>
                <input type="text" name="fleet-name" placeholder="Name your Fleet" id="fleet-name"/>
            </div>
        )
};

export default name;