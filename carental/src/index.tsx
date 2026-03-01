import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./app/graphql";

// Cast to any to bypass @types/react v16 vs react-redux v7.2 JSX incompatibility
const ReduxProvider = Provider as any;
const Apollo = ApolloProvider as any;

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Apollo client={apolloClient}>
        <App />
      </Apollo>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();