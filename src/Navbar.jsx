import React, { useState, useEffect, useRef } from "react";
import "./main.css";
import MyLogo from "./images/111.png";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar" ref={menuRef}>
      <div className="left">
        <img src={MyLogo} alt="Logo" className="title" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`right ${isMenuOpen ? "active" : ""}`}>
        <ScrollLink
          to="mainy"
          spy={true}
          smooth={true}
          offset={-140}
          duration={600}
          className="button"
          onClick={closeMenu}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="aboutMey"
          spy={true}
          smooth={true}
          offset={-140}
          duration={600}
          className="button"
          onClick={closeMenu}
        >
          About Me
        </ScrollLink>
        <ScrollLink
          to="skills"
          spy={true}
          smooth={true}
          offset={-140}
          duration={600}
          className="button"
          onClick={closeMenu}
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="project"
          spy={true}
          smooth={true}
          offset={-140}
          duration={600}
          className="button"
          onClick={closeMenu}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-140}
          duration={600}
          className="button"
          onClick={closeMenu}
        >
          Contact Me
        </ScrollLink>
      </div>
    </div>
  );
};

export default Navbar;
