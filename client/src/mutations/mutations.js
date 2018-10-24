import gql from "graphql-tag";

const POST_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorID: ID!) {
    addBook(name: $name, genre: $genre, authorID: $authorID) {
      id
    }
  }
`;

export { POST_BOOK };
