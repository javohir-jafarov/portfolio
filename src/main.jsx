import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter([
  {path: '*', element: <NotFoundPage />},
  {path: '/', element: <App />},
  {path: '/about', element: <About />},
  {path: '/projects', element: <Projects />},
  {path: '/contact', element: <Contact />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

