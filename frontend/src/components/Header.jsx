import { Link as LinkRouter } from 'react-router-dom'

export default function Header() {
  return (
    <header id='main-header' className='w-2/3 flex justify-between'>
      <img src='/logo.png' className='h-[12vh]' alt='logo' />
      <nav>
        <LinkRouter to='/'>Home</LinkRouter>
        <LinkRouter to='/'>Test</LinkRouter>
      </nav>
      <section className='flex'>
        <label>🔍
          <input type='search' className='border border-1'/>
        </label>
        <LinkRouter to='/' ><img src='/add-user.png' alt='user' className='w-5'/></LinkRouter>
      </section>
    </header>
  )
}
