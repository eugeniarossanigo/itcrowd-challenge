import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
      window.scrollTo(0,0)
  }, [pathname])

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
