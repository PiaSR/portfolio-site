import React, {useState, useEffect} from 'react'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

const Navbar = () => {
	const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
	const [top, setTop] = useState(0);
	useEffect(() => {
	  // Function to handle scroll events
	  const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
		  setTop(0); // Show navbar
		} else {
		  setTop(-8.5); // Hide navbar
		}
		setPrevScrollpos(currentScrollPos);
	  };
	  // Add scroll event listener when the component mounts
	  window.addEventListener('scroll', handleScroll);
	  // Clean up by removing the event listener when the component unmounts
	  return () => {
		window.removeEventListener('scroll', handleScroll);
	  };
	}, [prevScrollpos]);

	const navbarStyle ={
		position: 'fixed',
    	top: `${top}rem`,
		transition: 'top 0.3s',
		zIndex: "5"
	}
  return (
	<div className='navbar'>
		<NavbarDesktop style={navbarStyle} />
		<NavbarMobile style={navbarStyle} />
	</div>
  )
}

export default Navbar