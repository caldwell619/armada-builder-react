import React from 'react';

class selectedShips extends React.Component {
    constructor(props) {
        super();

    }
    deleteShip = (s) => {
        this.props.delete(s.id, s.points);
    };

    /**
     {s.upgrades.map(a => {})
     **/

    render(){

        return (
            <div className="selected-ships">
                <div className="chosen-cards-container">
                    {this.props.shipInfo.map(s => {
                        return (
                            <div className="chosen-ship-container" onClick={this.props.toggle}>
                                <div key={s.id} className="chosen-ship">
                                    <div className={"span-4-of-12 ship-img"}>
                                        <img src={s.imagePath} alt="Ship Card"/>
                                    </div>
                                    <div className={"span-7-of-12 ship-name"}>{s.name}</div>
                                    <div className="delete ion-trash-a" onClick={this.deleteShip.bind(this, s)}/>
                                </div>
                                <div className="upgrade-bar" key={s.id + "-upgradeBar"}>
                                    {s.upgrades.map(a => {
                                        if (s.upgradesShown){
                                        return (
                                            <button>
                                                <img src={"/images/icons/" + a + ".png"} alt="upgrade icon"/>
                                            </button>
                                        )
                                    }
                                    })}
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