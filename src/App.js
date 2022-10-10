import React from "react";
import {Link,Route,Routes,Switch} from "react-router-dom";
import './App.css';
import  Home  from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Contact from "./Contact";
import NotFound from "./NotFound";
import './index.css'
// import   {BrowserRouter} from "react-router-dom";


function App() {
  return(
    <>
  
   

   <Routes>
 

  <Route path="/" element={<NavBar />} >

    <Route index element={<Home />} />
    <Route path="About" element={<About />} />
    <Route path="Contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} /> 

</Route>
  

  

</Routes>
 

  </>

  );
}

export default App;
