/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  // isAuthenticated: false,
  isAuthenticated: localStorage.getItem('token'),
  isAuthenticatedStudent: localStorage.getItem('tokenStudent'),
  isAuthenticatedTeacher: localStorage.getItem('tokenTeacher'),
}

export const login = createAction('LOGIN')
export const logout = createAction('LOGOUT')

export default createReducer(INITIAL_STATE, {
  [login.type]: (state: any) => ({
    ...state,
    isAuthenticated: true,
    isAuthenticatedStudent: true,
    isAuthenticatedTeacher: true,
  }),
  [logout.type]: (state: any) => ({
    ...state,
    isAuthenticated: false,
    isAuthenticatedStudent: false,
    isAuthenticatedTeacher: false,
  }),
})
