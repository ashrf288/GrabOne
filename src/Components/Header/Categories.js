import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./header.css";
import { Icon } from "@iconify/react";

import { Button, Modal, ListGroup } from "react-bootstrap";
import NestedDrop from "../../NestedDrop/NestedDrop";
export default function Categories(props) {
  let data = ["a", "b", "c", "d"];
  const handleToggle = (isOpen, event, metadata)=> {
    if(isOpen || metadata.source!=='select'){
      setShow(isOpen);
    } 
  }

  const [show, setShow] = useState(false);
  let handleClick = () => {
    document.querySelector(".categories-drop-down").classList.add("a");
  };

  return (
    <div>
    
       <NestedDrop/>


    </div>
  );
}
