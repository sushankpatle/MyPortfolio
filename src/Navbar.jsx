import React, { useState } from 'react';
import './main.css';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='navbar'>
        <div className="left">
          <h2 className='title'>Portfolio</h2>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className={`right ${isMenuOpen ? 'active' : ''}`}>
          <ScrollLink
            to="mainy"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className='button'
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="aboutMey"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className='button'
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className='button'
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="project"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className='button'
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className='button'
          >
            Contact Me
          </ScrollLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;