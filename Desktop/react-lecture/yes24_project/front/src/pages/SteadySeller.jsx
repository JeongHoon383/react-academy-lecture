import React from 'react'
import Book from '../component/Book'
import Title from '../component/Title'

const SteadySeller = () => {
  return (
    <div>
      <Title name="국내도서 스테디셀러"/>
      <div className='content'><Book filename="steady"/></div>
    </div>
  )
}

export default SteadySeller
