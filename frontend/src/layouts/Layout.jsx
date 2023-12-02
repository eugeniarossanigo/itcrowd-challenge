import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header />
      <main id='main-container' className='w-full flex flex-col justify-between items-center'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
