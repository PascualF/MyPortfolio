import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      
      <Header />

      <main className="container mx-auto px-4 py-10">
        
        <Hero />
        <Projects />
        <About />
        <Contact />

      </main>

      <Footer />
      
    </div>
  )
}

export default App
