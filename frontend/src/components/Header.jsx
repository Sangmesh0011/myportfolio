import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <span className='items'><Link to='/' className='nav-link'>Home</Link></span>
        <span className='items'><Link to='/projects' className='nav-link'>Projects</Link></span>
        <span className='items'><Link to='/about' className='nav-link'>About</Link></span>
        <span className='items'><Link to='/contact' className='nav-link'>Contact</Link></span>
    </div>
  )
}

export default Header
