"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white fixed w-full top-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold">
          Usama Bhatti
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/About" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link href="/Contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
        <button
          className="md:hidden text-2xl"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {navOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="/About" className="hover:text-gray-400">
              About
            </Link>
            <Link href="/projects" className="hover:text-gray-400">
              Projects
            </Link>
            <Link href="/Contact" className="hover:text-gray-400">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
