import "./index.css";
import React, { useEffect, useState } from "react";

// Images
import ScrollDownArrow from "../../molecules/scroll-down-arrow";

// Helpers
import { getWindowDimensions } from "../../../helpers";

const MainContainer = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  // const vh = window.innerHeight * 0.01;
  // // Then we set the value in the --vh custom property to the root of the document
  // document.documentElement.style.setProperty("--vh", `${vh}px`);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (window.innerWidth <= 768) {
    window.addEventListener("scroll", () => {
      const mainContainer = document.getElementsByClassName("header-container");

      if (window.pageYOffset > 0) {
        mainContainer[0].classList.add("navbar-sticky-margin");
      } else {
        mainContainer[0].classList.remove("navbar-sticky-margin");
      }
    });
  }

  return (
    <div id="#" className='header-container' >
      <div className='container-background background-container-animation'>
        <div id="overlay">
          <div className='main-container main-container-animation' >
            <h1 id='main-title'>GORILLA GYM</h1>
            <h1 id="title-city">By Matko Setnik</h1>

            <div className="scroll-down-arrow">
              <ScrollDownArrow />

            </div>

          </div>

        </div>
      </div>
    </div>

  );
};

export default MainContainer;
