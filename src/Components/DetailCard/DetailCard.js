import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./Detail-card.css";
import { Icon } from "@iconify/react";
import LikeModal from "./LikeModal";
export default function DetailCard({ ele }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <Card
      style={{
        maxHeight: "35rem",
        marginBottom: "2%",
        marginTop: "2%",
        textAlign: "left",
      }}
    >
      <div className="container">
        <Card.Img src={ele.img}
         style={{ 
          minWidth: "110%",
          marginLeft: "-1.45rem",
            }} />
        <Icon
          icon="tabler:heart-plus"
          className="loveIcon"
          width="30"
          onClick={() => setIsShow(true)}
        />
        <div className="overlay" style={{minWidth:"100%"}}>
          <Card.Text className="text">{ele.desc}</Card.Text>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{ele.name}</Card.Title>
        <Card.Text style={{ color: "#01B2EE" }}>{ele.location}</Card.Text>
        <Card.Text
          style={{
            marginLeft: "90%",
            marginBottom: 0,
            fontSize: "14px",
            color: "#01B2EE",
          }}
        >
          from
        </Card.Text>
        <Card.Text className="new-price">
          <span
            style={{
              fontSize: "14px",
              color: "gray",
              textDecoration: "line-through",
            }}
          >
            {ele.old}
          </span>
          {ele.new}
        </Card.Text>
      </Card.Body>
      <LikeModal isShow={isShow} setshow={setIsShow} />
    </Card>
  );
}

let data = [
  {
    name: "BasicCare 35-Point Service $195.00",
    img: "https://main-cdn.grabone.co.nz/goimage/495x343/db47efc113728b3eebf669248c7b850a3eff9b10.jpg",
    location: "Honda Stores Auckland",
    old: "$270",
    new: "$190",
    desc: "Honda BasicCare 35-Point Service incl. Oil & Filter Change for Honda Vehicles 2014 & Older - Four Auckland Locations Available",
  },
  {
    name: "Luxury 5-Star Auckland Stay at Cordis",
    location: "Cordis",
    old: "$279",
    new: "$199",
    img: "//main-cdn.grabone.co.nz/goimage/495x343/66881e3937f955ca34d7304de9c7301d3ac7bb03.jpg",
    desc: "Luxury Five-Star Auckland Stay for Two in a Deluxe Room at Cordis Auckland incl. Cooked Breakfast, $50 Credit, 2 Drinks, Pool, Spa &amp; Fitness Centre, Parking &amp; Late Checkout - Options to Stay in the",
  },
];
