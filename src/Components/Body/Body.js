import React from "react";
import DetailCard from "../DetailCard/DetailCard";
import Discover from "../Discover/Discover";
import MailCard from "../MailCard";
import "./body.css";
import { Row, Col, Container } from "react-bootstrap";
import AucklandDeals from "../DealsComponents/AucklandDeals";
import CollectionDeals from "../DealsComponents/CollectionDeals";
import EscapesDeals from "../DealsComponents/EscapesDeals";
import StoreDeals from "../DealsComponents/StoreDeals";
import Heading from "./Heading";
import ActivityDeals from "../DealsComponents/ActivityDeals";

export default function Body({ width }) {
  return (
    <div className="p-5 site-body">
      <img
        src="https://mediacdn.grabone.co.nz/asset/OLygwiumDq"
        style={{ width: "100%" }}
      ></img>
      <p className="pt-5">
        For savings on big brands you love,{" "}
        <span style={{ color: "#1EB3EC" }}>register here.</span>
      </p>
      <div fluid style={{ display: "flex", gap: "3%" }}>
        {width > 1160 && <Discover />}
        <Container fluid>
          <Row style={{ maxWidth: "100%" }}>
            {data.map((ele, indx) => {
              return (
                <Col xl={6} lg={6} md={6} sm={12} className="col-md-offset-4">
                  <DetailCard ele={ele} key={ele.id} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <MailCard />
      <div className="auckland_deals">
        <Heading name="Featured Auckland deals" />

        <AucklandDeals />
      </div>
      <div className="Collections">
        <Heading name="Collections" />
        <CollectionDeals />
        <Heading name="Escapes" />
        <EscapesDeals />
        <Heading name="Activities, Events & Outdoors" />
        <ActivityDeals />
        <Heading name="Store " />
        <StoreDeals/>
      </div>
    </div>
  );
}

let data = [
  {
    id: 13231,
    name: "BasicCare 35-Point Service $195.00",
    img: "https://main-cdn.grabone.co.nz/goimage/495x343/db47efc113728b3eebf669248c7b850a3eff9b10.jpg",
    location: "Honda Stores Auckland",
    old: "$270",
    new: "$190",
    bought:300,
    desc: "Honda BasicCare 35-Point Service incl. Oil & Filter Change for Honda Vehicles 2014 & Older - Four Auckland Locations Available",
  },
  {
    id: 4443,
    name: "Luxury 5-Star Auckland Stay at Cordis",
    location: "Cordis",
    old: "$279",
    new: "$199",
    img: "//main-cdn.grabone.co.nz/goimage/495x343/66881e3937f955ca34d7304de9c7301d3ac7bb03.jpg",
    bought:212,
    desc: "Luxury Five-Star Auckland Stay for Two in a Deluxe Room at Cordis Auckland incl. Cooked Breakfast, $50 Credit, 2 Drinks, Pool, Spa &amp; Fitness Centre, Parking &amp; Late Checkout - Options to Stay in the",
  },
];
