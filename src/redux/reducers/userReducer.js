import { types } from "../types";

export function userReducer(state = {},action){

    if(action.type === types.updateDataUser){
        return {
            ...state,
            userMain : action.payload
        }
    }

    else if(action.type === types.closeSessionUser){
        return {
            ...state,
            userMain : null
        }
    }

    return state;
}