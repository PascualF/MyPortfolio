import './App.css'
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Header />

      <main className="container mx-auto px-4 py-10">
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Pascual 👋</h2>
          <p className="text-lg max-w-2xl mx-auto">
            I’m a self-taught web developer with a strong background in mechanical and project engineering. 
            Skilled at problem-solving and managing complex projects, 
            I’m passionate about building clean, user-friendly web applications that deliver real value.
          </p>
        </section>

        <Projects />

        <About />

        <Contact />

      </main>

      <Footer />
    </div>
  )
}

export default App
