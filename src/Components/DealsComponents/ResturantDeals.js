import React, { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import LikeModal from "../DetailCard/LikeModal";
export default function ResturantDeals() {
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
    id: "003w301",
    name: "$40 Breakfast or Lunch Voucher for Two People",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/ed9c8819fecc112a9655aaf8c48561c94e4a7a58.jpg",
    location: "Remuera Local & Laneway",
    old: "$40",
    new: "$20",
    bought:45,
    desc: "$40 Breakfast or Lunch Voucher for Two People - Option for $60 Dinner Voucher",
  },
  {
    id: "233321312",
    name: "Five-Course European Dining Experience for One Person",
    location: "Monsieur Madame",
    old: null,
    new: "$69",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/5147d794573f908e161e61e5b2408c9d33522522.jpg",
    bought:45,
    desc: "Five-Course European Dining Experience for One Person - Options for up to Eight People",
  },
 {
    id: "53555",
    name: "One-Night 5-Star Luxury Dunedin Getaway for Two incl. $50 F&B Credit",
    location: "Fable Dunedin",
    old: "$521",
    new: "$289",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/03335a4e8cf15b4b10d7a36f03238152c1adbf0f.jpg",
    bought:11,
    desc: "One-Night 5-Star Luxury Dunedin Getaway for Two incl. $50 F&B Credit, Bubbles on Arrival, Cooked Breakfast, Valet Parking & Late Checkout - Option for Two & Three Nights with up to $100 Credit",
  },
  { 
    id: "5646422",
    name: "Laser LipoSlim Fat Reduction Treatment on Two Areas incl",
    location: "Life Clinic Health & Beauty",
    old:"$355",
    new: "$89",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/299fabae4e142e2c9fee7bb895636ed458be4762.jpg",
    bought:32,
    desc: "Laser LipoSlim Fat Reduction Treatment on Two Areas incl. Consultation & a Return Voucher - Options for One, Two or Four Treatments",
  },
];
