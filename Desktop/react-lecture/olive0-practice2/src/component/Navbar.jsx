import React, {Children} from 'react'
import '../header.css'

const Navbar = ({children}) => {
  return (
    <header>
      {children}
    </header>
  )
}

export default Navbar
