import {useState, useContext} from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom'


export default function AccountPage() {
    const{username, ready} = useContext(UserContext)
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
        if((type === subpage))
            return ("py-2 px-6 bg-red-500 text-white rounded-full")
        return ("py-2 px-6")
    }


    return (
        <div className=''>
            <nav className='w-full flex justify-center mt-8 gap-2'>
                <Link className={linkClasses('profile')} to={'/account'}>My account </Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings </Link>
                <Link className={linkClasses('places')} to={'/account/places'}>My acoomodiations </Link> 
            </nav>
        </div>
    )
}