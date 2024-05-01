import { Link } from "react-router-dom";

export default function RegisterPage() {
    return(
        <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form  className="max-w-md mx-auto"> 
                <input type='text' placeholder='Name' />
                <input type='text' placeholder='your@email.com' />
                <input type='password' placeholder='password' />
                <input type='Role' placeholder='admin' />
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