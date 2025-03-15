import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer' 
import FourSectionsWrapper from './components/FourSectionsWrapper'
import Careers from './components/Careers'

function App() {
  const path = window.location.pathname;

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      {path === '/careers' ? (
        <Careers />
      ) : (
        <main className="w-full">
          <Hero />
          <FourSectionsWrapper />
          <Services />
          <About /> 
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
