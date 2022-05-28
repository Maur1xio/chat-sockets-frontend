import { types } from "../types";

export function changeSelectedChat(state){
    return {
        type : types.selectChat,
        payload : state
    }
}