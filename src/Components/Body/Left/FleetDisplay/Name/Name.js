import React from 'react';

const name = () => {
    return (
        <div className="row logo-container">
            <img src={require("/Users/chriscaldwell/IdeaProjects/armada-builder-react/src/images/home-page/empire-logo.png")} alt="logo">
            </img>
            <input type="text" name="fleet-name" placeholder="Name your Fleet" id="fleet-name"></input>
        </div>
    )
};

export default name;