import React from "react";
import ContactInfo from "../../molecules/contact-info";
import ContactForm from "../contact-form";
import "./index.css";

import {isInViewport} from '../../../helpers'

const Contact = () => {
  document.addEventListener('scroll', () => {
    const contact = document.querySelector('.contact-container')


    if(isInViewport(contact)) {
      contact.classList.add('slide-in-left-anim')
    }
  })

  return (
    <div id="contact" className="contact-container scroll-content">
      <div className="container">
        <div className='contact-title-div'>
          <h1>KONTAKTIRAJTE NAS</h1>
        </div>

        <div className="row contact-container-row">
          <div className="col-12 col-sm-12 col-md-6 contact-form-col">
            <ContactForm />
          </div>

          <div className="col-12 col-sm-12 col-md-6 contact-info-col">
            <div className="contact-info-div">
              <ContactInfo />

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;
