import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery
} from "../queries/queries";

function AddBook() {
  let state = {
    name: "",
    genre: "",
    authorId: ""
  };

  function submitForm(e) {
    e.preventDefault();
    addBook({
      variables: {
        name: state.name,
        genre: state.genre,
        authorId: state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
    // console.log(state);
  }

  // Mutation
  const [addBook] = useMutation(addBookMutation);

  // Query
  const { loading, error, data } = useQuery(getAuthorsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const authors = data.authors;

  return (
    <form id="add-book" onSubmit={e => submitForm(e)}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={e => (state.name = e.target.value)} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={e => (state.genre = e.target.value)} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={e => (state.authorId = e.target.value)}>
          <option>Select authors</option>
          {authors.map(author => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          })}
        </select>
      </div>
      <button type="submit">+</button>
    </form>
  );
}

export default AddBook;
