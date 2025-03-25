import { useState, useEffect, useRef } from 'react'
import { Menu, Home, Users, Star, Mail } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const handleGitHubClick = () => {
    window.open("https://github.com", "_blank")
  }

  const sections = useRef({
    home: null,
    about: null,
    projects: null,
    Skills: null,
    contact: null,
  })
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 64 // 64 is the height of the navbar
      const sectionKeys = Object.keys(sections.current)

      for (let i = 0; i < sectionKeys.length; i++) {
        const currentSection = sections.current[sectionKeys[i]]
        const nextSection = sections.current[sectionKeys[i + 1]]

        if (
          currentSection &&
          (!nextSection ||
            scrollPosition >= currentSection.offsetTop &&
            scrollPosition < (nextSection.offsetTop || scrollPosition + 1))
        ) {
          setActiveSection(sectionKeys[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="bg-black shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">Portfolio</h1>
       </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="#about"
            className={`flex items-center px-3 py-2 rounded text-red-500 hover:bg-gray-100 ${
              activeSection === 'about' ? 'bg-gray-100' : ''
            }`}
          >
            <Users className="w-4 h-4 mr-2" />
            About
          </a>

          <a
            href="#skills"
            className={`flex items-center px-3 py-2 rounded text-red-500 hover:bg-gray-100 ${
              activeSection === 'skills' ? 'bg-gray-100' : ''
            }`}
          >
            <Star className="w-4 h-4 mr-2" />
            Skills
          </a>


          
          <a
            href="#projects"
            className={`flex items-center px-3 py-2 rounded text-red-500 hover:bg-gray-100 ${
              activeSection === 'projects' ? 'bg-gray-100' : ''
            }`}
          >
            <Star className="w-4 h-4 mr-2" />
            Projects
          </a> 
          
          <a
            href="#contact"
            className={`flex items-center px-3 py-2 rounded text-red-500 hover:bg-gray-100 ${
              activeSection === 'contact' ? 'bg-gray-100' : ''
            }`}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </a>
        </div>

        <div className='flex items-center'>
          <button className='mr-2 rounded-lg text-red-400' onClick={handleGitHubClick}>
            GitHub
          </button>
        </div>

        <div className="md:hidden">
          <button variant="outline" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="bg-white p-4">
            <a
              href="#about"
              className={` items-center px-3 py-2 rounded text-gray-800 hover:bg-gray-100 block ${
                activeSection === 'about' ? 'bg-gray-100' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Users className="w-4 h-4 mr-2" />
              About
            </a>
            <a
              href="#skills"
              className={` items-center px-3 py-2 rounded text-gray-800 hover:bg-gray-100 block ${
                activeSection === 'skills' ? 'bg-gray-100' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Star className="w-4 h-4 mr-2" />
              Skills
            </a>
            <a
              href="#projects"
              className={` items-center px-3 py-2 rounded text-gray-800 hover:bg-gray-100 block ${
                activeSection === 'projects' ? 'bg-gray-100' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Star className="w-4 h-4 mr-2" />
              Projects
            </a>
            
            <a
              href="#contact"
              className={` items-center px-3 py-2 rounded text-gray-800 hover:bg-gray-100 block ${
                activeSection === 'contact' ? 'bg-gray-100' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>

        </div>
        

      )}

    </nav>
  )
}
    