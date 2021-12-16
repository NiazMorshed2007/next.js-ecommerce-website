import WishlistsContextWrapper from "../contexts/wishlist.context";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <WishlistsContextWrapper>
      <Component {...pageProps} />
    </WishlistsContextWrapper>
  );
}

export default MyApp;
