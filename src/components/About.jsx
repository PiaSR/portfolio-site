import React, { useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import logoFigma from '/src/assets/svg_color/logoFigma.svg'
import logoAdobeIllustrator from "/src/assets/svg_color/logoAdobeIllustrator.svg"
import logoGit from "/src/assets/svg_color/logoGit.svg"
import logoHTML from "/src/assets/svg_color/logoHTML.svg"
import logoJS from "/src/assets/svg_color/logoJS.svg"
import logoCSS3 from "/src/assets/svg_color/logoCSS3.svg"
import logoTailwind from "/src/assets/svg_color/logoTailwind.svg"
import logoReact from "/src/assets/svg_color/logoReact.svg"


import ButtonArrowRight from './buttons/ButtonArrowRight'
import ToolIcon from './ToolIcon'
import ProjectsCollection from './ProjectsCollection'
import AnimateOnScroll from './AnimateOnScroll'

import ScrollDownIcon from './ScrollDownIcon'


const About = ({isLargeScreen}) => {
  const navigate = useNavigate();
  useEffect(()=>{
		window.scrollTo(0,0);
	  },[])

  return (
	<div id="about" className='about'>
    <div className='about--container'>
      <div className='about--hero'>
    <h3>Are we a match?</h3>
    <h1 className='about--header'>ABOUT</h1>
    <h4 className='about--tagline'>The person behind the screen</h4>
    <ButtonArrowRight 
      
      value={"contact"}
      classNameBtn={"button button--light"}
      
      onClick={()=> navigate("/contact")}
      />

    
    <ScrollDownIcon className={"scroll-down-icon scroll-about"} />

      </div>
    <div className='about--description'>
      
      <AnimateOnScroll>
      <h2 className='about--description-header'>The Person</h2>
        <p className='about--description-text'>I'm a front-end developer with a passion for creating interactive, intuitive, and visually appealing user experiences. Skilled in HTML, CSS, JavaScript, and React, I enjoy blending design and functionality to build beautiful and responsive websites. Driven by curiosity and a love for learning, I’m constantly exploring new tools and techniques to enhance my work. Outside of coding, I love food and learning new cooking skills - whether it's getting creative in the kitchen, or testing as many new restaurants as I can get to!
       </p>
        </AnimateOnScroll>
        <AnimateOnScroll>
      <h2 className='about--description-header process'>The Process</h2>
        <p className='about--description-text'>My approach to development is about balancing creativity with clean code and functionality. Each project starts with a design focus—defining the user experience, experimenting with layouts in Figma, and making sure the look and feel align with the goal. From there, I dive into the technical side, leveraging tools like React, CSS, and JavaScript to bring the project to life. I value efficiency and organization, and I’m always seeking out new methods to refine my skills and processes, ensuring every project is an improvement on the last.</p>
        </AnimateOnScroll>
     
        <AnimateOnScroll>
        <h2 className='about--description-header'>The Tools</h2>
        <div className='about--tools'>
          <ToolIcon
            logo={logoFigma}
            name={"Figma"}
          />
          <ToolIcon
            logo={logoAdobeIllustrator}
            name={"Adobe Illustrator"}
          />
          <ToolIcon
            logo={logoGit}
            name={"Git"}
          />
          <ToolIcon
            logo={logoHTML}
            name={"HTML5"}
          />
          <ToolIcon
            logo={logoJS}
            name={"Javascript"}
          />
          <ToolIcon
            logo={logoCSS3}
            name={"CSS3"}
          />
          <ToolIcon
            logo={logoTailwind}
            name={"Tailwind CSS"}
          />
          <ToolIcon
            logo={logoReact}
            name={"React JS"}
          />
        </div>
        </AnimateOnScroll>
      </div>

      <div className='about--projects'>
        <AnimateOnScroll>
        <h4 className='about--projects-header'>Interested in seeing everything in action? <br></br>
Check out some projects...</h4>
</AnimateOnScroll>
      <ProjectsCollection 
      className={isLargeScreen ? "projects--card-collection-row" : "projects--card-collection-column"}
      // isLargeScreen={isLargeScreen}
      />
      </div>
    </div>
  </div >
  )
}

export default About