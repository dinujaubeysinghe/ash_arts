import React from 'react'
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaBehance } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full bg-[#2C2C2A]'>

      {/* Big brand name */}
      <div className='border-b border-[#444441] px-9 md:px-14 lg:px-28 pt-6 md:py-8 '>
        <h2 className='font-heading font-bold uppercase lg:tracking-[0.18em] text-[clamp(32px,8vw,100px)] text-[#D3D1C7] leading-none'>
          ASH DESIGN STUDIO
        </h2>
      </div>

      {/* Bottom row */}
      <div className='px-6 md:px-14 lg:px-20 pt-4 flex flex-col lg:pb-3 md:flex-row items-center justify-between gap-1 md:gap-4'>

        {/* Social icons */}
        <div className='flex items-center gap-5'>
          <a href='https://www.instagram.com/davincimodern01?igsh=MWtpZ2ZrazlpMmd3OA%3D%3D&utm_source=qr'
            target='_blank' rel='noopener noreferrer' aria-label='Instagram'
            className='text-white hover:text-[#E1306C] transition-colors duration-200'>
            <FaInstagram size={20} />
          </a>
          <a href='https://www.facebook.com/share/1B2uVCNtdu/?mibextid=wwXIfr'
            target='_blank' rel='noopener noreferrer' aria-label='Facebook'
            className='text-white hover:text-[#1877F2] transition-colors duration-200'>
            <FaFacebookF size={20} />
          </a>
          <a href='https://www.tiktok.com/@b.the.ash?_r=1&_t=ZS-974HaWjQ1AY'
            target='_blank' rel='noopener noreferrer' aria-label='TikTok'
            className='text-white hover:text-black transition-colors duration-200'>
            <FaTiktok size={20} />
          </a>
          <a href='https://youtube.com/@b_the_ash?si=yTCtBReOst7RELlI'
            target='_blank' rel='noopener noreferrer' aria-label='YouTube'
            className='text-white hover:text-[#FF0000] transition-colors duration-200'>
            <FaYoutube size={20} />
          </a>
          <a href='https://www.behance.net/ashendewinda'
            target='_blank' rel='noopener noreferrer' aria-label='Behance'
            className='text-white hover:text-[#1769FF] transition-colors duration-200'>
            <FaBehance size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className='font-body text-xs lg:text-sm lg:mb-1 text-white text-center'>
          © {new Date().getFullYear()} Ash Arts Gallery. All rights reserved.
        </p>

        {/* Designed by */}
        <p className='font-body text-xs lg:text-sm mb-4 lg:mb-1 text-white'>
          Designed by{' '}
          <a href='https://www.dinuja.online/' target='_blank' rel='noopener noreferrer'
            className='text-[#D3D1C7] hover:text-blue-500 transition-colors duration-200 hover:underline'>
            Dinuja Ubeysinghe
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer