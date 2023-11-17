import React from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import {BsFillPencilFill} from 'react-icons/bs';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <Link to = "/" className='header_left'>
        <FiShoppingBag/>
        <span>Shoppy</span>
      </Link>
      <nav className='header_right'>
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new"><BsFillPencilFill /></Link>
        <button>Login</button>
      </nav>
    </header>
  )
}

export default Navbar
