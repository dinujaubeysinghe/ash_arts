import HomePage from './pages/HomePage'
import GalleryFilter from './components/GalleryFilter'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/gallery/Gallery'
import PencilArtGallery from './pages/gallery/PencilArt'
import SocialMedia from './pages/gallery/SocialMedia'
import Thumbnails from './pages/gallery/Thumbnails'
import Manipulation from './pages/gallery/Manipulation'
import PrintingDesigns from './pages/gallery/PrintingDesigns'
import UiUx from './pages/gallery/UiUx'
import BusinessCard from './pages/gallery/BusinessCard'

import { Routes, Route, useLocation } from 'react-router-dom'
import { Curtain } from './components/PageTransition'

function App() {

  const location = useLocation();

  return (
    <div>
      <Curtain />
      <NavBar />
      <main>
        <Routes location={location}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/gallery/pencil-art' element={<PencilArtGallery />} />
          <Route path='/gallery/social-media' element={<SocialMedia />} />
          <Route path='/gallery/thumbnails' element={<Thumbnails />} />
          <Route path='/gallery/manipulations' element={<Manipulation />} />
          <Route path='/gallery/printing-designs' element={<PrintingDesigns />} />
          <Route path='/gallery/uiux-designs' element={<UiUx />} />
          <Route path='/gallery/brand-designs' element={<BusinessCard/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App