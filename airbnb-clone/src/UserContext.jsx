import { createContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [username, setUsername] = useState(null)
    const [id  , setId] = useState(null)  
    const [email  , setEmail] = useState("")  
    const [ready  , setReady] = useState(false)
    useEffect(() => {
        if(!username) {
            axios.get("/profile").then((response) => {
            const {data} = response
            setUsername(data.decoded.userName) 
            setId(data.decoded.userId) 
            setReady(true)
            setEmail(data.decoded.userEmail)
            })}
        }
         ,[])

    return (
        <UserContext.Provider value={{username, setUsername, id, setId, ready, email}}>
            {children}
        </UserContext.Provider>
    )
}