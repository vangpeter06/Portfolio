import React from "react";
import "./about.css";
import ME from '../../assets/me-about.jpg';
import {BsAward} from 'react-icons/bs';
import {AiFillFolderOpen} from 'react-icons/ai';


const About = () => {
  return (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me image">
          {/* change img later */}
          <img src={ME} alt="About image" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <BsAward className="about__icon" />
            <h5>Experience</h5>
            <small>Experience worker</small>
          </article>
          <article className="about__card">
            <AiFillFolderOpen className="about__icon" />
            <h5>Projects</h5>
            <small>60+ projects</small>
          </article>
        </div>
        <p>
          I am a experience software developer willing to leaverage everything I learn to problem solving and being creative. Also a well round in learning and be part of the team.
        </p>
        <a href="#contact" className="btn btn-primary">Let's talk</a>
      </div>
    </div>
  </section>
  )
};

export default About;
