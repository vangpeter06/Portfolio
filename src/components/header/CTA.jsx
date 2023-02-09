import React from 'react'
import Resume from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download>Download Resume</a>
      <a href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA