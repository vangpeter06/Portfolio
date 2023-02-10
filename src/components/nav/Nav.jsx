import React from 'react';
import './nav.css';
import {BiHomeAlt} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineBook} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageRoundedDetail} from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#services" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRoundedDetail /></a>
    </nav>
  )
}

export default Nav
