import React from 'react'
import Book from '../component/Book'
import Title from '../component/Title'

const MonthWeekBestSeller = () => {
  return (
    <div>
      <Title name={'국내도서 월별 베스트'}/>
      <div className='content'><Book filename="monthWeek"/></div>
    </div>
  )
}

export default MonthWeekBestSeller
