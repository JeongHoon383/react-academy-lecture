import React from 'react'
import Book from '../component/Book'
import Title from '../component/Title'

const BestSeller = () => {
  return (
    <div>
      <Title name={'국내도서 종합 베스트'}/>
      <div className='content'><Book filename=""/></div>
    </div>
  )
}

export default BestSeller
