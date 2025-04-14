"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-end md:justify-center">
        <div
          className={`
            fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
            md:static md:h-auto md:w-auto md:shadow-none md:transform-none md:flex
            ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
          `}
        >
          <button
            className="absolute top-4 right-4 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 p-8 md:p-0">
            <li>
              <Link
                href="#hero"
                className="text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link
                href="/curriculum/Valdir_Junior.docx"
                className="text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CV Download
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </nav>
    </header>
  )
}
