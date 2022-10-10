import React from "react";
import {Link,Outlet} from "react-router-dom";
import { Nav, Navbar, NavLink } from "react-bootstrap";

/* import  Home  from "./Home";
import BookList from "./BookList";
import Login from "./Login"; */

export default function NavBar() {

    return(
    <>

<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink  eventKey="2" as={Link} to="BookList">BookList</NavLink>
                    <NavLink  eventKey="3" as={Link} to="Login">Login</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>

    {/* <nav>
     
          <Link to="/"> Home</Link>
       
          <Link to="BookList"> BookList</Link>
       
          <Link to="Login"> Login</Link>
       
    </nav>
   */}

<Outlet />




  </>

    );
}
