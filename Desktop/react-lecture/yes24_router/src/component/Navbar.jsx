import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <Link to = '/' className='menu'>종합</Link>
        <Link to = '/realtime' className='menu'>실시간</Link>
        <Link to = '/day' className='menu'>일별</Link>
        <Link to = '/monthWeek' className='menu'>월별/주별</Link>
        <Link to = '/hot' className='menu'>특가</Link>
        <Link to = '/steady' className='menu'>스테디셀러</Link>
      </nav>
    </div>
  )
}

export default Navbar
