import React from 'react';
import {cards} from '../../../../data/cards.js'
import Upgrade from '../IndividualUpgrade'

const DefensiveRetrofit = () => {
    return (
        <div>
            {cards["defensive-retrofit"].map((card) => {
                if (card.faction === "imperial" || !card.faction){
                    if (card.dual || card.divider){
                        return null;
                    }
                    return (
                        <Upgrade card={card} key={card.id}/>
                    )
                }

            })}
        </div>
    )
};

export default DefensiveRetrofit;