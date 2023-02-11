import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FiGithub} from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/peter-vang-portland/" target="__blank"><BsLinkedin /></a>
      <a href="https://github.com/vangpeter06" target="__blank"><FiGithub /></a>
    </div>
  )
}

export default HeaderSocials
