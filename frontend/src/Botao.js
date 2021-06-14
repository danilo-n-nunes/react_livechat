import { Button } from '@material-ui/core'
import axios from 'axios'
import React from 'react'

const login = () => {
    
    axios.get('https://tuacor.com/users')
        .then((response)=>alert(JSON.stringify(response)))
        .catch((err) =>{
            console.error("ocorreu um erro")
        })
        
        /*fetch("https://tuacor.com/users")
            .then(
                res=>alert(res),
                (error) => {
                    alert('erro')
                    }
                )*/
}
export default function Botao(){
    return(
        <Button 
            variant="contained" 
            color="primary"
            onClick={()=>login()}
        >
        Login
        </Button>
    )
}