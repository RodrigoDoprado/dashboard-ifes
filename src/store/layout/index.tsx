import { MyStateInterface } from "../../interface/MyStateInterface"

const INITIAL_STATE = {
    showMessage: false

}as MyStateInterface

export default (state= INITIAL_STATE,action: any)=>{
    switch (action.type){
        case "SHOW_MESSAGE":
            return{...state, showMessage:true}
        case "HIDE_MESSAGE":
            return{...state, showMessage:false}
        default:
            return state
    }
}

export const showMessage=()=>{return{type:"SHOW_MESSAGE"}}
export const hideMessage=()=>{return{type:"HIDE_MESSAGE"}}