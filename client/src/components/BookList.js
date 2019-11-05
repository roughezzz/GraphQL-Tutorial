import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBooksQuery } from "../queries/queries";

// Components
import BookDetails from "./BookDetails";

function BookList() {
  // let state = {
  //   selected: null
  // };
  let [selected, setSelected] = useState(null);

  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const books = data.books;

  return (
    <div id="main">
      <ul id="book-list">
        {books.map((book, index) => {
          return (
            <li key={index} onClick={() => setSelected((selected = book.id))}>
              {book.name}
            </li>
          );
        })}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
}

export default BookList;
