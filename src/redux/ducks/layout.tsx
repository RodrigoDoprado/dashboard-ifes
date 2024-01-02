/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  // showMessage: false,
  messages: [],
}

export const addMessage = createAction('ADD_MESSAGE')
export const removeMessage = createAction('REMOVE_MESSAGE')
// export const showMessage = createAction('SHOW_MESSAGE');
// export const hideMessage = createAction('HIDE_MESSAGE');

export default createReducer(INITIAL_STATE, {
  // [showMessage.type]: (state: any) => ({ ...state, showMessage: true }),
  // [hideMessage.type]: (state: any) => ({ ...state, showMessage: false }),
  [addMessage.type]: (state: any, action: any) => ({
    ...state,
    messages: [...state.messages, action.playload],
  }),
  [removeMessage.type]: (state: any, action: any) => ({
    ...state,
    messages: state.messages.filter((mg: any) => mg != action.playload),
  }),
})
