export default function Header() {
  return (
    <header className="bg-white shadow p-4 sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Pascual Felicio</h1>
          <ul className="flex gap-4 text-sm font-medium">
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>
  )
}