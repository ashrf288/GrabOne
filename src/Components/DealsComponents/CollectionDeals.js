import React, { useState } from "react";
import { Card, Button,Col,Row, Container } from "react-bootstrap";
import "./deals.css";

export default function CollectionDeals() {
  return (
    <Container fluid>
    <Row className="row deals">
      {data.map((ele) => {
        return (
          <Col xl={3} lg={4} md={6} s={12} key={ele.id} className="col-md-offset-3">
            <Card
              style={{ width: "20rem", marginBottom: "2%", marginTop: "2%" }}
              className="col-sm-*"
            >
              <div className="container" style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src={ele.img}
                  style={{ display: "block" ,width:"20rem" }}
                />

                <div className="overlay">
                  <Card.Text className="text">{ele.desc}</Card.Text>
                </div>
              </div>
              <Card.Body style={{ marginLeft: "20%", marginLeft: "8%" }}>
                <Card.Title>{ele.name}</Card.Title>
                <Card.Text style={{ color: "#01B2EE" }}>
                  {ele.location}
                </Card.Text>
                <Button
                  className="bg-white text-primary "
                  style={{ border: "2px solid #01B2EE" }}
                >
                  {" "}
                  View Colleection &gt;
                </Button>
              </Card.Body>
              <hr style={{ margin: "1%" }} />

              <hr style={{ margin: "1%" }} />
            </Card>
          </Col>
        );
      })}
    </Row>
    </Container>
  );
}

let data = [
  {
    id:"001",
    name: "Ugg collection",
    img: "https://mediacdn.grabone.co.nz/asset/cWllOdaxqn",
    location: "Multiple deals",
    desc: "Ugg collection",
  },
  {
    id:"002",
    name: "Vivo Hair & Beauty",
    location: "Multiple deals",
    img: "https://mediacdn.grabone.co.nz/asset/DKqrqrT4pw",
    desc: "Vivo Hair & Beauty",
  },

  {
    id:"003",
    name: "South Island Getaways",
    location: "Multiple deals",
    img: "https://mediacdn.grabone.co.nz/asset/YaFw5GkDiY",
    desc: "South Island Getaways",
  },
  {
    id:"004",
    name: "Bedroom Essentials",
    location: "Multiple deals",
    img: "https://mediacdn.grabone.co.nz/asset/ZF4G1zPBzJ",
    desc: "Bedroom Essentials",
  },
];
