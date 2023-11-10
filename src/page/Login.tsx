import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../context/AuthContext";
import Footer from "../componets/footer";
import "./Login.css"

function Login(){
    const {signin} = useContext(AuthContext)
    const [login,setLogin]=useState("")
    const [password,setPassword]=useState("")

    
    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if(await signin(login, password)){
            window.location.href = window.location.href
        }else{
            alert("Email ou Senha Invalido")
        }
    }

    useEffect(() => {
        document.body.classList.add('login-body');
        return () => {
          document.body.classList.remove('login-body');
        };
      }, []);
    

    return(
        <>
            <Helmet><title>Login</title></Helmet>
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main id="login">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header">
                                            <h3 className="text-center card-title text-uppercase fw-bolder my-4 text-light">
                                            <img className="card-img-top" src="./assets/ifes.png" style={{width:"65px", height:"65px"}}/>&nbsp;&nbsp;Login
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handleLogin}>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="inputEmail" type="text" placeholder="" required value={login} onChange={event =>setLogin(event.target.value)}/>
                                                    <label htmlFor="inputEmail">Login</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="inputPassword" type="password" placeholder="" required value={password} onChange={event =>setPassword(event.target.value)}/>
                                                    <label htmlFor="inputPassword">Senha</label>
                                                </div>
                                                {/* <div className="form-check mb-3">
                                                    <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                    <label className="form-check-label" htmlFor="inputRememberPassword">Remember Password</label>
                                                </div> */}
                                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <a className="small" href="/">Esqueceu sua Senha?</a>
                                                    <button className="btn btn-primary text-uppercase fw-bolder" type="submit">Avançar</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center py-3">
                                            <div className="small"><a href="/">Criar Conta Aqui!</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Login