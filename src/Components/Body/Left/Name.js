import React from 'react';

const name = () => {
        return (
            <div className="row logo-container">
                <div className="row img-container">
                    <img src={"./images/home-page/empire-logo.png"} alt="logo"/>
                </div>
                <input type="text" name="fleet-name" placeholder="Name your Fleet" id="fleet-name"/>
            </div>
        )
};

export default name;