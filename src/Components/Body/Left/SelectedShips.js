import React from 'react';

class selectedShips extends React.Component {
    constructor(props) {
        super();

    }
    deleteShip = (s) => {
        this.props.delete(s.id, s.points);
    };

    toggleHandler = (id) => {
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === id
        });
        const newShips = [...this.props.shipInfo];

        if (!newShips[shipIndex.upgradesShown]){
            newShips[shipIndex].upgradesShown = !newShips[shipIndex].upgradesShown;
        } else if(!newShips[shipIndex.upgradesShown]) {
            newShips[shipIndex].upgradesShown = !newShips[shipIndex].upgradesShown
        };


        this.props.toggle(newShips);



    };



    render(){

        return (
            <div className="selected-ships">
                <div className="chosen-cards-container">
                    {this.props.shipInfo.map(s => {
                        return (
                            <div className="chosen-ship-container" >
                                <div key={s.id} className="chosen-ship">
                                    <div className={"span-4-of-12 ship-img"}>
                                        <img src={s.imagePath} alt="Ship Card"/>
                                    </div>
                                    <div className={"span-7-of-12 ship-name"} onClick={this.toggleHandler.bind(this, s.id)}>{s.name}</div>
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