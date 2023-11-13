import React, { useState, useEffect } from "react";
import axios from 'axios'
import BookAvata from "./BookAvata";
import BookContent from "./BookContent";
import BookBuy from "./BookBuy";
import BookList from "./BookList";
import "../book.css";

const Book = ({filename}) => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/")
      .then((result) => {
        console.log(result.data);
        setBookList(result.data)
      })
  })

  return (
    <BookList>
      {bookList.map((book) => (
        <div className="book-container">
          <BookAvata image={book.image}/>
          <BookContent 
            top_tag = {book.top_tag}
            kind = {book.kind}
            title = {book.title}
            comment = {book.comment}
            author = {book.author}
            company = {book.company}
            padate = {book.padate}
            price = {book.price}
            point = {book.point}
            sale_graph = {book.sale_graph}
            review = {book.review}
            de_date = {book.de_date}
            goods = {book.goods}
          />
          <BookBuy />
        </div>
      ))}
    </BookList>
  );
};

export default Book;
