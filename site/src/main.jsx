import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import One from './one_page/ELEMENTS_HEADER/ONE/One.jsx'
import Questions from './one_page/QUESTIONS/Questions.jsx'
import Footer from './one_page/FOOTER/Footer.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import About from './two_page/ABOUT_US/AboutPage.jsx'
import './one_page/HEADER/header.module.css'
import Photos from './one_page/PHOTOS_EDA/Photos.jsx'
import Grids from './three_page/GRID/Grid.jsx'
import GridTwo from './three_page/GRID_TWO/GridTwo.jsx'
import Modal from 'react-modal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Modal/>
    <HashRouter>
      <header>
      <One/>
      <Routes>
          <Route index element={<App/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Grids/>}/>
          <Route path='/gridtwo' element={<GridTwo/>}/>
      </Routes>
      <Photos/>
      <Questions/>
      <Footer/>
      </header>
    </HashRouter>
  </StrictMode>,
)
