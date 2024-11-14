import React from 'react'
import logoMonoLinkedin from "/src/assets/svg_mono/logoMonoLinkedin.svg"
import logoMonoGithub from "/src/assets/svg_mono/logoMonoGithub.svg"



const SocialsLinks = () => {
  return (
	<div className='socials-links'>
    <a href="https://linkedin.com/in/pia-smith-richling" target="_blank" >
	<img src={logoMonoLinkedin} alt="linkedin logo profile link" className='socials-icon'/>
      </a>
      <a href="https://github.com/PiaSR" target="_blank">
	  
	  <img src={logoMonoGithub} alt="github logo profile link" className='socials-icon'/>
      </a>
      </div>
  )
}

export default SocialsLinks