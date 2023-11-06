import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <Link to = '/' className='menu'>Home</Link>
        <Link to = '/video' className='menu'>Video</Link>
      </nav>
    </div>
  )
}

export default Navbar
