import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer' 
import FourSectionsWrapper from './components/FourSectionsWrapper'
import Careers from './components/Careers'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/careers" element={<Careers />} />
          <Route path="/" element={
            <main className="w-full">
              <Hero />
              <FourSectionsWrapper />
              <Services />
              <About /> 
              <Contact />
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
