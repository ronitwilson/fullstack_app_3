import { Link } from "react-router-dom";
import { useState } from "react";

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    return(
        <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form  className="max-w-md mx-auto"> 
                <input type='text' placeholder='Name' value={name} onChange={ev => setName(ev.target.value)} />
                <input type='text' placeholder='your@email.com' value={email} onChange={ev => setEmail(ev.target.value)}/>
                <input type='password' placeholder='password' value={password} onChange={ev => setPassword(ev.target.value)}/>
                <input type='Role' placeholder='admin'value={role} onChange={ev => setRole(ev.target.value)} />
                <button className="primary">Login</button>
                <div className="text-center py-2">
                    Have an account? 
                    <Link to={'/login'}> Login now</Link>
                </div>
          </form>
        </div>
        </div>
    )
}