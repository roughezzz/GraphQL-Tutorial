import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBook } from "../queries/queries";

function BookDetails(props) {
  // const id = props.bookId;

  const { loading, error, data } = useQuery(getBook, {
    variables: {
      id: props.bookId
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const book = data.book;
  // console.log(book);
  // console.log(bookId);
  if (!book) {
    return (
      <div id="book-details">
        <p>Book is not selected...</p>
      </div>
    );
  } else {
    return (
      <div id="book-details">
        <h2>{book.name}</h2>
        <p>
          <strong>Genre: </strong>
          {book.genre}
        </p>
        <p>
          By <em>{book.author.name}</em>
        </p>
        <p>Other books by this author...</p>
        <ul className="other-names">
          {book.author.books.map((book, i) => {
            return <li key={i}>{book.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default BookDetails;
