import Membership from "../../molecules/membership";
import "./index.css";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { isInViewport } from "../../../helpers";

const PriceList = () => {
  const [showMore, setShowMore] = useState(false);

  document.addEventListener('scroll', () => {
    const priceListContainer = document.querySelector('.price-list-container')
    const priceList = document.querySelector('.price-list')


    if(isInViewport(priceList)) {
      priceListContainer.classList.add('slide-in-left-anim')

    }
  })

  return (
    <div id="price-list" className={"scroll-content price-list "}>
      <div className={"container price-list-container"}
      >
        <div className='price-list-title-div'>
          <h1>CJENIK ČLANARINE</h1>
        </div>

        <div className={"row row-cols-auto row-price-list gx-5 "}>
          <div className='col col-price-list'>
            <Membership name={"polumjesečna"} description={["3x tjedno"]} price={75} />
          </div>

          <div className='col col-price-list'>
            <Membership name={"mjesečna"} description={["Neograničen pristup teretani"]} price={150} />
          </div>

          <div className='col col-price-list'>
            <Membership name={"Bazen"} description={["1 sat"]} price={100} />
          </div>

          <div className='col col-price-list'>
            <Membership name={"premium"} description={["Neograničen pristup teretani", "1 besplatan dolazak na Bazen tjedno (potrebna najava)"]} price={225} />
          </div>

          <div className='col col-price-list'
            style={{ display: showMore ? "flex" : "none" }}
          >

            <Membership name={"godišnja"} description={["Neograničen pristup teretani"]} price={1400} />
          </div>

          <div className='col col-price-list'
            style={{ display: showMore ? "flex" : "none" }}
          >
            <Membership name={"dnevna"} description={["1 trening"]} price={25} />
          </div>

          {
            showMore &&
              <div className='col col-price-list'>
                <Membership name={"Najam trenera"} description={["30 min (50kn)", "60min (75kn)", "90 min (100kn)"]} />
              </div>
          }

        </div>

        <div className="container show-more-btn-div">
          <Button variant="outlined"
            className="show-more-btn"
            onClick={() => setShowMore(!showMore)}>{showMore ? "Prikaži manje" : "Prikaži više" }</Button>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
