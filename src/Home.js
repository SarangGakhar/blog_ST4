import React from "react"
import { Col } from "react-bootstrap";
//import {Link} from "react-router-dom"
//import { useParams } from "react-router-dom"
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
//import Nav from "./NavBar";
//import Footer from "./Footer.js";
import BlogCard from './BlogCard.js'
import Films from "./Films"; 
 export default function Home(){


  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)

  
    

  React.useEffect(function() {
    console.log("Effect ran")
    let str="https://swapi.py4e.com/api/people/";
    let rv=`${count}`;
    fetch(str+ rv)
        .then(res => res.json())
        .then(data => setStarWarsData(data))

    
}, [count])








let arr=starWarsData.films.map(val=>
(
    <Films
   links={val}
  //  num={count}

    />

  )
)



  


    
    return (
        <>


     <div className="total_cards">

    <div className="bi">
    <BlogCard
        {...starWarsData}

    />
 
    </div>

    <div class="title" > FILMS</div>
    {/* <img src="film.png" alt="" class="starwars_image hc"></img> */}


   <div>
    {arr}
    </div> 


  
    <div class="next_prev">

    <div class="prev bn" >
    <button onClick={() => {return count>1 && setCount(prevCount => prevCount -1)}} >Prev</button>

    </div>

    <div class="next bn">

     <button onClick={() => setCount(prevCount => prevCount + 1)}  >Next</button>

    </div>

            
   
     </div>

    </div>

    

    


    



    



         
        
       

        </>
    );

}

