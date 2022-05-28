import { types } from "../types";

export function authUser(token){
    return {
        type : types.authUser,
        payload : token
    }
}

export function closeSessionAuth(){
    return {
        type : types.closeSessionAuth
    }
}