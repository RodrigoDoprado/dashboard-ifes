import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../context/AuthContext";

function Login (){
    const {signin} = useContext(AuthContext)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const res = await signin(email, password)
        if(res){window.location.href = window.location.href}else{alert("Email ou Senha Invalido")}
    }

    return(
        <>
        <Helmet><title>Login</title></Helmet>
        <div id="login" className="bg-primary">
            <main className="main">
                <img className="d-none d-sm-block" src="./img/ifes.png"/>
                <div className="card text-light">
                    <div className="card-head">
                        <img className="card-img-top d-block d-sm-none" src="./img/ifes.png"/>
                        <h1 className="card-title">Login</h1>
                    </div>
                    <div id="message"></div>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <input 
                                    className="form-control" 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email:" 
                                    required
                                    value={email}
                                    onChange={event =>setEmail(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input 
                                    className="form-control" 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Senha:" 
                                    required
                                    value={password}
                                    onChange={event =>setPassword(event.target.value)}
                                />
                            </div>
                            <button className="btn btn-outline-primary text-light" type="submit">Avança</button>
                        </form>
                    </div>
                </div>    
            </main>
        </div>
        </>
    )
}

export default Login