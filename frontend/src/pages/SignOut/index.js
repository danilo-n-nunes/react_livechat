import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Container } from '@material-ui/core';
import { logout } from "../../services/auth";

const SignOut = props => {

    logout()
    props.history.push("/");
    return(
        <h1>Deslogando...</h1>
    )
}
export default withRouter(SignOut);