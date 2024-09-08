import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children : [
      {
        path : 'about',
        element : <About/>
      },
      {
        path : 'contact',
        element : <Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
