import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import LikeModal from "../DetailCard/LikeModal";
export default function ActivityDeals() {
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
                  maxHeight: "25rem",
                  marginBottom: "2%",
                  marginTop: "2%",
                  textyAlign: "left",
                }}
                className="col-sm-*"
              >
                <div className="container">
                  <Card.Img
                    variant="top"
                    className="w-6 "
                    src={ele.img}
                    style={{ display: "block", width: "108%" }}
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
                  <Card.Text className="new-price3">
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
    id: "00012",
    name: "Pen Fishing Rod Reel J1460-6",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/9b9e52a07c0d6e6701b240ec047c7c70490d0594.jpg",
    location: "Pen Fishing Rod Reel",
    old: null,
    new: "$54",
    desc: "Pen Fishing Rod Reel J1460-6",
  },
  {
    id: "00022",
    name: "Outdoor Pop-Up Tent ",
    location: "Outdoor Pop-Up Tent ",
    old: null,
    new: "$169",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/8772142ba94cb36bbbbc03b32c2b62ed4dda5e8e.jpg",
    desc: "Outdoor Pop-Up Tent - Two Colours Available",
  },
  {
    id: "00033",
    name: "Keychain Flashlight Tool ",
    location: "Westie Bistro",
    old: null,
    new: "$29",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/c8b2580cd5d583a41b501e9574dbf054f53f8aa8.jpg",
    desc: "Keychain Flashlight Tool ",
  },
  {
    id: "00044",
    name: "Cargo Luggage Net",
    location: "Fable Terrace Down M Gallery",
    old: "$25",
    new: "$19.5",
    img: "https://main-cdn.grabone.co.nz/goimage/fullsize/f67042bf7a1106e71559f910931124b0dc1ab810.jpg",
    desc: "Cargo Luggage Net",
  },
];
