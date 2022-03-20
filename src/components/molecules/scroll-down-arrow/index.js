import "./index.css";
import React from "react";

const ScrollDownArrow = () => {
  return (
    <div className="arrows-div">
      <svg className="arrows" viewBox="0 0 60 80" width="70" height="70" >
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>

  );
};

export default ScrollDownArrow;
