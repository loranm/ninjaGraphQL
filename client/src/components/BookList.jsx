import React from "react";
import { Query } from "react-apollo";
import { GET_BOOKS } from "../queries/queries";

const Books = () => {
  return (
    <Query query={GET_BOOKS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        const { books } = data;
        return (
          <div>
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
          </div>
        );
      }}
    </Query>
  );
};

export default Books;
