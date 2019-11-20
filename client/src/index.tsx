import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import { getClient } from "./lib";
import { App } from "./App";

ReactDOM.render(
  <ApolloProvider client={getClient()}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
