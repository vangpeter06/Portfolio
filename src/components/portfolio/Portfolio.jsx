import React from 'react';
import './portfolio.css';
import Image1 from '../../assets/portfolio1.jpg';
import Capstone from '../../assets/capstone.png';
import Wrench from '../../assets/wrenchknight.png';
import Arkham from '../../assets/Arkham.png';
import Program from '../../assets/Program.png';
import Student from '../../assets/student_logs.PNG';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img className='portfolio__image' src={Capstone} alt="" />
          </div>
          <h3>Capstone Project Note Taking</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/vangpeter06/Capstone-proposal-" className='btn' target='_blank'>Github</a>
          {/* <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a> */}
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img className='portfolio__image' src={Wrench} alt="" />
          </div>
          <h3>Wrench Knight</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/vangpeter06/Wrench-Knight" className='btn' target='_blank'>Github</a>
          {/* <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a> */}
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img className='portfolio__image' src={Arkham} alt="" />
          </div>
          <h3>Arkham Horror</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/vangpeter06/Arkham-Horror" className='btn' target='_blank'>Github</a>
          <a href="https://lcmpbll.github.io/Arkham-Horror/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img className='portfolio__image' src={Program} alt="" />
          </div>
          <h3>Programming Language Suggester</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com" className='btn' target='_blank'>Github</a>
          {/* <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a> */}
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img className='portfolio__image' src={Student} alt="" />
          </div>
          <h3>Student Info</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/vangpeter06/Student_Info-" className='btn' target='_blank'>Github</a>
          {/* <a href="https://.com" className='btn btn-primary' target='_blank'>Live Demo</a> */}
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* portfolio image goes here */}
            <img className='portfolio__image' src={Image1} alt="" />
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