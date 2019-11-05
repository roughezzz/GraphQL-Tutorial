import { gql } from "apollo-boost";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;

const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: String!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const getBook = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        books {
          name
          genre
        }
      }
    }
  }
`;

export { getBooksQuery, getAuthorsQuery, addBookMutation, getBook };
