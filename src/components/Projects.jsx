import React, {useEffect} from 'react'
import ProjectsCollection from './ProjectsCollection'


const Projects = () => {
	useEffect(()=>{
		window.scrollTo(0,0);
	  },[])
  return (
	<div id='#projects' className='projects'>
		<div className='projects--container'>
		<h2 className='projects--header'>Projects</h2>
		<ProjectsCollection className={"projects--card-collection-column"}
          
          />
		</div>
	</div>
  )
}

export default Projects