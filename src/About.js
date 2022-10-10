import {Link} from "react-router-dom"
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function About(){
    
   
    return (
        <>
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://raw.githubusercontent.com/SarangGakhar/image-gallery/master/sarang.jpg" />
      <Card.Body>
        <Card.Title>Sarang</Card.Title>
        <Card.Text>
          Hi i am sarang i am a web developer currently studying in 5th semester in Chitkara University 
        </Card.Text>
        <Button variant="primary">Resume</Button>
      </Card.Body>
    </Card>
        
        
        </>
    );
}