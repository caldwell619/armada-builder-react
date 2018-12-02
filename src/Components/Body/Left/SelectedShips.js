import React from 'react';

const selectedShips = (props) => {
        return (
            <div className="selected-ships">
                <div className="chosen-cards-container">
                    {props.shipInfo.map(s => {
                        return (
                            <div className="chosen-ship-container">
                                <div key={s.id} className="chosen-ship">
                                    <div className={"span-4-of-12 ship-img"}>
                                        <img src={s.imagePath} alt="Ship Card"></img>
                                    </div>
                                    <div className={"span-7-of-12 ship-name"}>{s.name}</div>
                                    <div>{s.points}</div>
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

};

export default selectedShips;