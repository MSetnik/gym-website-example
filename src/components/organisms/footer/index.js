import React from "react";
import "./index.css";

import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="https://www.facebook.com/fortisgymvalpovo/?ref=page_internal">
              <RiFacebookFill color="white" />
            </a>

            <a href="https://www.instagram.com/fortis_gym_valpovo_/?hl=en">
              <AiOutlineInstagram color="white" />
            </a>

          </div>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#about">O nama</a></li>
            <li className="list-inline-item"><a href="#price-list">Cjenik</a></li>
            <li className="list-inline-item"><a href="#bmi-calculator">BMI Kalkulator</a></li>
            <li className="list-inline-item"><a href="#contact">Kontakt</a></li>
            {/* <li className="list-inline-item"><a href="https://www.privacypolicygenerator.info/live.php?token=NVADWd5RB6SoG3i7KHKU9aEB7dWkvsQB">Pravila privatnosti</a></li> */}
          </ul>
          <p className="copyright">gorilla gym valpovo © 2022</p>
        </footer>
      </div>
    </div>

  );
};

export default Footer;
