import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {HashRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>}/>
          <Route path="movie/:id" element={<Movie/>}/>
          <Route path="Search" element={<Search/>}/>
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
