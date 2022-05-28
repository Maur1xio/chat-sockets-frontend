import { types } from "../types";

export function authReducer(state = {},action){

    if(action.type === types.authUser){
        return {
            ...state,
            token: action.payload
        }
    }

    else if(action.type === types.closeSessionAuth){
        return {
            ...state, 
            token : null
        }
    }

    return state;
}