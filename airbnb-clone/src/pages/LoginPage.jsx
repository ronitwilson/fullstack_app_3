import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(ev) {
        ev.preventDefault()
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