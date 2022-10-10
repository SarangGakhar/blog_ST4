import React from "react";
import {Link,Route,Routes,Switch} from "react-router-dom";
import './App.css';
import  Home  from "./Home";
import BookList from "./BookList";
import NavBar from "./NavBar";
import Login from "./Login";
import NotFound from "./NotFound";
// import   {BrowserRouter} from "react-router-dom";


function App() {
  return(
    <>
  
   

   <Routes>
 

  <Route path="/" element={<NavBar />} >

    <Route index element={<Home />} />
    <Route path="/BookList" element={<BookList />} />
    <Route path="/Login" element={<Login />} />
    <Route path="*" element={<NotFound />} /> 

</Route>
  

  

</Routes>
 

  </>

  );
}

export default App;
