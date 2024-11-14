import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonArrowRight from './buttons/ButtonArrowRight'
import ScrollDownIcon from './ScrollDownIcon';

export const Hero = () => {
	const navigate = useNavigate();
	useEffect(()=>{
		window.scrollTo(0,0);
	  },[])
  return (
	<div id='hero' className='hero'>
		<div className='hero--container'>
			<h3 className='hero--name'>Hi, I'm Pia Smith-Richling</h3>
			<h1 className='hero--header'>FRONT-END</h1>
			<h1 className='hero--header bottom'>DEVELOPER</h1>
			<h4 className='hero--tagline'>I build reliable and engaging digital experiences </h4>
			<ButtonArrowRight 
				onClick={()=> navigate("about")} 
				value={"learn more"} 
				classNameBtn={'button button--light'}
				/>
			<ScrollDownIcon className={"scroll-down-icon scroll-hero"} />
		</div>
	</div>
  )
}
