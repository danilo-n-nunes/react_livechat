import React, { useState } from 'react'
import api from '../services/api'

export const initialState = {
    name: "",
    email: ""
}
export const DataContext = React.createContext(initialState)

const MainContext = props =>{
    const [user, setUser] = useState(initialState)
    const Loga = (user) =>{
        setUser({
            ...user
        })
    }

    return(
        <DataContext.Provider value={{user,setUser,Loga}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default MainContext