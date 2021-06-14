import { Container } from '@material-ui/core';
import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import api from '../../services/api'

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        error: ""
    }

    handleSignUp = async e => {
        e.preventDefault();
        const { username, email, password } = this.state;
        if (!username || !email || !password) {
          this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
          try {
            await api.post("/user", { username, email, password });
            this.props.history.push("/");
          } catch (err) {
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
          }
        }
    };

    render(){
        return(
            <Container>
                <form onSubmit={this.handleSignUp}>
                    <input
                        type="text"
                        placeholder="Nome de Usuario"
                        onChange={e => this.setState({username: e.target.value})}
                    />
                    <input
                        type="email"
                        placeholder="Endereço de email"
                        onChange={e => this.setState({email: e.target.value})}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({password: e.target.value})}
                    />
                    <button type="submit">Cadastrar</button>
                    <hr />
                    <Link to="/">Fazer Login</Link>
                </form>
            </Container>
        )
    }
}

export default withRouter(SignUp);