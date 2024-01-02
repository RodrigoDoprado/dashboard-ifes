/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { authLogin } from '../../redux/ducks/FatchActions'
import FooterComponent from '../../components/FooterComponent'
import './Login.css'

function Login() {
  const [loginInput, setLoginInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const dispatch = useDispatch()

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    dispatch(authLogin({ loginInput, passwordInput }))
  }

  useEffect(() => {
    document.body.classList.add('login-body')
    return () => {
      document.body.classList.remove('login-body')
    }
  }, [])

  return (
    <>
      {/* @ts-ignore */}
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main id="login">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center card-title text-uppercase fw-bolder my-4 text-light">
                        <img
                          className="card-img-top"
                          src="./assets/ifes.png"
                          style={{ width: '65px', height: '65px' }}
                        />
                        &nbsp;&nbsp;Login
                      </h3>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleLogin}>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputEmail"
                            type="text"
                            placeholder=""
                            required
                            value={loginInput}
                            onChange={(event) => setLoginInput(event.target.value)}
                          />
                          <label htmlFor="inputEmail">Login</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputPassword"
                            type="password"
                            placeholder=""
                            required
                            value={passwordInput}
                            onChange={(event) => setPasswordInput(event.target.value)}
                          />
                          <label htmlFor="inputPassword">Senha</label>
                        </div>
                        {/* <div className="form-check mb-3">
                                                    <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                    <label className="form-check-label" htmlFor="inputRememberPassword">Remember Password</label>
                                                </div> */}
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <a className="small" href="/">
                            Esqueceu sua Senha?
                          </a>
                          <button
                            className="btn btn-primary text-uppercase fw-bolder"
                            type="submit"
                          >
                            Avançar
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* <div className="card-footer text-center py-3">
                                            <div className="small"><a href="/">Criar Conta Aqui!</a></div>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <FooterComponent />
      </div>
    </>
  )
}

export default Login
