import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter} from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  gql
} from "@apollo/client";
import { createAuthLink } from "aws-appsync-auth-link";
import { createHttpLink } from 'apollo-link-http';
import awsmobile from './aws-exports';
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";


const url = awsmobile.aws_appsync_graphqlEndpoint;
const region = awsmobile.aws_appsync_region;
const auth = {
  type: awsmobile.aws_appsync_authenticationType,
  apiKey: awsmobile.aws_appsync_apiKey
};

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createHttpLink({ uri: url })
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
<ApolloProvider client={client}>
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
</ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
