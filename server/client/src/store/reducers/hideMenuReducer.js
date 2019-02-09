import { HIDE_MENU } from "../actions/types";

export default (state = false, action) => {
    switch (action.type){
        case HIDE_MENU:
            return !state;
        default:
            return state
    }
}