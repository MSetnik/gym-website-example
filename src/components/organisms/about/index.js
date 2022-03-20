import "./index.css";
import React, { useEffect, useRef } from "react";

import img from "../../../assets/logo.png";
import { isInViewport } from "../../../helpers";


const About = () => {

  document.addEventListener('scroll', () => {
    const about = document.querySelector('.about-container')


    if(isInViewport(about)) {
      about.classList.add('slide-in-left-anim')
    }
  })
 
  return (
    <div id='about' className='container about-container scroll-content'>
        <div className='about-title-div'>
          <h1>TKO SMO MI?</h1>
          {/* <h5>NAJBOLJA TERETANA U VALPOVŠTINI</h5> */}
        </div>

        <div className='row about-content'>
          <div className='col col-8 about-content-text-div'>
            <p>Gorilla gym osnovan je 2022. godine.
                Brojimo oko 200 članova,od kojih je 150-tinjak redovno aktivnih.
                Centar je opremljen novim i modernim spravama te dvoranom za squash.
                Uz učestalo nadopunjavanje sadržaja, pokušavamo našim članovima omogućiti najkvalitetnije vježbanje. Usmjereni smo na rekreaciju.
                Naše educirano stručno osoblje je tu kako bi vas što prije doveli u formu te se brinuli o vašoj sigurnosti, ili vas jednostavno uputili u ispravno izvođenje vježbi.
                Također organiziramo Valpovačku ligu Squasha u koju su svi dobrodošli.
            </p>
          </div>
          <div className='col col-4 about-content-img-div'>
            <img src={img} alt="" />
          </div>
        </div>
    </div>
  );
};

export default About;
