import React from 'react'

const ButtonSendEmail = ({value, onClick, classNameBtn}) => {
  return (
	<div >
	<button className={classNameBtn} onClick={onClick}>
	<span className='button--text'>{value}</span>
		
		<svg className="button--arrowSvg" width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.962945 0.794755C0.962945 1.23187 1.32058 1.58951 1.7577 1.58951H7.78989L0.732466 8.64693C0.422511 8.95688 0.422511 9.45758 0.732466 9.76754C1.04242 10.0775 1.54312 10.0775 1.85307 9.76754L8.91049 2.71011V8.7423C8.91049 9.17942 9.26813 9.53706 9.70525 9.53706C10.1424 9.53706 10.5 9.17942 10.5 8.7423V0.794755C10.5 0.35764 10.1424 0 9.70525 0H1.7577C1.32058 0 0.962945 0.35764 0.962945 0.794755Z" fill="#0606B0"/>
</svg>

	</button>
	</div>
  )
}

export default ButtonSendEmail