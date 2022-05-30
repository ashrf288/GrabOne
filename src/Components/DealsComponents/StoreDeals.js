import React, { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import LikeModal from "../DetailCard/LikeModal";
export default function StoreDeals() {
  const [isShow, setIsShow] = useState(false);
  return (
    <Container fluid className="card-container">
      <Row style={{ maxWidth: "100%" }}>
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
                  height: "95%",
                  marginBottom: "2%",
                  textAlign: "left",
                }}
              >
                <div className="card_backGround">
                  <Card.Img className="cardimg" src={ele.img} />
                  <p className="text">{ele.desc}</p>
                  <Icon
                    icon="tabler:heart-plus"
                    className="loveIcon"
                    width="30"
                    onClick={() => setIsShow(true)}
                  />
                  <p style={{
                      width:"50%",
                      position:"absolute",
                      top:"90%",color:"white",
                      backgroundColor:"#01B2EE",
                      textAlign:"center",
                      
                  }}> free delivery</p>
                </div>
                <Card.Body style={{ padding: "3%" }}>
                  <Card.Title className="card_title">{ele.name}</Card.Title>
                  <Card.Text style={{ color: "#01B2EE" }}>
                    {ele.location}
                  </Card.Text>
                  <Card.Text
                    style={{
                      marginLeft: "80%",
                      marginBottom: 0,
                      fontSize: "14px",
                      color: "#01B2EE",
                      marginTop: "15%",
                    }}
                  >
                    from
                  </Card.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        color: "gray",
                        fontSize: "16px",
                      }}
                    >
                      {ele.bought} bought{" "}
                    </p>
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
                  </div>
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
    id: "003301",
    name: "Memory Foam Fur Trim UGG Scuffs",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/a5d88cd04bad265c44b1438a3f14ede3bc809e5b.jpg",
    location: "GHN Trading",
    old: null,
    new: "$82",
    bought:45,
    desc: "Comfort Me 'Wombat' Memory Foam Fur Trim UGG Scuffs - Five Colours & Eight Sizes Available",
  },
  {
    id: "2321312",
    name: "IPL Premium Hair Removal Handset",
    location: null,
    old: "$249.99 ",
    new: "$148",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/484ddb7b23982a83815c7dba2acf4509f2c727a8.jpg",
    bought:45,
    desc: "One-Night, Four-Star Rotorua Stay for Two Adults and up to Two Children in a Deluxe King/Twin Room incl. Cooked Breakfast, Late Checkout, WiFi & Parking - Options for Two or Three Nights Available & for Stays in a Junior Suite",
  },
  {
    id: "555",
    name: "1800W 8.5L Air Fryer",
    location: null,
    old: null,
    new: "$129",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/dc912ca9aa5dede2bc47b2e5fd02b146f71b5ecd.jpg",
    bought:41,
    desc: "1800W 8.5L Air Fryer - Two Options Available",
  },
  {
    id: "56464",
    name: "Maxkon 2500W Carbon Fibre Infrared Heater",
    location: null,
    old: null,
    new: "$299",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/3b214dd542fc4d52ec7ecd0140fd300d0fff405d.jpg",
    bought:32,
    desc: "Maxkon 2500W Carbon Fibre Infrared Heater",
  },
];
