import React, { useState } from 'react'
import api from '../services/api'

const initialState = {
    number: 123,
    text: "texto"
}
export const DataContext = React.createContext(initialState)

const MainContext = props =>{
    const [user, setUser] = useState({
        name: "xxx",
        email: "@"
    })
    const Loga = (user) =>{
        setUser({
            name: user.name,
            email: user.email
        })
    }

    return(
        <DataContext.Provider value={{user,setUser,Loga}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default MainContext