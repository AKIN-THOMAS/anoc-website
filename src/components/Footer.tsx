// Footer.tsx
// import React from "react";
import { Linkedin, Facebook, Instagram, X } from "lucide-react";
import logo from '../assets/footerlogo.svg'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-36">
            <img src={logo} alt="ANOC logo" className="w-full h-auto object-contain" />
          </div>
        </div>

        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} ANOC. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="LinkedIn" className="text-slate-700 hover:text-slate-900">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Facebook" className="text-slate-700 hover:text-slate-900">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-slate-700 hover:text-slate-900">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" aria-label="X / Twitter" className="text-slate-700 hover:text-slate-900">
            <X className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
