import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white '>
      <div className="logo font-bold text-2xl"> 
        <Link href="/">ZipLink</Link>
      </div>
      <ul className="flex justify-center gap-5 items-center">

              <Link href="/">
                  <li className="hover:text-purple-200 transition">Home</li>
              </Link>

              <Link href="/about">
                  <li className="hover:text-purple-200 transition">About</li>
              </Link>

              <Link href="/shorten">
                  <li className="hover:text-purple-200 transition">Shorten</li>
              </Link>

              <Link href="/dashboard">
                  <li className="hover:text-purple-200 transition">Dashboard</li>
              </Link>

              <Link href="/contact">
                  <li className="hover:text-purple-200 transition">Contact Us</li>
              </Link>

              <li className="flex gap-3">

                  <Link href="/shorten">
                      <button className="bg-purple-500 hover:bg-purple-600 rounded-lg px-4 py-2 font-bold transition">
                          Try Now
                      </button>
                  </Link>

                  <Link href="https://github.com/KaustavJu27" target="_blank">
                      <button className="bg-white text-purple-700 hover:bg-gray-100 rounded-lg px-4 py-2 font-bold transition">
                          GitHub
                      </button>
                  </Link>

              </li>

          </ul>
    </nav>
  )
}

export default Navbar