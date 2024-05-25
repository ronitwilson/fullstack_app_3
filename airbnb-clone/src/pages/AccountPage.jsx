import {useState, useContext} from 'react'
import { UserContext } from '../UserContext'


export default function AccountPage() {
    const{username} = useContext(UserContext)

    return (
        <div className=''>
            account page of {username}
        </div>
    )
}