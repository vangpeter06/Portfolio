import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FiGithub} from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="__blank"><BsLinkedin /></a>
      <a href="https://github.com" target="__blank"><FiGithub /></a>
    </div>
  )
}

export default HeaderSocials
