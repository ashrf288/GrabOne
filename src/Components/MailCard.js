import React from "react";
import {
  Card,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { Icon } from "@iconify/react";

export default function MailCard() {
  return (
    <Container>
      <Card style={{ minWidth: "100%", marginBlock: "4%",padding:"1.5rem", textAlign:"start" }}>
        {/* {style={{ display: "flex", justifyContent: "space-between" }}} */}
        <Card.Body >
          <Row>
            <Col   xs={6} md={12} lg={8} sm={12}>
              <Card.Text
                style={{
                  fontSize: "1.2rem",
                  color: "#01B2EE",
                  fontWeight: "900",
                }}
              >
                Get the best deals delivered direct to your inbox each day
              </Card.Text>
            </Col>
            <Col   xs={6} md={12} lg={4} sm={12} style={{paddingBlock:"3%", minWidth:"30%"}}>
              <div style={{ display: "flex" }}>
                <InputGroup size="lg" style={{ height: "15px" }}>
                  <InputGroup.Text
                    style={{ backgroundColor: "white" }}
                    id="basic-addon1"
                  >
                    <Icon
                      icon="carbon:email"
                      color="gray"
                      width="24"
                      height="24"
                    />
                  </InputGroup.Text>
                  <FormControl
                    placeholder="Enter Email address"
                    aria-label="Search GrabOne"
                    aria-describedby="basic-addon1"
                  />
                  <Button variant="info" style={{ color: "white" }}>
                    Subscribe
                  </Button>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
