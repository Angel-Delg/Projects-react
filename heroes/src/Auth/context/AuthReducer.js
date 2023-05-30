import { TypesReducer } from "../types"

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case TypesReducer.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }
        case TypesReducer.logout:
            return {
                logged: false
            }            
        default:
            return state
    }
}