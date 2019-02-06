import { ADD_SHIP } from "../actions/types";

export default (state = null, action) => {
    switch (action.type){
        case ADD_SHIP:
            return {
                ...state,
                ships: action.payload,
                points: action.payload1
            }
        default:
            return state
    }
}