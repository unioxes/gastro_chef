import './App.css'
import Photos from './one_page/PHOTOS_EDA/Photos'
import { styled } from 'styled-components'
import OneElem from './one_page/SWIPERSLIDE_ELEMENTS/ONE_ELEM/OneElem.jsx'
import Swiper from './one_page/SWIPER/Swiper.jsx'

const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  aligin-items: center;
`
function App() {
  return (
    <>    
          <SectionContainer>
            <OneElem/>
            <Swiper/>
          </SectionContainer>
    </>
  )
}

export default App
