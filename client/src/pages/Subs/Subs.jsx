import { useSelector } from 'react-redux'

function Subs() {

  const user = useSelector(state => state.auth.userData)

  return !user ? <div className='w-full h-full text-center flex justify-center items-center'><h1>Login to see <h2>Subscriptions</h2></h1></div> 
	: (
    <div className='w-full h-full text-center flex flex-col justify-center items-center'>
      <h1>Site development</h1>
      <h2>You will see this page soon</h2>
    </div>
  )
}

export default Subs
