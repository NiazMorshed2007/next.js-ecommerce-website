import React from "react";
import WishlistsContextWrapper from "../../contexts/wishlist.context";
import Footer from "../Footer";
import Header from "../Header";

const CommonLayout = ({ children }) => {
  return (
    <>
      <WishlistsContextWrapper>
        <Header />
        <div className="main-content-wrapper">{children}</div>
        <Footer />
      </WishlistsContextWrapper>
    </>
  );
};

export default CommonLayout;
