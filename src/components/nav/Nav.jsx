import React from 'react';
import './nav.css';
import {BiHomeAlt} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineBook} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageRoundedDetail} from 'react-icons/bi';

const Nav = () => {
  return (
    <div>
      <a href="#"><BiHomeAlt /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><AiOutlineBook /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><BiMessageRoundedDetail /></a>

    </div>
  )
}

export default Nav
