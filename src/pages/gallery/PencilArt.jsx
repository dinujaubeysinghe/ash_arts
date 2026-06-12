import React from 'react'
import GalleryFilter from '../../components/GalleryFilter'
import { useState } from 'react'

import { motion } from 'framer-motion'

import g1 from '../../assets/gallery/all/pencil/paa6.jpeg'
import g2 from '../../assets/gallery/all/pencil/paa2.jpeg'
import g3 from '../../assets/gallery/all/pencil/paa4.jpeg'
import g4 from '../../assets/gallery/all/pencil/paa5.jpeg'
import g5 from '../../assets/gallery/all/pencil/paa1.jpeg'
import g6 from '../../assets/gallery/all/pencil/paa3.jpeg'
import g7 from '../../assets/gallery/all/pencil/ashen.jpg'
import g8 from '../../assets/home/p1.jpg'

const works = [
  { id: 1, img: g7,  category: 'Pencil Art'  },
  { id: 2, img: g2,  category: 'Pencil Art' },
  { id: 3, img: g3, category: 'Pencil Art'  },
  { id: 4, img: g4,  category: 'Pencil Art'  },
  { id: 5, img: g5,  category: 'Pencil Art' },
  { id: 6, img: g6, category: 'Pencil Art'  },
  { id: 7, img: g1,  category: 'Pencil Art' },
  { id: 8, img: g8, category: 'Pencil Art'  },
]

const ProjectCard = ({ works }) => {
  const [hovered, setHovered] =useState(false)

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

export default function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}>
      <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-6 md:py-20 lg:py-8'>
        <h1 className='font-heading font-bold text-[clamp(40px,7vw,88px)] text-[#2C2C2A] leading-none mb-6'>
          Pencil Arts
        </h1>
        <p className='font-body text-sm text-[#444441] max-w-2xl leading-relaxed mb-2'>
          A collection of my pencil artworks, showcasing a range of subjects and styles. From portraits to still life, each piece is a testament to the timeless beauty of pencil art.
        </p>
      </section>

      <GalleryFilter>
      {/* ── GALLERY ──────────────────────────────────── */}
      <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-12 md:py-20 lg:pb-20'>
        <div className='columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4'>
          {works.map(work => (
            <ProjectCard key={work.id} works={work} />
          ))}
        </div>
      </section>
      </GalleryFilter>
    </motion.div>
  )
}