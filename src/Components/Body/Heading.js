import React from "react";
import { Button,Row,Col } from "react-bootstrap";
export default function Heading({name}) {
  return (
      <div style={{width:"48%" , marginBlock:"3%"}}>
<Row style={{cursor: "pointer" , marginLeft:"0"}}>
      <Col  lg={12} sm={12} >
        {" "}
        <span style={{ fontSize: "2.2rem", fontWeight: "bold" }}>
          {name}{" "}
        </span>
        <Button  variant="info" style={{ color: "white",margin:"0"}}>
          View More &gt;{" "}
        </Button>
        </Col>
    </Row>
      </div>
    
  );
}
