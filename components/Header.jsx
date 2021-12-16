import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { useWishlistsContext } from "../contexts/wishlist.context";
// import { Wishlists } from "../contexts/wishlist.context";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const { wishlists } = useWishlistsContext();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  });
  const router = useRouter();
  return (
    <div
      style={{
        position: sticky ? "fixed" : "",
        height: sticky ? "70px" : "78px",
      }}
      className="header bg-white vw-100 d-flex shadow-sm border-bottom p-4 align-items-center gap-5"
    >
      <img onClick={() => router.push("/")} src={logo.src} alt="" />
      <div className="navigations d-flex align-items-center gap-5 flex-grow-1">
        <p onClick={() => router.push("/")} className="m-0">
          Home
        </p>
        <p onClick={() => router.push("/shop")} className="m-0">
          Shop
        </p>
        <p onClick={() => router.push("/blogs")} className="m-0">
          Blogs
        </p>
        <p className="m-0">Pages</p>
        <p onClick={() => router.push("/contact")} className="m-0">
          Contact
        </p>
      </div>
      <div className="icons-wrapper d-flex align-items-center gap-4 align-items-center px-4">
        <SearchOutlined />
        <UserOutlined />
        <i>
          <HeartOutlined onClick={() => router.push("/shop/wishlist")} />
          <sup>{wishlists && wishlists.length}</sup>
        </i>
        <ShoppingCartOutlined />
      </div>
    </div>
  );
};

export default Header;
