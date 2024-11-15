import React from 'react'
import AnimateOnScroll from './AnimateOnScroll'
import ButtonSendEmail from './buttons/ButtonSendEmail'
import Logo from './Logo'
import SocialsLinks from './SocialsLinks'
import SpeechBubbleEmail from './SpeechBubbleEmail'

const Footer = () => {
	const openMailTo = () => {
		window.open('mailto:piasmithrichling@gmail.com?subject=Hi Pia! | Inquiry')

	}
  return (
	<AnimateOnScroll>
	<div className='footer--container'>
		<h2 className='footer--header'>SAY HELLO</h2>
		<ButtonSendEmail
		 	value={"email me"}
			 classNameBtn={"button button--light"}
		
			 onClick={openMailTo}
			 />
		<SpeechBubbleEmail className={"speech-bubble"} />
		<Logo className={"logo logo-light"}/>
		
	</div>
	</AnimateOnScroll>
  )
}

export default Footer