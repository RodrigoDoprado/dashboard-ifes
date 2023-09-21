import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../context/AuthContext";
import "./Login.css"

function Login (){
    const {signin} = useContext(AuthContext)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    
    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if(await signin(email, password)){window.location.href = window.location.href}else{alert("Email ou Senha Invalido")}
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
            <main id="login" className="main gap-3 d-flex justify-content-center">
                {/* <div className="container"> */}
                    {/* <div className="row"> */}
                        <img className="d-none d-sm-block" src="./assets/ifes.png"/>
                        <div className="card text-light"> {/*border-radius: "9px"*/}
                            <div id="message"></div>
                            <div className="card-body ">
                                <form onSubmit={handleLogin} className="d-grid">
                                    <div className="card-head gap-3 d-inline-flex mb-4">
                                        <img className="card-img-top d-block d-sm-none" src="./assets/ifes.png" style={{width:"45px", height:"45px"}}/>
                                        <h1 className="card-title text-uppercase fw-bolder">Login</h1>
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control p-3" type="email" name="email" id="email" placeholder="Email:" required value={email} onChange={event =>setEmail(event.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control p-3" type="password" name="password" id="password" placeholder="Senha:" required value={password} onChange={event =>setPassword(event.target.value)}/>
                                    </div>
                                    <button className="btn btn-outline-primary text-light px-3 fw-bolder" type="submit">Avança</button>
                                </form>
                            </div>
                            {/* <div className="card-footer"></div>  */}
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </main>    
        </>
    )
}

export default Login