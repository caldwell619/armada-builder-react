import React from 'react';

const right = (props) => {
    return (
        <div>
            <div id="myLinks">
                <a href="#">Fleet Builder</a>
                <a href="">Head to Head</a>
                <a href="#">Contact</a>
            </div>
            <a href = "#" className="icon" onClick={props.click}><i className = "fa fa-bars" ></i></a>
        </div>
    )
}

export default right;