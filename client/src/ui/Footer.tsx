import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-brand-display animate-fadeInUp mb-4 text-xl font-bold text-[--color-netflix-red]">Disha Jadhav</h3>
            <p className="text-gray-300 mb-4">
              Full-Stack Developer & AI Enthusiast passionate about building innovative solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/disha1505" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub profile" title="GitHub profile">
                <Github size={24} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/disha-jadhav-5a5701250/" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn profile" title="LinkedIn profile">
                <Linkedin size={24} aria-hidden="true" />
              </a>
              <a href="mailto:jdisha424@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Send email" title="Send email">
                <Mail size={24} aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/resume.pdf" download className="hover:text-white transition-colors">Resume</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'AWS', 'MongoDB', 'AI/ML', 'TypeScript'].map((skill) => (
                <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-[--color-netflix-red]" /> by Disha Jadhav
          </p>
          <p className="mt-2 text-sm">© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
