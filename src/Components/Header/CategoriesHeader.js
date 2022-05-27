import React, { useEffect, useState } from "react";
import { FormControl, InputGroup,Row,Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import NestedDrop from "../NestedDrop/NestedDrop";

export default function CategoriesHeader() {
  return (
    <Row className="categories-header">
      <Col lg={7} md={11} className="head-lines">
        <NestedDrop />
        <span className="categorie">What's New</span>
        <span className="categorie">Trending</span>
        <span className="categorie">For You</span>
        <span className="categorie">Shop Products</span>
      </Col>
      <Col lg={5} md={1}>
      <InputGroup className="mb-3">
        <InputGroup.Text style={{backgroundColor:"white"}}  id="basic-addon1">
          <Icon
            
            icon="akar-icons:search"
            color="gray"
            width="24"
            height="24"
          />
        </InputGroup.Text>
        <FormControl
          placeholder="Search GrabOne"
          aria-label="Search GrabOne"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      </Col>
    </Row>
  );
}

