import React, {useState, useRef} from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import Logo from '../Logo'
import {useClickAway} from 'react-use';


const NavbarMobile = ({style}) => {
	const [isOpen, setIsOpen] =useState(false);
	const ref = useRef(null);

	useClickAway(ref, () => setIsOpen(false));

  return (
	<div className='navbar--mobile' ref={ref} style={style}>
		<NavLink to='/' className={'logo logo-dark'}>
			<Logo />
		</NavLink>
		<Hamburger 
		// className="navbar--hamburger"
		toggled={isOpen} 
		size={20} 
		toggle={setIsOpen} 
		/>
		{
			isOpen && 
			<NavLinks 
			onClick={() => setIsOpen(prev => !prev)} 
			className={isOpen ? "navbar--hamburger-open" : ""}
			
			/>
		}
	</div>
  )
}

export default NavbarMobile