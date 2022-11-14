import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function BlogCard(props) {
  return (
   

    
    
   

      <div class="home_card">
        
        <img src="starwars_image.jpg" alt="" class="starwars_image hc"></img>
      
        

      <div className="name hc">

        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>NAME</p>{props.name}
      </div>

      <div class="height hc" >

        
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>HEIGHT</p>{props.height}</div>
      <div class="mass hc">
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>MASS</p>{props.mass}</div>
      <div class="hair_color hc">
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>HAIR COLOR</p>{props.hair_color}</div>
      <div class="skin_color hc">
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>SKIN COLOR</p>{props.skin_color}</div>
      <div class="eye_color hc">
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>EYE COLOR</p>{props.eye_color}</div>
      <div class="birth_year hc">
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>BIRTH YEAR</p>{props.birth_year}</div>
      <div class="gender hc">
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>GENDER</p>{props.gender}</div>

    {/* <div class="homeworld hc">{props.homeworld}</div> */}
    
    {/* <div class="movies hc">
       get movies
    </div>

    <div class="vehicles"></div>
    <div class="starships"></div> */}
    


     {/* <Card border="success" style={{ width: '18rem' ,height:'23rem'}}>
        <Card.Header><h3>{props.name}</h3></Card.Header>
        <Card.Body>
        <Card.Img variant="top" src={props.img} />
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           

            {props.cardText}
          </Card.Text>
        </Card.Body>
      </Card> */}

    </div>
      



    
  )
}
