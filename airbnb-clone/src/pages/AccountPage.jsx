import {useState, useContext} from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PlacesPage from './PlacesPage'

export default function AccountPage() {
    const{username, ready, email, setUsername, setReady} = useContext(UserContext)
    const[redirect, setRedirect] = useState(null)
    let {subpage} = useParams()
    console.log(subpage)

    if(subpage === undefined) {
        subpage = "profile"
    }

    if(!ready){
        return(
            <div>
                Loading
            </div>
        )
    }

    if(ready && !username){
        return(
            <Navigate to={'/login'} />
        )
    }

    function linkClasses(type=null){
        let classes = 'inline-flex py-2 px-6 gap-1 rounded-full'
        if((type === subpage)) {
            classes += ' bg-red-500 text-white '
        }
        else {
            classes += 'bg-gray-200'
        } 
        return classes
    }

    async function logout(){
        await axios.post('/logout')
        setRedirect('/login')
        setUsername(null)
        setReady(false)
        // logout function
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div className=''>
            <nav className='w-full flex justify-center mt-8 gap-2'>
                <Link className={linkClasses('profile')} to={'/account'}>My account </Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings </Link>
                <Link className={linkClasses('places')} to={'/account/places'}>My acoomodiations </Link> 
            </nav>
        {!!username && subpage=== 'profile' && (
            <div className='text-center max-w-lg mx-auto'>
                Logged in as user {username}
                {/* useremail is {email} */}
                <button onClick={logout}className='primary max-w-sm mt-2'>Logout</button>
            </div>
        )}
        {subpage === 'places' && (
                <PlacesPage />               
        )}
        </div>
    )
}