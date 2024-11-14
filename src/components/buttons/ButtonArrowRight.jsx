import React from 'react'


const ButtonArrowRight = ({value, onClick, classNameBtn, link}) => {
	
  return (
	<div >
		<a href={link} target="_blank">
	<button 
		className={classNameBtn} 
		onClick={onClick}>
		<span className='button--text'>{value}</span>
		<svg className="button--arrowSvg" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.290547 9.88047L4.17055 6.00047L0.290547 2.12047C-0.0994531 1.73047 -0.0994531 1.10047 0.290547 0.710469C0.680547 0.320469 1.31055 0.320469 1.70055 0.710469L6.29055 5.30047C6.68055 5.69047 6.68055 6.32047 6.29055 6.71047L1.70055 11.3005C1.31055 11.6905 0.680547 11.6905 0.290547 11.3005C-0.0894531 10.9105 -0.0994531 10.2705 0.290547 9.88047Z" />
</svg>
	
		
	</button>
	</a>
	</div>
  )
}

export default ButtonArrowRight