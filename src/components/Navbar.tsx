"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
        {/* Left - Name */}
        <div className="text-xl font-bold">
          <Link href="/">Chris Hoang</Link>
        </div>

        {/* Center - Navigation Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-gray-400">About</Link>
          <Link href="#experiences" className="hover:text-gray-400">Internships & Experiences</Link>
          <Link href="#projects" className="hover:text-gray-400">Projects</Link>
        </nav>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-lg">
          <a href="https://www.linkedin.com/in/chris-hoang-1409a5255" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Mehoyoyoyminoy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
}
