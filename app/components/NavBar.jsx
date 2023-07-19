"use client"
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import NavLogo from '../../public/assets/transparent_horizontal_layoutred.png'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {

  const [navBar, setNavbar] = useState(false)
  const [navBG, setNavBG] = useState(false)

  const handleNav = () => {
    setNavbar(!navBar)
  }

  useEffect(() => {
  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavBG(true)
    } else {
      setNavBG(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  }, []);

  const initial = 'transition lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 sticky w-full z-10 top-0 md:shadow-lg md:shadow-gray-400'
  const active = 'transition duration-500 lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 sticky w-full z-10 top-0 bg-primary bg-opacity-80 md:shadow-lg md:shadow-gray-400'

  return (
    <header className={navBG ? active : initial}>
      <section className="flex-1 flex justify-between items-center">
        <Image className="scale-70 md:scale-100" src={NavLogo} alt="third andrew creative logo" width={300} height={20}/>
      </section>

      <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav>
          <ul className="lg:flex items-center justify-between text-red text-base pt-4 lg:pt-0">
            <li>
              <Link href ='/' className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans">About Us</Link>
            </li>
            <li>
              <Link href ='/' className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans">Services</Link>
            </li>
            <li>
              <Link href ='/' className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans">Portfolio</Link>
            </li>
            <li>
              <Link href ='/' className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div onClick={handleNav} className='md:hidden'>
        <AiOutlineMenu size={25} />
      </div>
      <div className={navBar ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          navBar
          ? 'md:hidden fixed left-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-6 md:p-10 ease-in duration-300'
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-300'
        }
        >
          <div>
            <div className='flex w-full center items-center justify-between'>
              <Image src={NavLogo} alt="third andrew creative logo" width={200} height={20}/>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose className='text-black' />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4 text-xs text-red text-center'>Are you ready for more customers?</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase text-black'>
              <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>About Us</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Services</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Our Work</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Contact Us</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-red'>Let&#39;s Connect</p>
              <div className='text-black flex items-center justify-between my-4 w-full sm:w-80%'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar