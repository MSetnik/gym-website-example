import "./index.css";
import React from "react";

const Membership = ({
  name,
  description = [],
  price = ""
}) => {
  return (
    <div className='card-container'>
      <div className='card-header-div'>
        <div className='card-price-div'>
          {
            price !== "" ? (<h3>{price} kn</h3>) : null
          }

        </div>

        <div className='membership-desc'>
          {description.map((el, i) => {
            return (
              <p key={i}>- {el}</p>
            );
          })}
        </div>

      </div>

      <div className='card-body-div'>
        <h1>{name}</h1>
      </div>

    </div>
  );
};

export default Membership;
