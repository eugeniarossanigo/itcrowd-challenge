import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import UnderConstruction from './pages/UnderConstruction'
import { authentication } from './redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const { user } = useSelector( store => store.usersReducer )

  useEffect(() => {
    if (localStorage.getItem('token')){
      dispatch(authentication())
    }
  }, [])

  const router = createBrowserRouter([
    { path: '/', element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/products/:id', element: <Detail /> },
        { path: '/signup', element: !user && <Signup /> },
        { path: '/signin', element: !user && <Signin /> },
        { path: '*', element: <UnderConstruction /> }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
