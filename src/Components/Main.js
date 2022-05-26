import React, { useState } from "react";
import DropDown from "./Header/DropDown";
import Header from "./Header/Header";
import MobileHeader from "./Header/MobileHeader";
import CategoriesHeader from "./Header/CategoriesHeader";
import Footer from "./Footer/Footer";
import NestedDrop from "../NestedDrop/NestedDrop";
import Body from "./Body/Body";

export default function Main() {
  const [width, setWidth] = useState(window.innerWidth);

  let handleResize = (e) => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return (
    <div style={{backgroundColor:"#F4F7FB"}}>
      <Header width={width} />
      {width > 1090 && <CategoriesHeader/>}
      {width < 1090 && <MobileHeader />}
      <Body width={width}/>
      
      <Footer width={width}/>
    </div>
  );
}
