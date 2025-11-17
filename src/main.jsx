import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LandingPage, MainPage, About,Projects, Contact } from './pages'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './store/store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<LandingPage />} />
      <Route path='/realm' element={<MainPage />}>
        <Route path='/realm/about' element={<About />} />
        <Route path='/realm/projects' element={<Projects/>}/>
        <Route path='/realm/contact' element={<Contact/>}/>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
