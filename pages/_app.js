import "../styles/global.scss";
import { Provider } from "react-redux";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import store from "../redux/store";
import withRedux from "next-redux-wrapper";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }) {
  console.log({ Component, pageProps });
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(App);
