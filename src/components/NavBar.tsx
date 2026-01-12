import logo from '@/assets/logo.svg'
import { Phone } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="ANOC Logo" className="h-10 object-contain" />
        </div>

        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <li>
            <a href="#home" className="text-orange-500 hover:text-orange-600 cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-500 cursor-pointer">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-orange-500 cursor-pointer">
              Services
            </a>
          </li>
          <li>
            <a href="#team" className="hover:text-orange-500 cursor-pointer">
              Team
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-500 cursor-pointer">
              Contact Us
            </a>
          </li>
           <li>
            <a href=" https://mx-s5.vivawebhost.com:2096/" target='_blank' className="hover:text-orange-500 cursor-pointer">
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
