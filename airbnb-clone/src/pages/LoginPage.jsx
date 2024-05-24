import { Link, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from 'axios'
import {UserContext} from '../UserContext'

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setId} = useContext(UserContext)
    const [redirect, setRedirect] = useState(false)

    async function login(ev) {
        ev.preventDefault()
        try {
            const userInfo = await axios.post('/login', {email, password})
            console.log(userInfo.data.id)
            setId(userInfo.data.id)
            alert('Login successful');
            setRedirect(true)
        } catch {
            alert('Login failed')
        }
        // alert('Login successfull')
    }

    if(redirect) {
        return <Navigate to={'/'} />
    }

    return(
        <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form  className="max-w-md mx-auto" onSubmit={login}> 
                <input type='text' placeholder='your@email.com' value={email} onChange={ev => setEmail(ev.target.value)} />
                <input type='password' placeholder='password' value={password} onChange={ev => setPassword(ev.target.value)}/>
                <button className="primary">Login</button>
                <div className="text-center py-2">
                    Don't hanve an account? 
                    <Link to={'/register'}> Register now</Link>
                </div>
          </form>
        </div>
        </div>
    )
}