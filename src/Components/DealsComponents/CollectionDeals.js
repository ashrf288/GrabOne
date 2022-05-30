import React, { useState } from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";

export default function CollectionDeals() {
  return (
    <Container fluid className="card-container">
      <Row style={{ maxWidth: "100%" }}>
        {data.map((ele) => {
          return (
            <Col
              xl={3}
              lg={4}
              md={6}
              s={12}
              key={ele.id}
              className="col-md-offset-"
            >
              <Card
                style={{
                  minWidth: "15rem",
                  marginBottom: "2%",
                  marginTop: "2%",
                  textAlign: "center",
                }}
                className="col-sm-*"
              >
                <div className="card_backGround">
                    <Card.Img className="cardimg" src={ele.img} />
                    <p className="text2" >{ele.desc}</p>
                   
                  </div>
                <Card.Body >
                  <Card.Title className="card_title ">{ele.name}</Card.Title>
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
    id: "001",
    name: "Ugg collection",
    img: "https://mediacdn.grabone.co.nz/asset/cWllOdaxqn",
    location: "Multiple deals",
    desc: "Ugg collection",
  },
  {
    id: "002",
    name: "Vivo Hair & Beauty",
    location: "Multiple deals",
    img: "https://mediacdn.grabone.co.nz/asset/DKqrqrT4pw",
    desc: "Vivo Hair & Beauty",
  },

  {
    id: "003",
    name: "South Island Getaways",
    location: "Multiple deals",
    img: "https://mediacdn.grabone.co.nz/asset/YaFw5GkDiY",
    desc: "South Island Getaways",
  },
  {
    id: "004",
    name: "Bedroom Essentials",
    location: "Multiple deals",
    img: "https://mediacdn.grabone.co.nz/asset/ZF4G1zPBzJ",
    desc: "Bedroom Essentials",
  },
];
