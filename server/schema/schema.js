const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const books = [
  { name: "book1", genre: "fantasy", id: "1" },
  { name: "book2", genre: "fantasy", id: "2" },
  { name: "book3", genre: "Sci-Fi", id: "3" }
];
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        //   code to get data from db
        const book = books.find(book => args.id === book.id);
        return book;
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
