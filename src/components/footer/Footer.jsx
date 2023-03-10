import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FiGithub} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Peter Vang</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/peter-vang-portland/" target="__blank"><BsLinkedin /></a>
      <a href="https://github.com/vangpeter06" target="__blank"><FiGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Peter Vang. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer