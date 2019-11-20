import ApolloClient, { InMemoryCache } from "apollo-boost";

let client: ApolloClient<InMemoryCache>;

export const getClient = () => {
  if (client) {
    return client;
  }

  client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache()
  });
  return client;
};
