import { types } from "../types";

export function updateUser(dataUser){
    return {
        type : types.updateDataUser,
        payload : dataUser
    }
}

export function closeSessionUser(){
    return {
        type : types.closeSessionUser
    }
}