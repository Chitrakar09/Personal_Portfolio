import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LandingPage, MainPage, About } from './pages'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<LandingPage />} />
      <Route path='/realm' element={<MainPage />}>
        <Route path='/realm/about' element={<About />} />
        
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
