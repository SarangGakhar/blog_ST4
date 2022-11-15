import React from 'react'


export default function Films(props) {


    const[flm,setflm]=React.useState({})

    React.useEffect(function() {
        console.log("Effect ran")
       
        fetch(props.links)
            .then(res => res.json())
            .then(data => setflm(data))
    }, [props.links])

   
  return (


    <div class=" home_card">

        

        {/* <img src="film.png" alt="" class="starwars_image hc"></img>
       */}
        
        <img src="film.png" alt="" class="starwars_image hc"></img>
      <div className="title hc">

        <p style={{"font-family": " 'Rubik Dirt', cursive "}}></p>{flm.title}
      </div>

      <div class="episode_id hc" >

        
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>EPISODE ID</p>{flm.episode_id}</div>
      <div class="opening_crawl hc">
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>OPENING CRAWL</p>{flm.opening_crawl}</div>
      <div class="director hc">
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>DIRECTOR</p>{flm.director}</div>
      <div class="producer hc">
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>PRODUCER</p>{flm.producer}</div>
      <div class="release_date hc">
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>RELEASE DATE</p>{flm.release_date}</div>
      
      {/* <div class="birth_year hc">
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>BIRTH YEAR</p>{props.birth_year}</div>
      <div class="gender hc">
        <p style={{"font-family": " 'Rubik Dirt', cursive "}}>GENDER</p>{props.gender}</div>

    */}

    </div>
      



  )
}
