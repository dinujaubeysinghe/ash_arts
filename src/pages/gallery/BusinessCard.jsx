import { useState } from 'react'
import GalleryFilter from '../../components/GalleryFilter'

import g1 from '../../assets/gallery/all/business card/2026030920.webp'
import g2 from '../../assets/gallery/all/business card/akshamala business card back.webp'
import g3 from '../../assets/gallery/all/business card/akshamala business card.webp'
import g4 from '../../assets/gallery/all/business card/ashan business card details side.webp'
import g5 from '../../assets/gallery/all/business card/ashan business card.webp'
import g6 from '../../assets/gallery/all/business card/buicness card.webp'
import g7 from '../../assets/gallery/all/business card/card 2.webp'
import g8 from '../../assets/gallery/all/business card/card.webp'

import g11 from '../../assets/gallery/all/business card/bee logo.webp'
import g12 from '../../assets/gallery/all/business card/Ceylon Friendly tour.webp'
import g13 from '../../assets/gallery/all/business card/Ceylon Friendly tour1.webp'
import g14 from '../../assets/gallery/all/business card/h brand.webp'
import g15 from '../../assets/gallery/all/business card/k - vogue.webp'
import g16 from '../../assets/gallery/all/business card/Kalabox.webp'
import g17 from '../../assets/gallery/all/business card/kavindu.webp'
import g18 from '../../assets/gallery/all/business card/logo 6.webp'
import g19 from '../../assets/gallery/all/business card/mudalali mama.webp'
import g20 from '../../assets/gallery/all/business card/tryste.webp'
import g21 from '../../assets/gallery/all/business card/Untitled-1.webp'

const works = [
  { id: 1, img: g1, category: 'Business Card' },
  { id: 2, img: g11, category: 'Logo Design' },
  { id: 3, img: g2, category: 'Business Card' },
  { id: 4, img: g12, category: 'Logo Design' },
  { id: 5, img: g13, category: 'Logo Design' },
  { id: 6, img: g3, category: 'Business Card' },
  { id: 7, img: g14, category: 'Logo Design' },
  { id: 8, img: g4, category: 'Business Card' },
  { id: 9, img: g15, category: 'Logo Design' },
  { id: 10, img: g5, category: 'Business Card' },
  { id: 11, img: g16, category: 'Logo Design' },
  { id: 12, img: g17, category: 'Logo Design' },
  { id: 13, img: g6, category: 'Business Card' },
  { id: 14, img: g18, category: 'Logo Design' },
  { id: 15, img: g7, category: 'Business Card' },
  { id: 16, img: g19, category: 'Logo Design' },
  { id: 17, img: g20, category: 'Logo Design' },
  { id: 18, img: g8, category: 'Business Card' },
  { id: 19, img: g21, category: 'Logo Design' },
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

export default function BusinessCards() {
  return (
     <div>
            <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-6 md:py-20 lg:py-8'>
            <h1 className='font-heading font-bold text-[clamp(40px,7vw,88px)] text-[#2C2C2A] leading-none mb-6'>
              Brand Designs
            </h1>
            <p className='font-body text-sm text-[#444441] max-w-2xl leading-relaxed mb-2'>
              A collection of my brand design works, showcasing a range of subjects and styles. From business cards to logos, each piece is a testament to the power of thoughtful design.
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