import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signin } from '../redux/actions/auth'
import { Link as LinkRouter } from 'react-router-dom'

export default function Signin() {
  const inputs = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignin = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(inputs.current))
    dispatch(signin(data))
    navigate('/', {replace: true})
  }

  return (
    <section className='w-[300px] sm:w-[400px] shadow-lg rounded-lg my-6'>
      <form className='flex flex-col p-8' onSubmit={handleSignin} ref={inputs}>
        <h2 className='text-md font-semibold uppercase pb-2'>Login</h2>
        <fieldset className='text-xs tracking-wider uppercase flex flex-col gap-6 pb-8'>
          <label className='flex flex-col gap-1'>Email
            <input type='mail' name='email' className='input-search text-xs bg-light-gray shadow-lg rounded-md focus:outline-none focus:bg-white p-2' placeholder='mail@gmail.com' required/>
          </label>
          <label className='flex flex-col gap-1'>Password
            <input type='password' name='password' className='input-search text-xs bg-light-gray shadow-lg rounded-md focus:outline-none focus:bg-white p-2' placeholder='8 characters minimum' required/>
          </label>
        </fieldset>
        <div className='w-full self-center flex flex-col items-center gap-2'>
          <div className='w-1/3 bg-jasmine flex justify-center items-center rounded-md hover:opacity-80'>
            <button className='text-xs font-semibold p-2' type='submit'>SIGN IN</button>
          </div>
          <div className='text-xs'>
            <p>Do not have an account? <LinkRouter to={'/signup'} className='underline font-semibold'>Create One</LinkRouter></p>
          </div>
        </div>
      </form>
    </section>
  )
}
