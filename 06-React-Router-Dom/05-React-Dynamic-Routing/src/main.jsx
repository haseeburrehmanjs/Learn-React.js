import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '@mui/icons-material'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import SingalProduct from './pages/SingalProduct.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'product',
        element: <Product />
      },
      {
        path: 'product/:id',
        element: <SingalProduct />
      },
      {
        path : '*',
        element: <h1>PAGE NOT FOUND</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
