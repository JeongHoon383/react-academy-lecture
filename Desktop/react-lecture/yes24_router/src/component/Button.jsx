import React from 'react'

const Button = () => {
  return (
    <div className='book-button'>
      <p><button type='button' className='cart-button'>카트에 넣기</button></p>
      <p><button type='button' className='buy-button'>바로구매</button></p>
      <p><button type='button' className='list-button'>리스트에 넣기</button></p>
    </div>
  )
}

export default Button
