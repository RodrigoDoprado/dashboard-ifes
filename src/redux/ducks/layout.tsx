/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface messages{
  text:string,
  // type:string
}

const INITIAL_STATE: messages[] = []

const sliceMessage = createSlice({
  name:"message",
  initialState: INITIAL_STATE,
  reducers:{
    addMessage(state,{payload}:PayloadAction<string>){
      return[...state,{text:payload}]
    },
    removeMessage(state,{payload}:PayloadAction<string>){
      return state.map(mg=>mg.text === payload?{...mg}:mg )
    }
  }
})

export default sliceMessage.reducer
export const {addMessage}=sliceMessage.actions
export const {removeMessage}=sliceMessage.actions
export const useMessage =(state:any)=>{
  return state.layoutMessage as messages[]
}

// export default createReducer(INITIAL_STATE, {
//   [addMessage.type]: (state: any, action: any) => ({
//     ...state,
//     messages: [...state.messages, action.playload],
//   }),
//   [removeMessage.type]: (state: any, action: any) => ({
//     ...state,
//     messages: state.messages.filter((mg: any) => mg != action.playload),
//   }),
// })
