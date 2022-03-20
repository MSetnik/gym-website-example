import "./index.css";
import React, { useEffect, useRef, useState } from "react";

import logo from "../../../assets/logo.png";

import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = ({
  link1,
  link2,
  link3,
  link4,
  link5,
  backgroundColor
}) => {
  const navbar = document.getElementsByClassName("navbar-div");
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setWindowInnerWidth(window.innerWidth)
  })

  window.addEventListener("scroll", () => {
    if (window.innerWidth > 768) {
      if (window.pageYOffset >= 100) {
        navbar[0].classList.add("sticky");
      } else {
        navbar[0].classList.remove("sticky");
      }
    } else {
      if (window.pageYOffset > 0) {
        navbar[0].classList.add("sticky");
      } else {
        navbar[0].classList.remove("sticky");
      }
    }
  });

  useEffect(() => {
    window.setTimeout(function () {
      const e = document.getElementsByClassName("link-border-top");
      const eClasses = [...e];

      eClasses.forEach(element => {
        element.style.visibility = "visible";
      });
    }, 200);

    // for nav on click element
    const borderActive = document.querySelectorAll(".link-border-top");
    const link = document.querySelectorAll(".link");

    link.forEach(v => {
      v.addEventListener("click", () => {
        borderActive.forEach(j => j.classList.remove("link-selected"));
        const border = v.querySelector(".link-border-top");
        if(border !== null) {
          border.classList.add("link-selected");
          
        }

        if(windowInnerWidth <= 768) {
          closeNavMenu()

        }

      });
    });

    // for window scrolldown event
    const mainSection = document.querySelectorAll(".scroll-content");

    window.onscroll = () => {
      mainSection.forEach((v, i) => {
        const rect = v.getBoundingClientRect().y;
        if (rect < (window.innerHeight - 200)) {
          borderActive.forEach(v => v.classList.remove("link-selected"));
          borderActive[i].classList.add("link-selected");
        }

        if (window.pageYOffset <= 200) {
          borderActive.forEach(v => v.classList.remove("link-selected"));
        }

        if (window.pageYOffset >= 1600 && window.pageYOffset <= 2400) {
          borderActive.forEach(v => v.classList.remove("link-selected"));
        }

        if (window.pageYOffset >= document.body.scrollHeight - (window.innerHeight / 2) - 600) {
          // const workingHours = document.querySelector("#nav-link-working-hours");
          borderActive.forEach(v => v.classList.remove("link-selected"));
          borderActive[mainSection.length].classList.add("link-selected");
        }
      });
    };
  }, []);


  const openNavMenu = async () => {
    const navMenu= document.querySelector('.navbar-menu')
    const navMenuLinks = document.querySelector('.navbar-menu-content')
    navMenu.classList.remove('navbar-menu-hidden')
    navMenu.classList.add('navbar-menu-visible')

    const timer = ms => new Promise(res => setTimeout(res, ms))

    for(let i = 0; i < navMenuLinks.children.length; i++ ) {
      navMenuLinks.children[i].children[0].classList.add('link-nav-menu-visible')
      await timer(200)
    }
 
  }

  const closeNavMenu = () => {
    const navMenu = document.querySelector('.navbar-menu')
    navMenu.classList.remove('navbar-menu-visible')
    navMenu.classList.add('navbar-menu-hidden')
    const navMenuLinks = document.querySelector('.navbar-menu-content')

    for(let i = 0; i < navMenuLinks.children.length; i++ ) {
      navMenuLinks.children[i].children[0].classList.remove('link-nav-menu-visible')
    }

  }


  return (
    <div className='navbar-div'>
      {
       windowInnerWidth <= 768 &&
        <div className="navbar-menu navbar-menu-hidden">
          <div className="navbar-menu-close">
              <MdOutlineClose className="navbar-menu-btn-close" size={30} onClick={() => closeNavMenu()}/>
          </div>

          <div className="navbar-menu-content">
            <div className="link link-nav-menu">
              <a href="#about">
                {link1}
              </a>
            </div>
              
            <div className="link link-nav-menu">
              
              <a href="#price-list">
                {link2}
              </a>
            </div>
            
            <div className="link link-nav-menu">
              <a href="#bmi-calculator">
                {link3}
              </a>
            </div>

            <div className="link link-nav-menu">
              <a href="#contact">
                {link4}
              </a>
            </div>

            <div className='link link-nav-menu'>
              <a href="#working-hours">
                {link5}
              </a>
            </div>
          </div>
        </div>
      }
      
      
      <div className="navbar container" id='navbar-container'>
        <div id='logo-container'>
          <a className="logo-container-link" href='#'>
            <img className="logo" src={logo} alt=""/>
          </a>
        </div>

        <div id="links-container">
          <div className='link'>
            <div className="link-border-top" />
            <a href="#about">
              {link1}
            </a>
          </div>

          <div className='link'>
            <div className="link-border-top" />

            <a href="#price-list">
              {link2}
            </a>
          </div>

          <div className='link'>
            <div className="link-border-top" />

            <a href="#bmi-calculator">
              {link3}
            </a>
          </div>
          <div className='link'>
            <div className="link-border-top" />
            <a href="#contact">
              {link4}
            </a>
          </div>

          <div className='link'>
            <div id='nav-link-working-hours' className="link-border-top" />
            <a href="#working-hours">
              {link5}
            </a>
          </div>
        </div>

        {
          windowInnerWidth <= 768 &&
          <div className="nav-menu-hamburger" >
            <FiMenu className="navbar-menu-btn-close" size={24} color='#4176c5' onClick={() => openNavMenu()}/>
          </div>
        }

      </div>


        

    </div>

  );
};

export default Navbar;
