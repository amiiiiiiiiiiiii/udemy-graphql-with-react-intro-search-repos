import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import client from "./client";
import { ME } from "./graphql";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>Hello, GraphQL</div>

        <Query query={ME}>
          {({ loading, error, data }) => {
            if (loading) return "loading...";
            if (error) return `Error! ${error.message}`;

            return <dev>{data.user.name}</dev>;
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
