import { SignInService } from '../../api/AuthApi';
import { AuthInterface } from '../../interface/AuthInterface';
import { login } from './Auth';
import type {} from 'redux-thunk/extend-redux';

export const authLogin = (user: AuthInterface) => {
  return async (
    dispatch: (arg0: { payload: undefined; type: 'LOGIN' }) => void
  ) => {
    await SignInService(user)
      .then((res) => {
        if (res.data.user === 'student') {
          localStorage.setItem('tokenStudent', res.data.token);
          setTimeout(() => (window.location.href = '/aluno'), 1500);
        } else if (res.data.user === 'teacher') {
          localStorage.setItem('tokenTeacher', res.data.token);
          setTimeout(() => (window.location.href = '/professor'), 1500);
        } else if (res.data.user === '') {
          localStorage.setItem('token', res.data.token);
          window.location.pathname = '/dashboard';
        }
        dispatch(login());
      })
      .catch(() => {
        alert('Email ou Senha Invalido');
      });
  };
};
