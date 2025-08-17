import { useSelector } from 'react-redux'

function Subs() {

  const user = useSelector(state => state.auth.userData)

  return !user ? <div className='w-full h-full text-center flex justify-center items-center'><h1>Login to see <h2>Subscriptions</h2></h1></div> 
	: (
    <div>
      Subs
    </div>
  )
}

export default Subs
