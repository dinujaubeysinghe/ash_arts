import { useState } from 'react'
import GalleryFilter from '../../components/GalleryFilter'

import { motion } from 'framer-motion'

import g1 from '../../assets/gallery/all/manipulation/2026 new year.webp'
import g2 from '../../assets/gallery/all/manipulation/National Doy day.webp'
import g3 from '../../assets/gallery/all/manipulation/WhatsApp Image 2026-02-21 at 7.35.13 PM.webp'
import g4 from '../../assets/gallery/all/manipulation/literact day.webp'
import g5 from '../../assets/gallery/all/manipulation/nissan.webp'
import g6 from '../../assets/gallery/all/manipulation/water.webp'

import g7 from '../../assets/gallery/all/manipulation/capsule.webp'
import g8 from '../../assets/gallery/all/manipulation/ash1.jpeg'
import g9 from '../../assets/gallery/all/manipulation/PROBEEOTIC (front page) - Copy.webp'


const works = [
  { id: 1, img: g1, category: 'Manipulation' },
  { id: 2, img: g2, category: 'Manipulation' },
  { id: 3, img: g3, category: 'Manipulation' },
  { id: 4, img: g4, category: 'Manipulation' },
  { id: 5, img: g5, category: 'Manipulation' },
  { id: 6, img: g6, category: 'Manipulation' },
  { id: 7, img: g7, category: 'Manipulation' },
  { id: 8, img: g8, category: 'Manipulation' },
  { id: 9, img: g9, category: 'Manipulation' },
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
        alt={works.category}
        className={`w-full h-auto block transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
      />
      <div className={`absolute inset-0 bg-[#1A1A18]/50 flex flex-col justify-end p-3 md:p-4 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <p className='font-body text-xs text-[#D3D1C7] mt-1 tracking-wider uppercase'>{works.category}</p>
      </div>
    </div>
  )
}

export default function Manipulations() {
  return (
   <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}>
           <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-6 md:py-20 lg:py-8'>
           <h1 className='font-heading font-bold text-[clamp(40px,7vw,88px)] text-[#2C2C2A] leading-none mb-6'>
              Manipulations
           </h1>
           <p className='font-body text-sm text-[#444441] max-w-2xl leading-relaxed mb-2'>
             A collection of my digital manipulations, showcasing a range of subjects and styles. From surreal landscapes to abstract compositions, each piece is a testament to the endless possibilities of digital art.
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