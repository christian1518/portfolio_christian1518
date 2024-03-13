import './styles/reset.css'
import './styles/global.css'
import Header from './components/Header'
import BanerSection from './components/Sections/BanerSection'
import AboutMeSection from './components/Sections/AboutMeSection'
import TechSection from './components/Sections/TechSection'
import ProjectsSection from './components/Sections/ProjectsSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <main className='mainApp'>
      <Header />
        <BanerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
      <Footer />
      </main>
    </>
  )
}

export default App

