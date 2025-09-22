
function Posts_svg({isActive = false, out, className = ""}) {
  return (
	<div className={className}>
	  <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 509 512.123"><path fill={out} fill-rule="nonzero" d="M62.283 0h323.575c34.292 0 62.282 27.991 62.282 62.283v322.76c0 34.292-27.99 62.282-62.282 62.282H62.283C27.991 447.325 0 419.335 0 385.043V62.283C0 27.991 27.991 0 62.283 0zm409.36 81.803a103.296 103.296 0 017.464 6.765C497.551 107.013 509 132.47 509 160.487v249.824c0 56.03-45.781 101.812-101.812 101.812H162.671c-28.016 0-53.473-11.449-71.918-29.894a102.796 102.796 0 01-6.763-7.462h323.198c34.81 0 63.6-28.117 64.438-62.901h.017v-1.141l.002-.414V160.487l-.002-.414v-78.27zm-85.785-44.448H62.283c-13.674 0-24.928 11.254-24.928 24.928v322.76c0 13.674 11.254 24.928 24.928 24.928h323.575c13.674 0 24.927-11.254 24.927-24.928V62.283c0-13.674-11.253-24.928-24.927-24.928z"/></svg>
	</div>
  )
}

export default Posts_svg
