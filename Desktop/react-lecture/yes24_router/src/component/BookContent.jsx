import React from 'react'

const BookContent = (book) => {
  return (
    <div className='bookContent'>
      <p>{book.top_tag}</p>
      <p>[{book.kind}] {book.title} {book.comment} [초판한정 저자 인쇄 사인본 + 핸디북 증정은 종료되었습니다.]</p>
      <p>{book.author} <span>저</span> {book.company} | <span>{book.pdate}</span></p>
      <p>{book.price} (10% 할인) <span>{book.point}</span></p>
      <p>판매지수 {book.sale_graph} | 회원리뷰({book.review})</p>
      <p><span>{book.de_date}</span></p>
      <p>{book.goods}</p>
    </div>
  )
}

export default BookContent
