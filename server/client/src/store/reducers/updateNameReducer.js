import { UPDATE_NAME } from "../actions/types";

export default (state = null, action) => {
    console.log(state);
    switch (action.type){
        case UPDATE_NAME:
            return {
                ...state,
                fleetNames: action.payload
            }
        default:
            return state
    }
}