import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>vang_peter06@yahoo.com</h5>
            <a href="mailto:vang_peter06@yahoo.com" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of contact option */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact