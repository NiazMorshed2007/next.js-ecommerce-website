import React from "react";
import { notification } from "antd";
import { WarningOutlined } from "@ant-design/icons";

const WishlistRemovedNotif = () => {
  notification.open({
    message: "Removed from wishlist!",
    description: "This product has been removed from wishlist!",
    icon: <WarningOutlined style={{ color: "#f68773" }} />,
    className: "wish-list-notif",
    style: {
      width: 400,
      borderRadius: "8px",
    },
  });
};

export default WishlistRemovedNotif;
