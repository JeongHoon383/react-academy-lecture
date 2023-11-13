import React from 'react'

const BookAvata = ({image}) => {
  return (
    <div className='bookavata'>
      <img className='BookAvata-img' src={image} alt="" />
      <p><button type='button' className='bookavata_button'>미리보기</button></p>
    </div>
  )
}

export default BookAvata
