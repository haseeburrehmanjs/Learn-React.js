import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SingalUser from './pages/SingalUser.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout />,
    children : [
      {
        path : '',
        element : <Home/>
      },
      {
        path: 'about',
        element : <About/>
      },
      {
        path: 'contact',
        element : <Contact/>
      },
      {
        path: 'singaluser/:id',
        element : <SingalUser />
      },
      {
        path : '*',
        element : <h1>Page Not Found</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
