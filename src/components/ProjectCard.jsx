import React from 'react'
import ButtonArrowRight from './buttons/ButtonArrowRight'
import AnimateOnScroll from './AnimateOnScroll'

const ProjectCard = ({ title, description, siteLink, githubLink, toolIcon1, toolIcon2, toolIcon3, toolIcon4, tags, img, title1, title2, title3, title4}) => {
	const tagItem = tags.map(item => <div className='card--tag' key={item}>{item}</div>)
	
  return (
	<AnimateOnScroll className={'animate--scroll'}>
	<div className="card--container">
		<div className='card--img-column'>
			<img src={img} alt="visual (screenshot) of the project" className='card--img'/>
			
			<div className='card--tag-container'>
				{tagItem}
			</div>
			
		</div>
		
		<div className='card--text-column'>
			<h4 className='card--text-header'>{title}</h4>
				<div className='card--text-icons'>
					{/* {toolIcon} */}
					<img src={toolIcon1} className="card--icon" title={title1}/>
					<img src={toolIcon2} className="card--icon" title={title2}/>
					<img src={toolIcon3} className="card--icon" title={title3}/>
					<img src={toolIcon4} className="card--icon" title={title4}/>
				</div>
		<div className='card--text-container'>
		<p className='card--description'>{description}</p>
		</div>
		<div className='card--buttons'>
		
		{githubLink && <ButtonArrowRight
			
			link={githubLink}
			value={"learn more"} 
			classNameBtn={'button button--light'}
			
		/>}
		
		{siteLink && <ButtonArrowRight 
			
			link={siteLink}
			value={"view site"} 
			classNameBtn={'button button--dark'}
			
			 />}
		
		</div>
	</div>
	</div>
	</AnimateOnScroll>
  )
}

export default ProjectCard