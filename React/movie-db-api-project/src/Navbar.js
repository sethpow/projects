import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navBar'>
            <Link to='/'>
                Home
            </Link>
            <Link to='/profile'>
                Profile
            </Link>
            <Link to='/settings'>
                Settings
            </Link>
        </div>
    )
}
