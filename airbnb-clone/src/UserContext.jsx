import { createContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [username, setUsername] = useState(null)
    const [id  , setId] = useState(null)  
    useEffect(() => {
        console.log("called")
         axios.get("/profile").then((response) => {
        const {data} = response
        setUsername(data.decoded.userName) 
        setId(data.decoded.userId) 
        })}
         ,[])

    return (
        <UserContext.Provider value={{username, setUsername, id, setId}}>
            {children}
        </UserContext.Provider>
    )
}