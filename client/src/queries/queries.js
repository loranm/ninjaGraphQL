import gql from "graphql-tag";

const GET_BOOKS = gql`
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

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

export { GET_BOOKS, GET_AUTHORS };
