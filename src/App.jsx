import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Header />

      <main className="container mx-auto px-4 py-10">
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Pascual 👋</h2>
          <p className="text-lg max-w-2xl mx-auto">
            I'm a self-taught frontend developer with a background in mechanical engineering. I love building intuitive and useful web apps with clean, modern UI.
          </p>
        </section>

        <section id="projects" className="mb-20">
          <h3 className="text-2xl font-semibold mb-6">Projects</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Sample Project */}
            <div className="bg-white rounded-xl shadow p-4">
              <img
                src="/pastry-shop.png"
                alt="Pastry Shop Screenshot"
                className="rounded mb-4"
              />
              <h4 className="text-lg font-semibold">Pastry Shop</h4>
              <p className="text-sm mb-2">
                A shopping cart project made with React to practice component state and user interactions.
              </p>
              <div className="flex gap-3 text-sm">
                <a
                  href="https://pastry-shop-yum.netlify.app/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >Live</a>
                <a
                  href="https://github.com/PascualF/shopping-cart"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mb-20">
          <h3 className="text-2xl font-semibold mb-6">About Me</h3>
          <p className="max-w-2xl text-md">
            I'm transitioning into tech after years of experience in mechanical engineering. I’m passionate about building things people actually enjoy using. Outside of code, I love storytelling, learning new skills, and playing with creative side projects.
          </p>
        </section>

        <section id="contact" className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p>Email: <a className="text-blue-600" href="mailto:your.email@example.com">your.email@example.com</a></p>
          <p className="mt-2">GitHub: <a className="text-blue-600" href="https://github.com/PascualF" target="_blank">@PascualF</a></p>
          <p className="mt-2">LinkedIn: <a className="text-blue-600" href="https://www.linkedin.com/in/your-profile" target="_blank">your-profile</a></p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
