import { createContext, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const WishlistsContext = createContext();

export default function WishlistsContextWrapper({ children }) {
  // const getWishlists = () => {
  //   if (typeof window !== "undefined") {
  //     const local_wishlists = localStorage.getItem("wishlists");
  //     if (local_wishlists) {
  //       return JSON.parse(local_wishlists);
  //     } else {
  //       return [];
  //     }
  //   }
  // };
  const [fetched, setFetched] = useState(false);
  const [wishlists, setWishlists] = useState([]);
  useEffect(() => {
    const local_wishlists = localStorage.getItem("wishlists");
    if (local_wishlists !== null) {
      setWishlists(JSON.parse(local_wishlists));
      console.log("helu boro");
      setFetched(true);
    }
  }, []);
  useEffect(() => {
    if (fetched) {
      localStorage.setItem("wishlists", JSON.stringify(wishlists));
    }
  }, [wishlists]);
  return (
    <WishlistsContext.Provider value={{ wishlists, setWishlists }}>
      {children}
    </WishlistsContext.Provider>
  );
}

export function useWishlistsContext() {
  return useContext(WishlistsContext);
}
