import { useSelector } from 'react-redux'

function Collection() {

  const user = useSelector(state => state.auth.userData)

  return !user ? <div className='w-full h-full text-center flex justify-center items-center'><h1>Login to see <h2>Collections</h2></h1></div> 
	: (
    <div>
      Collection
    </div>
  )
}

export default Collection
