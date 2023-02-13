import React from 'react';
import './portfolio.css';
import Image1 from '../../assets/portfolio1.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img src={Image1} alt="" />
          </div>
          <h3>This is my portfolio item name</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img src={Image1} alt="" />
          </div>
          <h3>This is my portfolio item name</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img src={Image1} alt="" />
          </div>
          <h3>This is my portfolio item name</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img src={Image1} alt="" />
          </div>
          <h3>This is my portfolio item name</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img src={Image1} alt="" />
          </div>
          <h3>This is my portfolio item name</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img src={Image1} alt="" />
          </div>
          <h3>This is my portfolio item name</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio