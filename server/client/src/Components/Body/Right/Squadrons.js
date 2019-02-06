import React from 'react';
import {squadronCards} from '../../../data/cards.js'

class Squadrons extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        let empireSquadrons = []
        squadronCards.forEach(squadron => {

            //refactor to pass empire as props
            if (squadron.faction === "empire"){
                empireSquadrons.push(squadron);
            }
        });
        return (
            <div>
                {empireSquadrons.map((squadron) => {
                        return (
                            <div className="squad-card span-1-of-3">
                                <img src={`/images/cards.js/squadron/imperial/${squadron.image}`} alt={squadron.title}/>
                            </div>
                        )
                })}
            </div>
        )
    }
}

export default Squadrons;