import React from 'react'
// import Nav from "./NavBar"
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function  Contact() {
  
    

return(
     <Form style={{paddingTop:'20px',marginLeft:'20px'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h3>Email address</h3></Form.Label>
        <Form.Control type="email" style={{width:'50vw'}} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label ><h3>Type Your Query</h3></Form.Label>
        <Form.Control type="text" style={{width:'50vw',height:'100px'}} placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox" >
        <Form.Check type="checkbox" label="subscribe"  />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 


)
  
}
