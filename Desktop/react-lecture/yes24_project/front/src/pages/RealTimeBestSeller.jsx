import React from 'react'
import Book from '../component/Book'
import Title from '../component/Title'

const RealTimeBestSeller = () => {
  return (
    <div>
      <Title name="실시간 베스트"/>
      <div className='content'><Book filename="realTime"/></div>
    </div>
  )
}

export default RealTimeBestSeller
