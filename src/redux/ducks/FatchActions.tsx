/* eslint-disable no-self-assign */
// import { useContext } from 'react';
import { SignInService } from '../../api/AuthApi'
import { AuthInterface } from '../../interface/AuthInterface'
import { login } from './Auth'
import type {} from 'redux-thunk/extend-redux'

export const authLogin = (userLogin: AuthInterface) => {
  // const {validateToken}=useContext(AuthContext)
  return async (dispatch: (arg0: { payload: undefined; type: 'LOGIN' }) => void) => {
    await SignInService(userLogin)
      .then((res) => {
        if (res.data.user === 'student') {
          localStorage.setItem('tokenStudent', res.data.token)
        } else if (res.data.user === 'teacher') {
          localStorage.setItem('tokenTeacher', res.data.token)
        } else if (res.data.user === '') {
          localStorage.setItem('token', res.data.token)
        }
        dispatch(login())
        window.location.href = window.location.href
      })
      .catch(() => {
        alert('Email ou Senha Invalido')
      })
    // validateToken()
  }
}
