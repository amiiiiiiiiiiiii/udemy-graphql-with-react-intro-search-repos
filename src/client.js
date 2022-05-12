import { ApolloClient } from "apollo-boost";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const GITHUB_TAKEN = process.env.REACT_APP_GIHUB_TOKEN;

const headersLink = new ApolloLink((operation, forword) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${GITHUB_TAKEN}`,
    },
  });
  return forword(operation);
});

const endpoint = "https://api.github.com/graphql";
const httplink = new HttpLink({ uri: endpoint });
const link = ApolloLink.from([headersLink, httplink]);

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
