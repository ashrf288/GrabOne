import React, { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import LikeModal from "../DetailCard/LikeModal";
export default function EscapesDeals() {
  const [isShow, setIsShow] = useState(false);
  return (
    <Container fluid>
      <Row className="row deals" style={{ maxWidth: "100%" }}>
        {data.map((ele) => {
          return (
            <Col
              xl={3}
              lg={4}
              md={6}
              sm={12}
              className="col-md-offset-4"
              key={ele.id}
            >
              <Card
                style={{
                  minWidth: "15rem",
                  marginBottom: "2%",
                  marginTop: "2%",
                  textAlign: "left",
                }}
                className="col-sm-*"
              >
                <div className="container">
                  <Card.Img
                    variant="top"
                    className="w-6 "
                    src={ele.img}
                    style={{
                      display: "block",
                      minWidth: "118%",
                      marginLeft: "-1.5rem",
                    }}
                  />
                  <Icon
                    icon="tabler:heart-plus"
                    className="loveIcon"
                    width="30"
                    onClick={() => setIsShow(true)}
                  />
                  <div className="overlay">
                    <Card.Text className="text">{ele.desc}</Card.Text>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{ele.name}</Card.Title>
                  <Card.Text style={{ color: "#01B2EE" }}>
                    {ele.location}
                  </Card.Text>
                  <Card.Text
                    style={{
                      marginLeft: "80%",
                      marginBottom: 0,
                      fontSize: "14px",
                      color: "#01B2EE",
                    }}
                  >
                    from
                  </Card.Text>
                  <Card.Text className="new-price2">
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
              </Card>
            </Col>
          );
        })}
        <LikeModal isShow={isShow} setshow={setIsShow} />
      </Row>
    </Container>
  );
}

let data = [
  {
    id: "00001",
    name: "The Portage THC Group Hotel",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/4377d88afa0573a82f8e92bf1b84ff6fe039514a.jpg",
    location: "Vivo Hair and Skin Clinic",
    old: "$673",
    new: "$258",
    desc: "2-Night 4-Star Remote Wilderness Escape to Marlborough Sounds for 2 People incl. Room Upgrade, Stand Up Paddle Board & Kayak Hire, Welcome Drinks, WiFi & Carpark - Options for 3 or 4-Night Stays incl. Queen Charlotte Walk Passes",
  },
  {
    id: "00002",
    name: "Distinction Hotel - Rotorua",
    location: "Mt Cheeseman Ski Area",
    old: "$339",
    new: "$169",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/61b2e90083ef0408a480de012e8d7813d5157d1e.jpg",
    desc: "One-Night, Four-Star Rotorua Stay for Two Adults and up to Two Children in a Deluxe King/Twin Room incl. Cooked Breakfast, Late Checkout, WiFi & Parking - Options for Two or Three Nights Available & for Stays in a Junior Suite",
  },
  {
    id: "00003",
    name: "The Heritage Queenstown",
    location: "Westie Bistro",
    old: "$337",
    new: "$179",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/4d80ae9b67951641dcbeac217a3acb152b4dd1dd.jpg",
    desc: "Luxury 4.5-Star Stay at Heritage Queenstown for Two in a Deluxe Room incl. Welcome Drinks, Cooked Breakfast, Early Check-In & Late Checkout - Options for Family Deluxe Room or Studio Suite Lake-View, & up to Five Nights",
  },
  {
    id: "00004",
    name: "Hanmer Springs Hotel",
    location: "Fable Terrace Down M Gallery",
    old: "$420",
    new: "$189",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/654a66797a000ded46202c39f263fb4916bda170.jpg",
    desc: "1-Night 4-Star Inclusive Hanmer Springs Getaway for 2 incl. Entry to Thermal Pools, Breakfast, Late Checkout & Free Parking - Family Options Available incl. 2-Course Dinner & Welcome Drinks - Options for up to 3 Nights - Valid Sunday to Thursday",
  },
];
