import React, { Component } from "react";
import "./App.css";

import BookList from "./components/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

const ApolloConfig = {
  uri: "http://localhost:4000/graphql"
};

const client = new ApolloClient(ApolloConfig);

const GET_BOOKS = gql`
  {
    books {
      name
      genre
      author
    }
  }
`;

const Books = () => (
  <Query query={GET_BOOKS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <ul>
          {data.books.map(book => (
            <li>{book.name}</li>
          ))}
        </ul>
      );
    }}
  </Query>
);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Book list</h1>
          <BookList bookList={() => Books()} />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
