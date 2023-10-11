import React from 'react'
import Banner from '../../../Images/landing-banner.jpg'
import '../../../Styles/Style.css'
import '../../../Styles/Responsive.css'
 


function Slider() {
   
  return (
    <div>
       <div className="container-fluid  px-0   main-arrow ">
               <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner autoplay">
    <div className="carousel-item active">
    <a href="/"><img width="100%" src={Banner} alt=""/></a>
    </div>
    <div className="carousel-item">
    <a href="/"><img width="100%" src={Banner} alt=""/></a>
    </div>
    <div className="carousel-item">
    <a href="/"><img width="100%" src={Banner} alt=""/></a>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

 

    </div>
  )
}

export default Slider
