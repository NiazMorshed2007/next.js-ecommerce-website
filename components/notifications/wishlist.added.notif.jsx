import React from "react";
import { notification } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const WishlistAddedNotif = () => {
  notification.open({
    message: "Added to wishlist!",
    description: "This product has been added to wishlist!",
    icon: <CheckCircleOutlined style={{ color: "#f68773" }} />,
    className: "wish-list-notif",
    style: {
      width: 400,
      borderRadius: "8px",
    },
  });
};

export default WishlistAddedNotif;
