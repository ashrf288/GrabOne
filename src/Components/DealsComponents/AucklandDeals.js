import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import LikeModal from "../DetailCard/LikeModal";

export default function AucklandDeals() {
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
                    marginTop:"15%"
                  }}
                >
                  from
                </Card.Text >
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",

                  
                }}>
                    <p style={{
                        color:"gray",
                        fontSize:"16px",
                        
                    }}>{ele.bought} bought </p>
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
    id: "122",
    name: "Full Head of Highlights Package & Style",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/3562c86ad0af142d82ff7c1e5390a49b55f26f9a.jpg",
    location: "Vivo Hair and Skin Clinic",
    old: "$350",
    new: "$195",
    desc: "Full Head of Highlights incl. Colour-Lock Treatment, Toner, Shampoo Service, Head Massage, Style Cut & Blow Dry FinishFull Head of Highlights incl. Colour-Lock Treatment, Toner, Shampoo Service, Head Massage, Style Cut & Blow Dry Finish",
    bought:14
  },
  {
    id: "1422",
    name: "Mt Cheeseman Ski Area Lift Pass",
    location: "Mt Cheeseman Ski Area",
    old: "$45",
    new: "$25",
    img: "//main-cdn.grabone.co.nz/goimage/495x343/66881e3937f955ca34d7304de9c7301d3ac7bb03.jpg",
    desc: "Up to 44% Off Mt Cheeseman Ski Area Lift Pass - Options for Adult, Student Pass or Youth - Valid from 23rd July 2022",
    bought:13
  },
  {
    id: "182",
    name: "Delicious Brunch or Lunch Experience",
    location: "Westie Bistro",
    old: "$45",
    new: "$25",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/3b7caad98da3efd9fd6bc5dcb11288734f6d9972.jpg",
    desc: "Delicious Brunch or Lunch Experience including Coffee For Two People; Option For 3, 4 or 5 People - Valid Monday - Friday",
    bought:8
  },
  {
    id: "1477",
    name: "Delicious Brunch or Lunch Experience",
    location: "Fable Terrace Down M Gallery",
    old: "$802",
    new: "$399",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/cd480fa7276259ea0cc3a8a1bc224230df08e337.jpg",
    desc: "One-Night 5-Star Luxury Canterbury Getaway for up to 4 People incl. $70 F&B Credit, Bubbles on Arrival, Daily Cooked Breakfast, 20% off a Round of Golf, Early Check-In & Late Check-Out - Option for up to Three-Night Stay & up to 6 People",
    bought:20
  },
  {
    id: "2422",
    name: "HelloFresh Special Offer",
    location: "HelloFresh",
    old: "$93.9",
    new: "$38.9",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/792521a439b5b30f80cb48e403943e5124bce1d7.jpg",
    desc: "HelloFresh Special Offer - Up to $69.95 OFF Your First Box, $115 OFF Your First Two Boxes, or $150 OFF Your First Four Boxes - Your Choice of Meat & Veggie, Veggie or Family-Friendly Recipes Available",
    bought:77
  },
  {
    id: "1772",
    name: "Three-Day Abel Tasman Self Guided Walk",
    location: "wilsons Abel Tasman National Park",
    old: "$1445",
    new: "$1145",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/3acd4892ed721f814855a75f406a9cadaca98278.jpg",
    desc: "Three-Day All-Inclusive Abel Tasman National Park Self Guided Walk incl. All Meals (Breakfast, Lunch & Dinners) Beachfront Lodge Accommodation, Vista Cruise & Transfers - September to December Dates Available",
    bought:32
  },
  {
    id: "222322",
    name: "Central Auckland Boutique Stay for Two",
    location: "Fable Auckland M Gallery",
    old: "$535",
    new: "$299",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/e5fa4120ea8a04859ec29dc1c556b4fec146f009.jpg",
    desc: "Luxury Five-Star Auckland Boutique Stay for Two at Fable Auckland M Gallery incl. Cooked Breakfast, $50 F&B Credit, Parking, Spa & Fitness Centre & Late Checkout - Options to Stay in Classic or Luxury Rooms & Junior Suites - Stay for up to 3 Nights",
    bought:26
  },
  {
    id: "14257",
    name: "Brazilian Beauty Therapy",
    location: "Mount Eden",
    old: "$300",
    new: "$79",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/bf4fa3b1ac2da2244acceb5ed428fa54324f4764.jpg",
    desc: "30-Minute Laser Teeth Whitening Treatment - Option for 60-Minute Treatment",
    bought:13
  },
];
