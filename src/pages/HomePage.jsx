import React from 'react'
import hero from '../assets/home/ashen.png'
import ab1 from '../assets/home/Picsart_24-04-18_13-06-58-932.webp'
import ab2 from '../assets/home/sun goes down.webp'
import ab3 from '../assets/home/ash5.jpeg'

import p1 from '../assets/home/p1.jpg'
import p2 from '../assets/home/202603098.webp'
import p3 from '../assets/home/p3.png'
import p4 from '../assets/home/ash4.jpeg'
import p5 from '../assets/home/paa3.jpeg'
import p6 from '../assets/home/ash3.jpeg'
import p7 from '../assets/home/ash2.jpeg'
import p8 from '../assets/home/ash1.jpeg'
import p9 from '../assets/home/ticket november.webp'

import { useState } from 'react'
import { motion } from 'framer-motion'

const works = [
  { id: 1, img: ab1, category: 'Thumbnail' },
  { id: 2, img: p1, category: 'Pencil Art' },
  { id: 3, img: p2, category: 'Social Media' },
  { id: 4, img: p6, category: 'Thumbnail' },
  { id: 5, img: p8, category: 'Manipulation' },
  { id: 6, img: p4, category: 'UI/UX Design' },
  { id: 7, img: p9, category: 'Social Media' },
  { id: 8, img: p7, category: 'Logo Design' },
  { id: 9, img: p5, category: 'Pencil Art' },
]

const ProjectCard = ({ works }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className='relative overflow-hidden rounded-sm cursor-pointer mb-3 md:mb-4 break-inside-avoid'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={works.img}
        alt={works.title}
        className={`w-full h-auto block transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
      />
      <div className={`absolute inset-0 bg-[#1A1A18]/50 flex flex-col justify-end p-3 md:p-4 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <p className='font-body text-xs text-[#D3D1C7] mt-1 tracking-wider uppercase'>{works.category}</p>
      </div>
    </div>
  )
}

const HomePage = () => {
  return (
    <div className='mt-18 md:mt-20 lg:mt-12'>

      {/* ── HERO ─────────────────────────────────────── */}
      <div className='px-5 sm:px-10 md:px-16 lg:px-20 mt-2 lg:mt-1 leading-none'>
        <div className='font-heading font-bold text-[#2C2C2A]'>
          <motion.h1
            className='text-[clamp(32px,7vw,72px)] leading-none'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            ASH DESIGN STUDIO
          </motion.h1>
          <motion.span
            className='font-heading italic text-[clamp(14px,3vw,30px)] text-[#888780] leading-none'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            Ashen Dewinda
          </motion.span>
        </div>
      </div>

      <div className='px-5 sm:px-10 md:px-16 lg:px-20 mt-4 md:mt-6'>
        <motion.img
          src={hero} alt='Ashen Dewinda' className='w-full h-auto rounded-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24 lg:pb-14'>
        <div className='mb-8 md:mb-12 text-center'>
          <h2 className='font-heading font-bold text-[clamp(28px,5vw,48px)] text-[#2C2C2A]'>
            About
          </h2>
        </div>

        <p className='font-body text-[clamp(14px,2vw,20px)] text-[#444441] leading-relaxed
          max-w-3xl mx-auto text-center mb-12 md:mb-16'>
          I’m Ash. My journey in design started with a simple pencil and a blank sheet of paper, capturing details through traditional sketching. Today, I bridge that raw, artistic intuition with modern technology as a Multimedia Designer.
        </p>

        {/* 3 images — stack on mobile, row on sm+ */}
        <div className='flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-10'>
          <div className='w-full sm:w-1/3 h-48 sm:h-56 md:h-64 overflow-hidden rounded-sm'>
            <img src={ab1} alt='about 1' className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
          </div>
          <div className='w-full sm:w-1/3 h-48 sm:h-56 md:h-64 overflow-hidden rounded-sm'>
            <img src={ab2} alt='about 2' className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
          </div>
          <div className='w-full sm:w-1/3 h-48 sm:h-56 md:h-64 overflow-hidden rounded-sm'>
            <img src={ab3} alt='about 3' className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
          </div>
        </div>
        <div className='px-2 mt-6'>
          <a href='/about'
            className='font-body text-xs md:text-sm text-[#888780] border-b border-[#888780] pb-0.5 hover:text-[#2C2C2A] hover:border-[#2C2C2A] transition-colors whitespace-nowrap'>
            Read more →
          </a>
        </div>
      </section >

      {/* ── GALLERY ──────────────────────────────────── */}
      <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-12 md:py-20 lg:pb-1'>
        <div className='flex justify-between items-end mb-8 md:mb-12'>
          <div>
            <h2 className='font-heading font-bold text-[clamp(24px,4vw,40px)] text-[#2C2C2A]'>
              Gallery
            </h2>
          </div>
          <a href='/gallery'
            className='font-body text-xs md:text-sm text-[#888780] border-b border-[#888780] pb-0.5 hover:text-[#2C2C2A] hover:border-[#2C2C2A] transition-colors whitespace-nowrap'>
            View all →
          </a>
        </div>

        <div className='columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4'>
          {works.map(work => (
            <ProjectCard key={work.id} works={work} />
          ))}
        </div>
      </section>


      {/* ── CONTACT ──────────────────────────────────── */}
      <section className='px-5 sm:px-10 md:px-16 lg:px-20 pt-16 pb-24 md:py-24 lg:mx-60 lg:py-32 '>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>

          {/* Text */}
          <div>
            <h2 className='font-heading font-bold text-[70px] text-[#2C2C2A] leading-none'>
              Have an idea<br />
              <em className='italic text-[#888780]'>in mind?</em>
            </h2>
          </div>
          {/* Button */}
          <a href='/contact'
            className='font-body text-sm font-medium tracking-widest uppercase
            px-10 py-4 bg-[#2C2C2A] text-white rounded-sm whitespace-nowrap
            hover:bg-[#444441] transition-colors duration-200'>
            Get in touch →
          </a>

        </div>
      </section>


    </div>
  )
}

export default HomePage