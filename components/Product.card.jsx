import {
  FullscreenOutlined,
  HeartOutlined,
  LeftOutlined,
  RightOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import { useWishlistsContext } from "../contexts/wishlist.context";
import WishlistAddedNotif from "./notifications/wishlist.added.notif";

const ProductCard = (props) => {
  const [hov, setHov] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSlideIndex, setModalSlideIndex] = useState(0);
  const { wishlists, setWishlists } = useWishlistsContext();
  const {
    p_name,
    p_price,
    p_original_price,
    p_photo,
    p_hov_photo,
    p_views,
    p_id,
  } = props;
  return (
    <div
      onMouseOver={() => p_hov_photo !== "" && setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="product-card pointer mb-4 mt-3"
    >
      <div className="img-wrapper position-relative overflow-hidden">
        <img width="200px" height="200px" src={p_photo} alt="" />
        <img
          style={{
            left: 0,
            opacity: hov ? 1 : 0,
            transition: "all .2s ease-in-out",
          }}
          width="200px"
          height="200px"
          className="position-absolute top-0 left-0"
          src={p_hov_photo}
          alt=""
        />
        <div className="actions bg-white w-100 p-2 pt-3 bottom-0 position-absolute d-flex align-items-center justify-content-between">
          <p className="m-0">Add to Cart</p>
          <div className="action-icons d-flex gap-2 align-items-center">
            <HeartOutlined
              onClick={() => {
                WishlistAddedNotif();
                setWishlists([
                  {
                    productName: p_name,
                    productPhoto: p_photo,
                    price: p_price,
                    id: p_id,
                  },
                  ...wishlists,
                ]);
              }}
            />
            <FullscreenOutlined onClick={() => setModalVisible(true)} />
          </div>
        </div>
      </div>
      <div className="des-wrapper py-3">
        <p className="m-0 my-1">{p_name}</p>
        <div className="rating d-flex gap-1">
          <StarFilled className="filled" />
          <StarFilled className="filled" />
          <StarFilled className="filled" />
          <StarFilled className="filled" />
          <StarOutlined />
        </div>
        <span className="mx-1">£{p_price}</span>
        {p_original_price !== "" && <del>{p_original_price}</del>}
      </div>
      <Modal
        footer={null}
        width={1120}
        style={{ top: 40 }}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
      >
        <div className="content-wrapper d-flex gap-3">
          <div className="img-wrapper position-relative overflow-hidden">
            <div
              onClick={() => {
                if (modalSlideIndex < p_views.length - 1) {
                  setModalSlideIndex((modalSlideIndex) => modalSlideIndex + 1);
                }
              }}
              className={`arrow arrow-right position-absolute ${
                modalSlideIndex === p_views.length - 1 && "disabled"
              }`}
            >
              <RightOutlined />
            </div>
            <div
              onClick={() => {
                if (modalSlideIndex > 0) {
                  setModalSlideIndex((modalSlideIndex) => modalSlideIndex - 1);
                }
              }}
              className={`arrow arrow-left position-absolute ${
                modalSlideIndex === 0 && "disabled"
              }`}
            >
              <LeftOutlined />
            </div>
            <div
              style={{ transform: `translateX(${-modalSlideIndex * 496}px)` }}
              className="inner-image-wrapper h-100 d-inline-flex"
            >
              {p_views.map((view, i) => (
                <img className="fitImage" key={i} src={view} />
              ))}
            </div>
          </div>
          <div className="description-wrapper">
            <div className="rating d-flex gap-1">
              <StarFilled className="filled" />
              <StarFilled className="filled" />
              <StarFilled className="filled" />
              <StarFilled className="filled" />
              <StarOutlined />
              <span className="review">1 Review</span>
            </div>
            <h1>{p_name}</h1>
            <p className="text-sec">SKU: AB1609456789</p>
            <h2>£{p_price}</h2>
            <p className="text-sec lorem-des mt-4 lorem">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
