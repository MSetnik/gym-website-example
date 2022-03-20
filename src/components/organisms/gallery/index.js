import "./index.css";
import React from "react";

import { img0, img1, img2, img3, img4, img5 } from "../../../assets/gallery";
import { isInViewport } from "../../../helpers";

const Gallery = () => {

  document.addEventListener('scroll', () => {
    const gallery = document.querySelector('.gallery-content')
    const galleryContainer = document.querySelector('.gallery-container')

    if(isInViewport(galleryContainer)) {
      gallery.classList.add('slide-in-right-anim')

    }
  })
 
  return (
    <div className="gallery-container">
      <div className='gallery-content'>
        <div className='gallery-title'>
          <h1>GALERIJA</h1>
        </div>
        <div className='container'>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner" data-bs-interval="3000">
              <div className="carousel-item active" data-bs-interval="3000">
                <img src={img0} className="d-block h-100" alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={img1} className="d-block h-100" alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={img2} className="d-block h-100 " alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={img3} className="d-block h-100 " alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={img4} className="d-block h-100 " alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={img5} className="d-block h-100 " alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>

        </div>

      </div>
    </div>

  );
};

export default Gallery;
