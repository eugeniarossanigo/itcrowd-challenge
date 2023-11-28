import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'
// import Contact from './pages/Contact'

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/products/:id', element: <ItemDetail /> },
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
