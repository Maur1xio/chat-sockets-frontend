import {types} from '../types';



export function uiReducer(state = {}, action){
    
    if(action.type === types.selectChat){
        return {
            ...state,
            selectedChat : action.payload
        }
    }

    return state;
}