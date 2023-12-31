import { Link as LinkRouter, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { RiUserAddLine, RiUserLine } from 'react-icons/ri';
import { useContext } from 'react';
import { GuitarContext } from '../context/GuitarContext';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../redux/actions/auth'

export default function Header() {
  const { input, updateInput } = useContext(GuitarContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector( store => store.usersReducer )

  const handleInput = (e) => {
    const query = e.target.value
    updateInput(query);
  }

  const handleOut = () => {
    dispatch(signout({ email: user.email }))
    navigate("/", {replace:true})
  }

  return (
    <header id='main-header' className='w-full flex flex-col items-center shadow-[0_20px_40px_-20px_rgba(166,171,177,1)]'>
      <section className='w-full h-1/5 tracking-wider bg-moss-green text-center text-[.6rem] text-white font-semibold pt-3'>
        <p>New incomes soon!</p>
      </section>
      <section className='w-3/4 h-4/5 lg:h-[16vh] flex flex-col lg:flex-row justify-between items-center py-4 gap-4'>
        <div className='h-[5vh] lg:h-[6vh]'>
          <img src='/logo.png' className='h-full rotate-[-12deg] py-1' alt='logo' />
        </div>
        <section className='flex items-center gap-4'>
          <div className='flex gap-1'>
            <label>
              <input type='search' className='input-search w-[180px] text-xs bg-light-gray shadow-lg rounded-md focus:outline-none focus:bg-white py-1 px-2' placeholder='Type to search...' onChange={handleInput}/>
            </label>
            <button><FaSearch className='text-taupe-gray text-lg' /></button>
          </div>
          { user ?
            <button onClick={handleOut} className='w-[40px] h-[40px] bg-light-green rounded-full p-2.5 hover:scale-110'><RiUserLine className='text-xl text-moss-green'/></button>
            :
            <LinkRouter to='/signin' className='w-[40px] h-[40px] bg-light-green rounded-full p-2.5 hover:scale-110'><RiUserAddLine className='text-xl text-moss-green'/></LinkRouter>
          }
        </section>
      </section>
    </header>
  )
}
