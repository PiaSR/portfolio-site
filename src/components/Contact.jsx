import React from 'react'
import ButtonSendEmail from './buttons/ButtonSendEmail'
import SocialsLinks from './SocialsLinks'


const Contact = () => {
  const openMailTo = () => {
		window.open('mailto:piasmithrichling@gmail.com?subject=Hi Pia | Contact')

	}
  return (
    <div id="contact" className='contact'>
    <div className='contact--container'>
     
      <h1 className='contact--header'>LET'S CHAT</h1>
      <ButtonSendEmail
		 	value={"email me"}
			 classNameBtn={"button button--light"}
	
			 onClick={openMailTo}
			 />
    
    <SocialsLinks />
      
      </div>
      </div>
  )
}

export default Contact