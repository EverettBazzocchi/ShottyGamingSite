import React from 'react'
import Logo from './Components/Logo.js'
import Navbar from './Components/Navbar.js'
import Navbar2 from './Components/Navbar2.js'

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <Logo />
            <Navbar2 />
        </div>

    )
}

export default Header
