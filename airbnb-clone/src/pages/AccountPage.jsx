import {useState, useContext} from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom'


export default function AccountPage() {
    const{username, ready} = useContext(UserContext)
    const {subpage} = useParams()
    console.log(subpage)

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


    return (
        <div className=''>
            <nav className='w-full flex justify-center mt-8 gap-2'>
                <Link className='py-2 px-6 bg-red-500 text-white rounded-full' to={'/account'}>My account </Link>
                <Link className='py-2 px-6' to={'/account/bookings'}>My bookings </Link>
                <Link className='py-2 px-6' to={'/account/places'}>My acoomodiations </Link> 
            </nav>
        </div>
    )
}