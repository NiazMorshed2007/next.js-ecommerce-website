// import { Wishlists } from "../../../contexts/wishlist.context";
import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import React from "react";
import CommonLayout from "../../components/common/common.layout";
import WishlistRemovedNotif from "../../components/notifications/wishlists.remove.notif";
import { useWishlistsContext } from "../../contexts/wishlist.context";

const Wishlist = () => {
  const router = useRouter();
  const { wishlists, setWishlists } = useWishlistsContext();

  console.log(wishlists);
  const removeFromWishlist = (u) => {
    setWishlists(wishlists.filter(({ id }) => id !== u));
  };
  return (
    <CommonLayout>
      <div className="wishlist-page-wrapper">
        <div className="wishlist-banner d-flex align-items-center flex-column justify-content-center p-4 py-5 my-5">
          <h1>Wishlist</h1>
          <ul className="d-flex gap-4">
            <li
              onClick={() => router.push("/")}
              className="text-sec list-unstyled"
            >
              Home
            </li>
            <li onClick={() => router.push("/shop")} className="text-sec">
              Shop
            </li>
            <li className="text-sec text-black">Wishlist</li>
          </ul>
        </div>
        <div className="custom-table row px-5 mx-3 pb-5 mb-4">
          <table>
            <thead className="border-bottom">
              <tr>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Stock Status</th>
              </tr>
            </thead>
            <tbody>
              {wishlists && wishlists.length < 1 && (
                <tr className="border-bottom">
                  <td className="text-sec">No Products Found!</td>
                </tr>
              )}
              {wishlists &&
                wishlists.map((wish) => (
                  <tr className="border-bottom" key={wish.id}>
                    <td>
                      <div className="product-preview d-flex align-items-center gap-2 overflow-hidden">
                        <div className="img-wrapper">
                          <img
                            className="fitImage"
                            src={wish.productPhoto}
                            alt=""
                          />
                        </div>
                        {wish.productName}
                      </div>
                    </td>
                    <td className="px-2 price">£{wish.price}</td>
                    <td className="px-2 stock">In Stock</td>
                    <td>
                      <div className="d-flex add align-items-center gap-3 justify-content-end">
                        <button>Add to Cart</button>
                        <CloseOutlined
                          onClick={() => {
                            removeFromWishlist(wish.id);
                            WishlistRemovedNotif();
                          }}
                          className="pointer"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Wishlist;
