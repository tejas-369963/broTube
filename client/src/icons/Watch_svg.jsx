
function Watch_svg({ isActive = false, fill, stroke, className = "" }) {
  return (
	<div className={className}>
	  {isActive ?
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		  <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22ZM13 7C13 6.448 12.552 6 12 6C11.448 6 11 6.448 11 7V12.5L11.4 12.8L15.4 15.8C15.842 16.131 16.469 16.042 16.8 15.6C17.131 15.158 17.042 14.531 16.6 14.2L13 11.5V7Z" fill={fill} />
		</svg>

		: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		  <path fillRule="evenodd" clipRule="evenodd" d="M20.5 12C20.5 16.694 16.694 20.5 12 20.5C7.306 20.5 3.5 16.694 3.5 12C3.5 7.306 7.306 3.5 12 3.5C16.694 3.5 20.5 7.306 20.5 12ZM22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM12.75 7C12.75 6.586 12.414 6.25 12 6.25C11.586 6.25 11.25 6.586 11.25 7V12.375L11.55 12.6L15.55 15.6C15.881 15.848 16.352 15.781 16.6 15.45C16.848 15.119 16.781 14.649 16.45 14.4L12.75 11.625V7Z" fill={stroke} />
		</svg>
	  }
	</div>
  )
}

export default Watch_svg
