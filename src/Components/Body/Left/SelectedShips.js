import React from 'react';

class selectedShips extends React.Component {
    constructor(props) {
        super();

    }
    deleteShip = (s) => {
        this.props.delete(s.id, s.points);
    };


    render(){
        return (
            <div className="selected-ships">
                <div className="chosen-cards-container">
                    {this.props.shipInfo.map(s => {
                        return (
                            <div className="chosen-ship-container">
                                <div key={s.id} className="chosen-ship">
                                    <div className={"span-4-of-12 ship-img"}>
                                        <img src={s.imagePath} alt="Ship Card"/>
                                    </div>
                                    <div className={"span-7-of-12 ship-name"}>{s.name}</div>
                                    <div className="delete ion-trash-a" onClick={this.deleteShip.bind(this, s)}/>
                                </div>
                                <div className="upgrade-bar" key={s.id + "-upgradeBar"}>
                                    upgrade bar here
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )

    }


};

export default selectedShips;