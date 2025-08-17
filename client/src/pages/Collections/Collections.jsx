import { useSelector } from 'react-redux'

function Collection() {

  const user = useSelector(state => state.auth.userData)

  return !user ? <div className='w-full h-full text-center flex flex-col justify-center items-center'><h1>Login to see </h1><h2>Collections</h2></div> 
	: (
    <div className='w-full h-full text-center flex flex-col justify-center items-center'>
      <h1>Site under development</h1>
      <h2>You will see this page soon</h2>
    </div>
  )
}

export default Collection
