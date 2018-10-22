import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

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

const Books = () => {
  return (
    <Query query={GET_BOOKS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        const { books } = data;
        return (
          <ul>
            {books.map(book => {
              const { genre, name: title, id, author } = book;
              return (
                <li key={id}>
                  {title} - {genre} - {author.name}
                </li>
              );
            })}
          </ul>
        );
      }}
    </Query>
  );
};

export default Books;
