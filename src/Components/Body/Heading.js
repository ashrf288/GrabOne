import React from "react";
import { Button,Row,Col, Container } from "react-bootstrap";
export default function Heading({name}) {
  return (
        <Row style={{width:"40%",paddingBlock:"2%",margin:"0" }}>
          <Col lg={12} sm={12} style={{padding:"0",margin:"0"}}>
          <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {name}{" "}
        </span>
        <Button  variant="info" style={{ color: "white",margin:"0"}}>
          View More &gt;{" "}
        </Button>
          </Col>
                 </Row>
    
  );
}
<div style={{width:"48%" , marginBlock:"3%"}}>
<Row style={{cursor: "pointer" , marginLeft:"0"}}>
      <Col  lg={12} sm={12} >
        {" "}
        
     
        </Col>
    </Row>
      </div>