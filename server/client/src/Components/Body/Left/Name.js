import React, {Component} from 'react';

class Name extends Component {
    inputValueHandler = (event) => {
        this.props.nameChange(event.target.value)
    };
    render() {
        return (
            <div className="row logo-container">
                <div className="row img-container">
                    <img src={`/images/home-page/${this.props.faction}-logo.png`} alt="logo"/>
                </div>
                <input type="text" name="fleet-name" onChange={this.inputValueHandler.bind(this)} placeholder="Name your Fleet" id="fleet-name"/>
            </div>
        )
    }
}

export default Name;