import { MyStateInterface } from "../../interface/MyStateInterface"

const INITIAL_STATE = {
    showMessageSuccess: false,
    // showMessageDanger: false

}as MyStateInterface

export default (state= INITIAL_STATE,action: any)=>{
    switch (action.type){
        case "SHOW_MESSAGE_SUCCESS":
            return{...state, showMessageSuccess:true}
        case "HIDE_MESSAGE_SUCCESS":
            return{...state, showMessageSuccess:false}
        // case "SHOW_MESSAGE_DANGER":
        //     return{...state, showMessageDanger:true}
        // case "HIDE_MESSAGE_DANGER":
        //     return{...state, showMessageDanger:false}
        default:
            return state
    }
}

export const showMessageSuccess=()=>{return{type:"SHOW_MESSAGE_SUCCESS"}}
export const hideMessageSuccess=()=>{return{type:"HIDE_MESSAGE_SUCCESS"}}
// export const showMessageDanger=()=>{return{type:"SHOW_MESSAGE_DANGER"}}
// export const hideMessageDanger=()=>{return{type:"HIDE_MESSAGE_DANGER"}}