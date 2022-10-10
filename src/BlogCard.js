import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function BlogCard(props) {
  return (
    <>
    
    <Card border="success" style={{ width: '18rem' ,height:'23rem'}}>
        <Card.Header><h3>{props.header}</h3></Card.Header>
        <Card.Body>
        <Card.Img variant="top" src={props.img} />
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           

            {props.cardText}
          </Card.Text>
        </Card.Body>
      </Card>
      

       {/* <span class="blog_card" style={{ width: '18rem' }} >
        <h1>{props.header}</h1>
        <h2>{props.title}</h2>
        <p>{props.cardText}</p>
       </span> */}
    



    </>
  )
}
