import { useState } from 'react'
import GalleryFilter from '../../components/GalleryFilter'

import g1 from '../../assets/gallery/all/tshirt/2.webp'
import g2 from '../../assets/gallery/all/tshirt/3.webp'
import g3 from '../../assets/gallery/all/tshirt/5.webp'
import g4 from '../../assets/gallery/all/tshirt/Clothing brand.webp'
import g5 from '../../assets/gallery/all/tshirt/gray color2.webp'
import g6 from '../../assets/gallery/all/tshirt/t shirt 2.webp'
import g7 from '../../assets/gallery/all/tshirt/t shirt.webp'

const works = [
  { id: 1, img: g1, category: 'Printing Design' },
  { id: 2, img: g2, category: 'Printing Design' },
  { id: 3, img: g3, category: 'Printing Design' },
  { id: 4, img: g4, category: 'Printing Design' },
  { id: 5, img: g5, category: 'Printing Design' },
  { id: 6, img: g6, category: 'Printing Design' },
  { id: 7, img: g7, category: 'Printing Design' },
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

export default function PrintingDesigns() {
  return (
    <div>
        <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-6 md:py-20 lg:py-8'>
        <h1 className='font-heading font-bold text-[clamp(40px,7vw,88px)] text-[#2C2C2A] leading-none mb-6'>
          Printing Designs
        </h1>
        <p className='font-body text-sm text-[#444441] max-w-2xl leading-relaxed mb-2'>
          A collection of my printing design works, showcasing a range of subjects and styles. From t-shirt designs to clothing brands, each piece is a testament to the power of thoughtful design in the world of printing.
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
    </div>
  )
}