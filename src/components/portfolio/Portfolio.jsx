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
         <div className="portfolio__item-cta">
         <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img src={Image1} alt="" />
          </div>
          <h3>This is my portfolio item name</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img src={Image1} alt="" />
          </div>
          <h3>This is my portfolio item name</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img src={Image1} alt="" />
          </div>
          <h3>This is my portfolio item name</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img src={Image1} alt="" />
          </div>
          <h3>This is my portfolio item name</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img src={Image1} alt="" />
          </div>
          <h3>This is my portfolio item name</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio


// another way of how to write codes to be neat
// const = [
//   {
//     id: 1,
//     image: Image1,
//     title: 'title of the project',
//     github: 'https://github.com',
//     demo: 'web to demo of the application'
//   }
// ]

// data.map(({id,, image, title, github, demo}) => {
//   return (
//     <article key={id} className='portfolio__item'>
//       <div className='portfolio__item-image'>
//         <img src={image} alt={title} />
//       </div>
//       <h3>{title}</h3>
//       <div className='portfolio__item-cta'>
//         <a href={github} className='btn' target='_blank'>Github</a>
//         <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
//       </div>
//     </article>
//   )
// })