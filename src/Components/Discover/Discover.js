import React from 'react'
import { Card } from 'react-bootstrap';
export default function Discover() {
  return (
    <div><Card className="Discover" style={{ width: '20rem' }}>
    <Card.Body>
      <Card.Title style={{color:"rgb(1,178,238)",fontSize:"2rem",marginRight:"50%"}}>Discover</Card.Title>
      <hr/>
      <Card.Text>
       {data.map(ele=>{
           return(
               <div className="card-item" style={{paddingBlock:"4%"}} key={ele} >
                   <strong className="name">{ele.name}</strong>
                   <span style={{color:"gray" ,fontSize:"11px"}}>{ele.num}</span>
               </div>
           )
       })}
      </Card.Text>
    </Card.Body>
  </Card></div>
  )
}
let data=[
    {name:"Featured Auckland deals",num:298},
    {name:"Collectionss",num:44},
    {name:"Escapes",num:298},
    {name:"Picked for You",num:null},
    {name:"Activities, Events & Outdoors",num:256},
    {name:"Store",num:4947},
    {name:"Restaurants, Bars, Cafes",num:20},
    {name:"Beauty, Massage & Spa",num:380},
    {name:"House & Garden",num:2443},
    {name:"Fitness & Sports",num:275},
    {name:"Automotive",num:164},
]








