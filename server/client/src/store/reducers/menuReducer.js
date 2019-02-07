import { MENU_DISPLAY } from "../actions/types";

export default (state = false, action) => {
    switch (action.type){
        case MENU_DISPLAY:
            return !state;
        default:
            return state
    }
}