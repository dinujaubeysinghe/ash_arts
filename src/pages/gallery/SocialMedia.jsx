import { useState } from 'react'
import GalleryFilter from '../../components/GalleryFilter'

import { motion } from 'framer-motion'

import g1  from '../../assets/gallery/all/socail media/20250523.webp'
import g2  from '../../assets/gallery/all/socail media/20250912.webp'
import g3  from '../../assets/gallery/all/socail media/20250913.webp'
import g4  from '../../assets/gallery/all/socail media/20260215.webp'
import g5  from '../../assets/gallery/all/socail media/202603091.webp'
import g6  from '../../assets/gallery/all/socail media/2026030917.webp'
import g7  from '../../assets/gallery/all/socail media/2026030918.webp'
import g8  from '../../assets/gallery/all/socail media/202603092.webp'
import g9  from '../../assets/gallery/all/socail media/2026030920.webp'
import g10 from '../../assets/gallery/all/socail media/202603093.webp'
import g11 from '../../assets/gallery/all/socail media/202603095.webp'
import g12 from '../../assets/gallery/all/socail media/202603096.webp'
import g13 from '../../assets/gallery/all/socail media/202603097.webp'
import g14 from '../../assets/gallery/all/socail media/202603098.webp'
import g15 from '../../assets/gallery/all/socail media/20260402.webp'
import g16 from '../../assets/gallery/all/socail media/20260409.webp'
import g17 from '../../assets/gallery/all/socail media/202604191.webp'
import g18 from '../../assets/gallery/all/socail media/202604192.webp'
import g19 from '../../assets/gallery/all/socail media/461654164_868957872014546_3846827120351430796_n.webp'
import g20 from '../../assets/gallery/all/socail media/52ghgd.webp'
import g21 from '../../assets/gallery/all/socail media/Artboard 1.webp'
import g22 from '../../assets/gallery/all/socail media/Mduwantha ai.webp'
import g23 from '../../assets/gallery/all/socail media/SAMPLE.webp'
import g24 from '../../assets/gallery/all/socail media/class card.webp'
import g25 from '../../assets/gallery/all/socail media/handbill mockup harindu.webp'
import g26 from '../../assets/gallery/all/socail media/handbill000.webp'
import g27 from '../../assets/gallery/all/socail media/multimedia post1.webp'
import g28 from '../../assets/gallery/all/socail media/science 6.webp'
import g29 from '../../assets/gallery/all/socail media/science 7.webp'
import g30 from '../../assets/gallery/all/socail media/sinhala.webp'
import g31 from '../../assets/gallery/all/socail media/ticket mockup.webp'
import g32 from '../../assets/gallery/all/socail media/ticket november.webp'
import g33 from '../../assets/gallery/all/socail media/tute cover 12443.webp'
import g34 from '../../assets/gallery/all/socail media/tute cover 2.webp'
import g35 from '../../assets/gallery/all/socail media/tute cover 22424.webp'
import g36 from '../../assets/gallery/all/socail media/tute cover 23.webp'
import g37 from '../../assets/gallery/all/socail media/tute cover 251018.webp'
import g38 from '../../assets/gallery/all/socail media/tute cover mockup b.webp'
import g39 from '../../assets/gallery/all/socail media/tute cover mockup octomber.webp'
import g40 from '../../assets/gallery/all/socail media/tute cover.webp'
import g41 from '../../assets/gallery/all/socail media/tute mockup.webp'
import g42 from '../../assets/gallery/all/socail media/tute mockup2.webp'
import g43 from '../../assets/gallery/all/socail media/tute mockup251019.webp'
import g44 from '../../assets/gallery/all/socail media/type setting post.webp'
import g45 from '../../assets/gallery/all/socail media/umesh flyer november.webp'
import g46 from '../../assets/gallery/all/socail media/umesh flyer.webp'
import g47 from '../../assets/gallery/all/socail media/umesh flyer1.webp'
import g48 from '../../assets/gallery/all/socail media/umesh octomber.webp'
import g49 from '../../assets/gallery/all/socail media/umesh001.webp'
import g50 from '../../assets/gallery/all/socail media/umesh5445.webp'
import g51 from '../../assets/gallery/all/socail media/yamith december.webp'
import g52 from '../../assets/gallery/all/socail media/yamith.webp'

const works = [
  { id: 1,  img: g1,  category: 'Social Media' },
  { id: 2,  img: g2,  category: 'Social Media' },
  { id: 3,  img: g3,  category: 'Social Media' },
  { id: 4,  img: g4,  category: 'Social Media' },
  { id: 5,  img: g5,  category: 'Social Media' },
  { id: 6,  img: g6,  category: 'Social Media' },
  { id: 7,  img: g7,  category: 'Social Media' },
  { id: 8,  img: g8,  category: 'Social Media' },
  { id: 9,  img: g9,  category: 'Social Media' },
  { id: 10, img: g10, category: 'Social Media' },
  { id: 11, img: g11, category: 'Social Media' },
  { id: 12, img: g12, category: 'Social Media' },
  { id: 13, img: g13, category: 'Social Media' },
  { id: 14, img: g14, category: 'Social Media' },
  { id: 15, img: g15, category: 'Social Media' },
  { id: 16, img: g16, category: 'Social Media' },
  { id: 17, img: g17, category: 'Social Media' },
  { id: 18, img: g18, category: 'Social Media' },
  { id: 19, img: g19, category: 'Social Media' },
  { id: 20, img: g20, category: 'Social Media' },
  { id: 21, img: g21, category: 'Social Media' },
  { id: 22, img: g22, category: 'Social Media' },
  { id: 23, img: g23, category: 'Social Media' },
  { id: 24, img: g24, category: 'Social Media' },
  { id: 25, img: g25, category: 'Social Media' },
  { id: 26, img: g26, category: 'Social Media' },
  { id: 27, img: g27, category: 'Social Media' },
  { id: 28, img: g28, category: 'Social Media' },
  { id: 29, img: g29, category: 'Social Media' },
  { id: 30, img: g30, category: 'Social Media' },
  { id: 31, img: g31, category: 'Social Media' },
  { id: 32, img: g32, category: 'Social Media' },
  { id: 33, img: g33, category: 'Social Media' },
  { id: 34, img: g34, category: 'Social Media' },
  { id: 35, img: g35, category: 'Social Media' },
  { id: 36, img: g36, category: 'Social Media' },
  { id: 37, img: g37, category: 'Social Media' },
  { id: 38, img: g38, category: 'Social Media' },
  { id: 39, img: g39, category: 'Social Media' },
  { id: 40, img: g40, category: 'Social Media' },
  { id: 41, img: g41, category: 'Social Media' },
  { id: 42, img: g42, category: 'Social Media' },
  { id: 43, img: g43, category: 'Social Media' },
  { id: 44, img: g44, category: 'Social Media' },
  { id: 45, img: g45, category: 'Social Media' },
  { id: 46, img: g46, category: 'Social Media' },
  { id: 47, img: g47, category: 'Social Media' },
  { id: 48, img: g48, category: 'Social Media' },
  { id: 49, img: g49, category: 'Social Media' },
  { id: 50, img: g50, category: 'Social Media' },
  { id: 51, img: g51, category: 'Social Media' },
  { id: 52, img: g52, category: 'Social Media' },
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

export default function SocialMedia() {
  return (
   <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}>
      <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-6 md:py-20 lg:py-8'>
        <h1 className='font-heading font-bold text-[clamp(40px,7vw,88px)] text-[#2C2C2A] leading-none mb-6'>
          Social Media Designs
        </h1>
        <p className='font-body text-sm text-[#444441] max-w-2xl leading-relaxed mb-2'>
             A collection of my social media design works, showcasing a range of subjects and styles. From Instagram posts to Facebook covers, each piece is a testament to the power of thoughtful design in the digital space.
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