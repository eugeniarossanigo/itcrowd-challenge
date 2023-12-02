import { Link as LinkRouter } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { RiUserAddLine, RiUserFollowLine, RiUserLine } from 'react-icons/ri';
import { useContext } from 'react';
import { GuitarContext } from '../context/GuitarContext';

export default function Header() {
  const { input, updateInput } = useContext(GuitarContext)

  const handleInput = (e) => {
    const query = e.target.value
    console.log(query)
    updateInput(query);
  }

  return (
    <header id='main-header' className='w-full flex flex-col items-center shadow-[0_20px_40px_-20px_rgba(166,171,177,1)]'>
      <section className='w-full h-[4vh] tracking-wider bg-moss-green text-center text-[.6rem] text-white font-semibold pt-3'>
        <p>New incomes soon!</p>
      </section>
      <section className='w-3/4 h-full lg:h-[16vh] flex flex-col lg:flex-row justify-between items-center py-4 gap-6'>
        <div className='h-[6vh]'>
          <img src='/logo.png' className='h-full rotate-[-12deg] py-1' alt='logo' />
        </div>
        <nav className='uppercase text-xs tracking-[2px] flex items-center gap-6'>
          <LinkRouter className='border-t border-b py-2' to='/'>Home</LinkRouter>
          <LinkRouter to='/'>Products</LinkRouter>
          <LinkRouter to='/'>Contact</LinkRouter>
        </nav>
        <section className='flex items-center gap-4'>
          <div className='flex gap-1'>
            <label>
              <input type='search' className='input-search w-[180px] text-xs bg-light-gray shadow-lg rounded-md focus:outline-none focus:bg-white p-2' placeholder='Type to search...' onChange={handleInput}/>
            </label>
            <button><FaSearch className='text-taupe-gray text-lg' /></button>
          </div>
          <LinkRouter to='/' className='w-[40px] h-[40px] bg-light-green rounded-full p-2.5 hover:scale-110'><RiUserAddLine className='text-xl text-moss-green'/></LinkRouter>
        </section>
      </section>
    </header>
  )
}
