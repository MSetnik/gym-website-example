import React, { useEffect, useState } from "react";
import "./index.css";

// MUI
import Slider from "@mui/material/Slider";
import BmiTable from "../../molecules/bmi-table";
import { isInViewport } from "../../../helpers";

const BmiCalculator = () => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [bmi, setBmi] = useState("");
  const [bmiColor, setBmiColor] = useState("#388e3c");

  useEffect(() => {
    calculateBmi(height, weight);
  });

  document.addEventListener('scroll', () => {
    const bmiContent = document.querySelector('.bmi-container')
    const bmiContainer = document.querySelector('.bmi')
    
    if(isInViewport(bmiContainer)) {
      bmiContent.classList.add('slide-in-right-anim')

    }
  })


  const calculateBmi = (height, weight) => {
    const heightInMeters = height / 100;
    const bmiResult = weight / (heightInMeters * heightInMeters);

    setBmi(bmiResult.toFixed(2));
  };

  const bmiColorSetter = (bmi) => {
    let color = "#ffa726";

    if (bmi < 16) {
      color = "#f44336";
    }
    if (bmi > 16 && bmi < 17) {
      color = "#f57c00";
    }
    if (bmi > 17 && bmi >= 18.5) {
      color = "#ffa726";
    }
    if (bmi >= 18.5 && bmi <= 25) {
      color = "#388e3c";
    }
    if (bmi > 25 && bmi < 30) {
      color = "#ffb74d";
    }
    if (bmi > 30 && bmi < 35) {
      color = "#ffa726";
    }
    if (bmi > 35 && bmi < 40) {
      color = "#f57c00";
    }

    if (bmi > 40) {
      color = "#d32f2f";
    }

    setBmiColor(color);
  };

  return (
    <div id='bmi-calculator' className='bmi scroll-content'>
      <div className='container bmi-container'>
        <div className="bmi-container-header">
          <h1>BMI Kalkulator</h1>
        </div>

        <div className='bmi-content-body'>

          <div className="row bmi-rows-container">
            <p>BMI - Indeks tjelesne mase (engl. Body Mass Index) je jedan od načina procjene uhranjenosti. Od svih poznatih indeksa, indeks tjelesne mase je najuže povezan s količinom prekomjernog masnog tkiva u ljudskom tijelu, a uz to ga je relativno jednostavno izračunati ili očitati iz tablica.
Izračun BMI se temelji na odnosu tjelesne težine i kvadrata visine osobe.</p>
            <div className='col col-4 bmi-container-body'>
              <div className='bmi-container-sliders'>
                <div className='height-slider'>
                  <div className='height-div'>
                    <p>Odaberite vašu visinu</p>
                    <p>{height} cm</p>

                    <Slider
                      className='slider'
                      aria-label="Height"
                      value={height}
                      orientation="vertical"
                      step={1}
                      onChange={(e) => {
                        setHeight(e.target.value);
                        bmiColorSetter(bmi);
                      }}
                      min={150}
                      max={220}
                      sx={{
                        width: 100,
                        color: "#4176c5",
                        "& .MuiSlider-thumb": {
                          backgroundColor: "white"
                        }
                      }}
                    />
                  </div>

                </div>

                <div className='height-slider'>
                  <div className='height-div'>
                    <p>Odaberite vašu težinu</p>
                    <p>{weight} kg</p>

                    <div className='slider-value-div'>
                      <Slider
                        className='slider'
                        aria-label="Weight"
                        value={weight}
                        // getAriaValueText={weight}
                        onChange={(e) => {
                          setWeight(e.target.value);
                          bmiColorSetter(bmi);
                        }}
                        valueLabelDisplay="auto"
                        orientation="vertical"
                        step={1}
                        min={30}
                        max={160}
                        sx={{
                          width: 100,
                          color: "#4176c5",
                          "& .MuiSlider-thumb": {
                            backgroundColor: "white",
                            pointerEvents: "none"
                          },
                          ".MuiSlider-thumb": {
                            pointerEvents: "none"

                          }

                        }}

                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className='col col-4 result-div'>
              <h3>Vaš BMI</h3>
              <h1 style={{
                color: bmiColor
              }}>{bmi}</h1>
            </div>

            <div className="col col-4 table-col">
              <BmiTable />

            </div>

          </div>
        </div>
      </div>

    </div>

  );
};

export default BmiCalculator;
