import { Button, Container, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import {Link, withRouter} from 'react-router-dom'
import api from "../../services/api";
import { login } from "../../services/auth";
import '../css/SignIn.css'


const SignIn = props =>{
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleSignIn = async () =>{
        if (!email || !password) {
            setError("Preencha e-mail e senha para continuar!" );
          } else {
            try {
                const response = await api.post("/auth", { email, password });
                console.log(response.data.token)
                login(response.data.token);
                props.history.push("/app");
              } catch (err) {
                setError("Houve um problema com o login, verifique suas credenciais. T.T");
            }
            
        }
    }
    return(
        <div className="container">
            <label>{email}</label>
            <label>{password}</label>
            <div className="login">
                <div style={{margin: 10}}>
                    <TextField 
                        required
                        id="standard-required"
                        label="Email ou Usuario"
                        onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <div style={{margin: 10}}>
                <TextField 
                    required
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    onChange={e=>setPassword(e.target.value)}
                />
                </div>
                <div style={{margin: 10}}>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={()=>handleSignIn()}
                >
                    Login
                </Button>
                </div>
                <label>{error}</label>
                <Link style={{marginLeft: 10}} to="/SignUp">Criar Uma Conta</Link>
            </div>
        </div>       
    )

}
export default withRouter(SignIn);