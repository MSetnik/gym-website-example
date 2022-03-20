import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

// pages
import Navbar from "./components/organisms/navbar";
import MainContainer from "./components/organisms/main-container";
import About from "./components/organisms/about";
import Gallery from "./components/organisms/gallery";
import PriceList from "./components/organisms/price-list";
import BmiCalculator from "./components/organisms/bmi-calculator";
import Contact from "./components/organisms/contact";
import Footer from "./components/organisms/footer";
import DeveloperInfo from "./components/molecules/developer-info";

function App () {
  return (
    <div className='content'>

      <Navbar link1={"O nama"} link2={"Cjenik"} link3={"BMI kalkulator"} link4={"Kontakt"} link5={"radno vrijeme"}/>

      <MainContainer />

      <About />

      <Gallery />

      <PriceList />

      <BmiCalculator />

      <Contact />

      <Footer />

      <DeveloperInfo />

    </div>
  );
}

export default App;
