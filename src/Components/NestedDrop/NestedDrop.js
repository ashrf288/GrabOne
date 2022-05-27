import React, { useState } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import TheCard from "./TheCard";
import { Card, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./Nested_drop.css";

export default function NestedDrop() {
  const [cardData, setCardData] = useState([]);
  const [name, setName] = useState(" ");

  let handleDetails = (name) => {
    setCardData(data[name]);
    setName(name);
  };

  return (
    <div>
      <UncontrolledDropdown>
        <DropdownToggle className="categories-drop-down">
          <span className="categorie head-lines">
            Browse Categories
            <Icon
              icon="ri:arrow-drop-down-line"
              color="cyan"
              className="Icon"
              width="30"
            />{" "}
          </span>
        </DropdownToggle>
        <div>
          <DropdownMenu style={{ position: "relative", top: "80%",paddingBlock:"0" ,height:"38rem"}}>
            <div style={{display:"flex"}}>
            <div>
              {Object.keys(data).map((ele) => {
                return (
                  <DropdownItem  toggle={false} style={{backgroundColor:"white"}} key={ele}>
                    <div onClick={() => handleDetails(ele)} className="drop-item">
                      <span>{ele}</span>{" "}
                      <Icon className="drop-icon" icon="dashicons:arrow-right-alt2" />
                    </div>
                  </DropdownItem>
                );
              })}
              <hr/>
              <DropdownItem style={{color:"#01B2EE",fontSize:"1rem"}}>
                <p>Browse all Categories</p>
              </DropdownItem>
            </div>
                {cardData.length>1 && <TheCard details={cardData} name={name} />} 
            </div>
            {/* <DropdownItem header toggle={false}>Header</DropdownItem>
        <DropdownItem disabled toggle={false}>Action</DropdownItem> */}
 

          </DropdownMenu>
        </div>
      </UncontrolledDropdown>

    </div>
  );
}
let data = {
  "Activities, Events & Outdoors": [
    "Adventure & Outdoors",
    "Bungy Jumping, Camping, Horse Riding, Hunting & Fishing, Kayaking",
    "Events, Shows & Tickets",
    "Circus, Comedy, Concerts, Expos & Conventions, Festivals",
    "Fun & Leisure",
    "Amusement Parks, Bowling, Bus & Boat Tours, Dolphin & Whale Watching, Food Tours",
    "Kids Activities",
    "Kid's Camps, Kid's Classes, Kid's Shows, Play ",
  ],
  "Automotive": [
    "Automotive Parts & Accessories",
    "Automotive Accessories, Car Parts, Motorbike Parts, Tyres",
    "Car Electronics",
    "Car Alarms, Car Amplifiers, Car GPS, Car Handsfree, Car Speakers",
    "Wash, Repairs & Maintenance",
    "Automotive Servicing, Car Wash & Groom",
  ],
  "Baby, Kids & Toys": [
    "Baby Essentials",
    "Baby Feeding, Baby Gates, Baby Health & Safety, Baby Monitors, Bathing & Changing",
    "Baby Gear",
    "Baby Travel Accessories, Car Seats & Strollers, Carriers & Slings, High Chairs & Boosters, Jumpers & Bouncers",
    "Clothing & Accessories - Boys",
    "Boys Accessories, Boys Bags, Boys Bodysuits, Boys Growsuits, Boys Hats & Caps",
    "Clothing & Accessories - Girls",
    "Girls Accessories, Girls Bags, Girls Bodysuits, Girls Dresses, Girls Growsuits",
    "Nursery & Toddlers Room",
    "Baby Furniture, Nursery & Toddlers Bedding, Nursery & Toddlers Decor, Toddler Furniture",
    "Toys",
    "Action Figures & Accessories, Bikes, Sc",
  ],
  "Beauty, Massage & Spa":[
    "Face & Skincare",
    "Acne Care, Appearance Medicine, Eyebrow Threading & Tinting, Facials, Microdermabrasion",
    "Hair Salons & Products",
    "Barbers & Men's Haircuts, Hair Colour & Highlights, Hair Straightening & Curling, Hair Styling Products, Hairdressing & Haircuts",
    "Makeup",
    "Eyes & Brow Makeup, Face Makeup, Lips, Makeup Brushes & Applicators",
    "Nails",
    "Manicure & Pedicure, Nail Polish",
    "Spa & Massage",
    "Aromatherapy, Body Scrubs & Wraps, Massage Therapy, Natural Hot Spring, Pampering",
    "Waxing & Hair Removal",
    "IPL Hair Removal, Laser Hair Removal, Shav"
  ]




};
