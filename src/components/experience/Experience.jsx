import React from 'react';
import './experience.css';
import {HiOutlineBadgeCheck} from 'react-icons/hi';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <HiOutlineBadgeCheck  className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineBadgeCheck  className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineBadgeCheck  className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineBadgeCheck  className='experience__details-icon' />
              <div>
              <h4>jQuery</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineBadgeCheck  className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineBadgeCheck  className='experience__details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <HiOutlineBadgeCheck  className='experience__details-icon' />
              <div>
              <h4>Node.js</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineBadgeCheck  className='experience__details-icon' />
              <div>
              <h4>C#</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineBadgeCheck  className='experience__details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineBadgeCheck  className='experience__details-icon' />
              <div>
              <h4>Ruby</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineBadgeCheck  className='experience__details-icon' />
              <div>
              <h4>FireStone</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineBadgeCheck  className='experience__details-icon' />
              <div>
              <h4>Git</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience
