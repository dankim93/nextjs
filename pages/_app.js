import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>Helo</div>
      <Component {...pageProps} />
    </>
  );
}
