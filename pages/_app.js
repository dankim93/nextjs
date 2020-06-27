import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  console.log({ Component, pageProps });
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
