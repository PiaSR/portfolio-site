import React from 'react'

const ToolIcon = ({logo, name}) => {
  return (
	<div className='about--tool-container'>
          <img className='about--tool-icon' src={logo} alt="" />
          <span className='about--tool-name'>{name}</span>
          </div>
  )
}

export default ToolIcon