import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./footer.css";
import { Button,Col,Container,FormControl,InputGroup, Row } from "react-bootstrap";
export default function Footer(props) {
  let md=3
  let [fbcolor, setFbColor] = useState("gray");
  let [twcolor, setTwColor] = useState("gray");
  let [inscolor, setInsColor] = useState("gray");
  let [yocolor, setYoColor] = useState("gray");
  props.width < 1280 && (md=6);
  props.width > 883 && (md=4);
  // props.width > 883 && (md=12);
  return (
    <div style={{backgroundColor:"white" ,paddingLeft:"5rem" ,paddingBottom:props.width>1090 ? "0":"8%"
 }}>
   
     {props.width < 1280 && (
          <div style={{marginTop: "1vh", marginLeft:"2%"}}>
            <p style={{ fontWeight: "bold" }}>Newsletter Signup</p>
            <p>
              Sign up for our daily emails and we'll send you all the best
              deals, tailored for you.
            </p>
            <div style={{ display: "flex" }}>
            <InputGroup className="mb-3 w-50 " size="md">
        <InputGroup.Text style={{backgroundColor:"white"}}  id="basic-addon1">
        <Icon icon="carbon:email" color="gray" width="24" height="24" />
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
            <hr />
          </div>

        )}
      <Container className="footer">
     
      <Row>
        <Col lg={2} md={md} sm={12}>
        <div className="social-section">
          <strong>Follow us on</strong>
          <div className="socialIcons">
            <Icon
              icon="entypo-social:facebook-with-circle"
              color={fbcolor}
              height="34"
              onMouseLeave={() => setFbColor("gray")}
              onMouseOver={() => setFbColor("cyan")}
            />
            <Icon
              icon="entypo-social:twitter-with-circle"
              color={twcolor}
              height="34"
              onMouseLeave={() => setTwColor("gray")}
              onMouseOver={() => setTwColor("cyan")}
            />
            <Icon
              icon="entypo-social:instagram-with-circle"
              color={inscolor}
              height="34"
              onMouseLeave={() => setInsColor("gray")}
              onMouseOver={() => setInsColor("cyan")}
            />
            <Icon
              icon="entypo-social:youtube-with-circle"
              color={yocolor}
              height="34"
              onMouseLeave={() => setYoColor("gray")}
              onMouseOver={() => setYoColor("cyan")}
            />
          </div>
          <p>Get app exclusive deals</p>
          <Button variant="info" style={{ color: "white" }}>
            <Icon icon="bi:phone" color="white" height="34" />
            Download Our App
          </Button>
        </div>
        </Col>
        <Col lg={2} md={md} sm={12}>
        <div className="GrabOne">
          <strong>GrabOne</strong>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Terms & Returns</p>
          <p>Blog</p>
          <p>Gift Cards</p>
        </div>

        </Col>
        <Col lg={2} md={md} sm={12}>
        <div className="GrabOne">
          <strong> My Account</strong>
          <p>My Cart</p>
          <p>My Coupons</p>
          <p>FAQ</p>
        </div>
        </Col>
        <Col lg={2} md={3} >
        <div className="GrabOne">
          <strong> Merchants</strong>
          <p>Run a Deal</p>
          <p>Merchant Centre</p>
        </div>
        </Col>
        <Col lg={4} md={md} sm={12} >
        {props.width > 1280 && (
          <div>
            <p style={{ fontWeight: "bold" }}>Newsletter Signup</p>
            <p>
              Sign up for our daily emails and we'll send you all the best
              deals, tailored for you.
            </p>
            <div style={{ display: "flex" }}>
            <InputGroup className="mb-3">
        <InputGroup.Text style={{backgroundColor:"white"}}  id="basic-addon1">
        <Icon icon="carbon:email" color="gray" width="24" height="24" />
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
          </div>
        )}
        </Col>
       
      </Row>

        
      </Container>
      <hr />
      <p style={{ textAlign: "center" }}>
        <span style={{ color: "cyan" }}>Privacy Policy</span> © 2022 GrabOne
        Limited
      </p>
    </div>
  );
}
