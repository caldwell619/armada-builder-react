import { MAX_POINTS } from "../actions/types";

export default (state = null, action) => {
    switch (action.type){
        case MAX_POINTS:
            return {
                ...state,
                maxPoints: action.payload
            };
        default:
            return state
    }
}