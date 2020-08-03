import "../styles/global.scss";
import { Provider } from "react-redux";
import store from "../redux/store";
import withRedux from "next-redux-wrapper";

function App({ Component, pageProps }) {
  console.log({ Component, pageProps });
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(App);
