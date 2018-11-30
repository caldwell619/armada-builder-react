import React from 'react';
import {funcTest} from '../Right/Ships'

class selectedShips extends React.Component {


    render() {
        let shipDiv = null;
        if (true) {
            shipDiv = (
                <p>I'm HERE!</p>
            )
        }
        return (
            <div className="selected-ships">
                {shipDiv}
            </div>
        )
    }
}

export default selectedShips;