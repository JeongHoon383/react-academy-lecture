import React from 'react'
import Book from '../component/Book'
import Title from '../component/Title'

const DayBestSeller = () => {
  return (
    <div>
      <Title name={'국내도서 일별 베스트'}/>
      <div className='content'><Book filename="day"/></div>
    </div>
  )
}

export default DayBestSeller
