import React from "react"
//import {Link} from "react-router-dom"
//import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from "./NavBar";
import Footer from "./Footer.js";
import BlogCard from './BlogCard.js' 
 export default function Home(){

    
    return (
        <>
        

     {/*   
        <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
     */}


     <div className="total_cards">

    

     <div className="bi">
    <BlogCard
        
        header="recent post"
        title="10 Things to Do in Port Douglas (+2 Incredible Day-trips to World Heritage Sites!)"
        cardText=""
        img="https://misstourist.com/wp-content/uploads/2020/06/Port-Douglas-660x440@2x.jpg"
    />
    </div>

    <div className="bi">
    <BlogCard
        
        header="recent post"
        title="9 Best Things to Do on the Sunshine Coast (Including Some Kids-Friendly and Free Ones)"
        cardText=""
        img="https://misstourist.com/wp-content/uploads/2020/07/Things-to-do-on-the-Sunshine-coast.jpg"
    />
    </div>

    <div className="bi">
    <BlogCard
        
        header="recent post"
        title="10 Things To Do In Kakadu National Park, Northern Territory (With or Without a 4WD)
        "
        cardText=""
        img="https://misstourist.com/wp-content/uploads/2020/07/Sunset-at-Ubirr-Things-to-do-in-Kakadu-660x440@2x.jpg"
    />
    </div>

    <div className="bi">
    <BlogCard
        
        header="recent post"
        title="5 Best Day Trips from Darwin (Self Drive and Tours!)"
        cardText=""
        img=" https://misstourist.com/wp-content/uploads/2020/07/4WD-Safaris-Day-Trips-from-Darwin-660x440@2x.jpg"
    />
    </div>

    <div className="bi">
    <BlogCard
        
        header="recent post"
        title="Darwin To Alice Springs (+ Uluru): A Detailed 6-Day Road Trip Itinerary!"
        cardText=""
        img="https://misstourist.com/wp-content/uploads/2020/07/Self-Drive-Darwin-to-Alice-Springs-660x467@2x.jpg"
        
    />
    </div>

    <div className="bi">
    <BlogCard
        
        header="recent post"
        title="9 Best Things to Do on the Sunshine Coast (Including Some Kids-Friendly and Free Ones)"
        cardText=""
        img="https://misstourist.com/wp-content/uploads/2020/07/Things-to-do-on-the-Sunshine-coast.jpg"
    />
    </div>


    <div className="bi">
    <BlogCard
        
        header="recent post"
        title="Darwin To Alice Springs (+ Uluru): A Detailed 6-Day Road Trip Itinerary!"
        cardText=""
        img="https://misstourist.com/wp-content/uploads/2020/07/Self-Drive-Darwin-to-Alice-Springs-660x467@2x.jpg"
        
    />
    </div>


    <div className="bi">
    <BlogCard
        
        header="recent post"
        title="10 Things to Do in Port Douglas (+2 Incredible Day-trips to World Heritage Sites!)"
        cardText=""
        img="https://misstourist.com/wp-content/uploads/2020/06/Port-Douglas-660x440@2x.jpg"
    />
    </div>

    <div className="bi">
    <BlogCard
        
        header="recent post"
        title="Darwin To Alice Springs (+ Uluru): A Detailed 6-Day Road Trip Itinerary!"
        cardText=""
        img="https://misstourist.com/wp-content/uploads/2020/07/Self-Drive-Darwin-to-Alice-Springs-660x467@2x.jpg"
        
    />
    </div>

    <div className="bi">
    <BlogCard
        
        header="recent post"
        title="9 Best Things to Do on the Sunshine Coast (Including Some Kids-Friendly and Free Ones)"
        cardText=""
        img="https://misstourist.com/wp-content/uploads/2020/07/Things-to-do-on-the-Sunshine-coast.jpg"
    />
    </div>
   
     </div>






    



         
        
       

        </>
    );

}

