// import { Link, useLocation } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import { Phone } from 'lucide-react'

export default function Navbar() {
  // const location = useLocation()

  const isActive = (path: string) =>
    location.pathname === path ? 'text-orange-500' : 'hover:text-orange-500'

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <a href="#">
            <img src={logo} alt="ANOC Logo" className="h-10 object-contain cursor-pointer" />
          </a>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <li>
            <a href="#" className={`${isActive('/')} cursor-pointer transition-colors`}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={`${isActive('/about')} cursor-pointer transition-colors`}>
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`${isActive('/services')} cursor-pointer transition-colors`}
            >
              Services
            </a>
          </li>
          <li>
            <a href="#team" className={`${isActive('/team')} cursor-pointer transition-colors`}>
              Team
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${isActive('/contact')} cursor-pointer transition-colors`}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="https://mx-s5.vivawebhost.com:2096/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 cursor-pointer transition-colors"
            >
              Webmail
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-2 font-semibold text-sm">
          <Phone size={18} className="text-orange-600" />
          <div className="text-right">
            <p className="text-xs">Call Us</p>
            <p>+234 803 304 3363</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
