import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import "./Nested_drop.css"
export default function TheCard({details,name}) {

  return (
    <div>
    <Card style={{ width: "24rem" ,height:"38rem"}} >
      <Card.Body className="categories-card">
        <Card.Title className='cardTitle'>{name}</Card.Title>
        {details.map((ele,index)=>{
          return(
        <Card.Text className={index%2==0?"cardDataEven":"cardDataOdd"} key={index}>
         {ele}
        </Card.Text>

          )
        })}
      </Card.Body>
    </Card>
  </div>
  )
}

