import { createAction } from "@reduxjs/toolkit"

const initialState ={
    isAuthenticated: false,
}

export const login = createAction('LOGIN')
export const logout = createAction('LOGOUT')

const createReducer=(state = initialState, action:any)=>{
    if(action.type === login){
        return{...state, isAuthenticated: true}
    }

    if(action.type === logout){
        return{...state, isAuthenticated: false}
    }
return state
}
export default createReducer