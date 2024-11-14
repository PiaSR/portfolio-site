import React from 'react'
import NavLinks from './NavLinks'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'


const NavbarDesktop = ({style}) => {
  return (
	<div className='navbar--desktop' style={style}>
		<NavLink to='/' className={'logo logo-dark'}>
			<Logo />
		</NavLink >
			<NavLinks className={"navbar--desktop-ul"} />
	</div>
  )
}

export default NavbarDesktop