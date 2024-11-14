import React from 'react'

import { NavLink } from 'react-router-dom'


const NavLinks = ({className, onClick}) => {

	
  return (
	<>
		
		<ul className={className}>
			<NavLink to='about' onClick={onClick} className="navbar--navLink">about</NavLink>
			<NavLink to='projects' onClick={onClick} className="navbar--navLink">projects</NavLink>
			<NavLink to='contact' onClick={onClick} className="navbar--navLink">contact</NavLink>
		</ul>
	</>
  )
}

export default NavLinks