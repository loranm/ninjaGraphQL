import React, { Component } from "react";
import "./App.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import BookList from "./components/BookList";
import AddBook from "./components/addBook";

const ApolloConfig = {
  uri: "http://localhost:4000/graphql"
};

const client = new ApolloClient(ApolloConfig);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Book list</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
