import React from 'react'
import Book from '../component/Book'
import Title from '../component/Title'

const HotPriceBestSeller = () => {
  return (
    <div>
      <Title name={'특가 베스트(정가제 Free)'}/>
      <div className='content'><Book filename="hotPrice"/></div>
    </div>
  )
}

export default HotPriceBestSeller
