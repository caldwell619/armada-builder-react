import React from 'react';

const name = () => {
    return (
        <div className="row logo-container">
<<<<<<< HEAD:src/Components/Body/Left/FleetDisplay/Name/Name.js
            <img src={require("/Users/chriscaldwell/IdeaProjects/armada-builder-react/src/images/home-page/empire-logo.png")} alt="logo">
=======
            <img src={"./images/home-page/empire-logo.png"} alt="logo">
>>>>>>> class-trial:src/Components/Body/Left/Name.js
            </img>
            <input type="text" name="fleet-name" placeholder="Name your Fleet" id="fleet-name"></input>
        </div>
    )
};

export default name;