import { Link } from "react-router-dom";

export default function LoginPage() {
    return(
        <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form  className="max-w-md mx-auto"> 
                <input type='text' placeholder='your@email.com' />
                <input type='password' placeholder='password' />
                <input type='text' placeholder='admin' />
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