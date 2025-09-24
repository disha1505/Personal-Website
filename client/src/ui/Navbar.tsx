import { Link, NavLink } from 'react-router-dom'
import { Github, Search } from 'lucide-react'
import pfpImage from '../assets/images/pfp.jpg'

export function Navbar() {

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-[--color-netflix-red] font-teko">
            Disha Jadhav
          </Link>
          <nav className="hidden gap-6 md:flex">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-white' : 'text-gray-300 hover:text-white'}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white' : 'text-gray-300 hover:text-white'}>About</NavLink>
            <a href="/resume.pdf" target="_blank" rel="noopener" className="text-gray-300 hover:text-white">Resume</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-gray-300 hover:text-white">
            <Search size={20} />
          </button>
          <a 
            href="https://github.com/disha1505" 
            target="_blank" 
            rel="noopener" 
            className="text-gray-300 hover:text-white"
            title="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/disha-jadhav-5a5701250/" 
            target="_blank" 
            rel="noopener" 
            className="block"
            title="LinkedIn Profile"
          >
            <img 
              src={pfpImage} 
              alt="Profile" 
              className="h-8 w-8 rounded-full object-cover hover:ring-2 hover:ring-white/50 transition-all"
            />
          </a>
        </div>
      </div>
    </header>
  )
}


