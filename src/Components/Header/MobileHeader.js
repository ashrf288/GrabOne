import React from "react";
import { Icon } from "@iconify/react";
import "./header.css";

export default function MobileHeader() {
  return (
    <div className="mobileHeader">
      <hr style={{ color: "gray" }}></hr>
      <div>
        <Icon icon="bx:home-alt" color="gray" height="30" />
        <p>Home</p>
      </div>
      <div>
        <Icon icon="ant-design:search-outlined" color="gray" height="30" />
        <p>Search</p>
      </div>
      <div>
        <Icon icon="carbon:categories" color="gray" height="30" />
        <p>Categories</p>
      </div>
      <div>
        <Icon icon="eva:shopping-cart-outline" color="gray" height="30" />
        <p>Cart</p>
      </div>
      <div>
        <Icon icon="line-md:account" color="gray" height="30" />
        <p>Account</p>
      </div>
    </div>
  );
}
