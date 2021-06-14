import { Button, Container, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import {Link, withRouter} from 'react-router-dom'
import api from "../../services/api";
import '../css/SignUp.css'

const SignUp = props =>{
    
    const [values,setValues] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        password2: "",
        error: ""
    })

    const handleSignUp = async () => {
        const {name, email, password, password2} = values

        if ( !name || !email || !password || !password2) {
          setValues({ error: "Preencha todos os dados para se cadastrar" });
        } else {
            if( password != password2){
                setValues({ error: "Campos 'Password' possuem valores diferentes" });
            }else{
                try {
                    await api.post("/user", { name, email, password});
                    props.history.push("/");
                } catch (err) {
                    console.log(err);
                    setValues({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
                }
            }
        }
    }
    return(
        <div className="container">
            <label>{values.name}</label>
            <label>{values.email}</label>
            <label>{values.password}</label>
            <label>{values.password2}</label>
            <div className="login">
                <TextField 
                    required
                    id="standard-required"
                    label="Nome"
                    value={values.name}
                    onChange={e=>setValues({...values, name: e.target.value})}
                />
                <TextField 
                    required
                    id="standard-required"
                    label="Email"
                    value={values.email}
                    onChange={e=>setValues({...values, email: e.target.value})}
                />
                <TextField 
                    required
                    id="standard-password-input"
                    label="Password"
                    value={values.password}
                    type="password"
                    onChange={e=>setValues({
                        ...values,
                        password: e.target.value
                    })}
                />
                <TextField 
                    required
                    id="standard-password-input"
                    label="repetir password"
                    type="password"
                    value={values.password2}
                    onChange={e=>setValues({...values, password2: e.target.value})}
                />
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={()=>handleSignUp()}
                >
                    Login
                </Button>
                <label>{values.error}</label>
                <Link to="/">Fazer Login</Link>
            </div>
        </div> 
    )
}
export default withRouter(SignUp);