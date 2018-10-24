import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { GET_AUTHORS } from "../queries/queries";
import { POST_BOOK } from "../mutations/mutations";

class AddBook extends Component {
  state = {
    name: "",
    genre: "",
    authorId: ""
  };
  handleChanges(e) {
    this.setState(e);
  }

  render() {
    return (
      <Query query={GET_AUTHORS}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error! ${error.message}`;
          const { authors } = data;
          return (
            <Mutation mutation={POST_BOOK}>
              {addBook => (
                <form
                  id="add-book"
                  onSubmit={e => {
                    e.preventDefault(e);
                    addBook({
                      variables: {
                        name: this.state.name,
                        genre: this.state.genre,
                        authorID: this.state.authorId
                      }
                    });
                  }}
                >
                  <div className="field">
                    <label htmlFor="">Book name:</label>
                    <input
                      type="text"
                      onChange={e =>
                        this.handleChanges({ name: e.target.value })
                      }
                    />
                  </div>
                  <div className="field">
                    {" "}
                    <label htmlFor="">Genre:</label>
                    <input
                      type="text"
                      onChange={e =>
                        this.handleChanges({ genre: e.target.value })
                      }
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="">Author</label>
                    <select
                      name=""
                      id=""
                      onChange={e =>
                        this.handleChanges({ authorId: e.target.value })
                      }
                    >
                      <option>Select an author</option>
                      {authors.map(author => (
                        <option key={author.id} value={author.id}>
                          {author.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <button>Add</button>
                  </div>
                </form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default AddBook;
