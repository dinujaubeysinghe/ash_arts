import { useState } from 'react'
import GalleryFilter from '../../components/GalleryFilter'

import g1  from '../../assets/gallery/all/uiux/About page.webp'
import g2  from '../../assets/gallery/all/uiux/Contact page.webp'
import g3  from '../../assets/gallery/all/uiux/Create account.webp'
import g4  from '../../assets/gallery/all/uiux/Forgot password.webp'
import g5  from '../../assets/gallery/all/uiux/Frame 1.webp'
import g6  from '../../assets/gallery/all/uiux/Home page.webp'
import g7  from '../../assets/gallery/all/uiux/Legal information.webp'
import g8  from '../../assets/gallery/all/uiux/Login.webp'
import g9  from '../../assets/gallery/all/uiux/Order tracking - Order Status.webp'
import g10 from '../../assets/gallery/all/uiux/Order tracking - order details.webp'
import g11 from '../../assets/gallery/all/uiux/Otp.webp'
import g12 from '../../assets/gallery/all/uiux/Shop page - payment ( Shiping details ).webp'
import g13 from '../../assets/gallery/all/uiux/Shop page - payment ( cart).webp'
import g14 from '../../assets/gallery/all/uiux/Shop page - payment (Confirmation).webp'
import g15 from '../../assets/gallery/all/uiux/Shop page - payment (OTP).webp'
import g16 from '../../assets/gallery/all/uiux/Shop page - payment (Payment)-1.webp'
import g17 from '../../assets/gallery/all/uiux/Shop page - payment (Payment)-2.webp'
import g18 from '../../assets/gallery/all/uiux/Shop page - payment (Payment).webp'
import g19 from '../../assets/gallery/all/uiux/Shop page - payment (card payment).webp'
import g20 from '../../assets/gallery/all/uiux/Shop page 2.webp'
import g21 from '../../assets/gallery/all/uiux/Shop page.webp'
import g22 from '../../assets/gallery/all/uiux/Shop page1.webp'

const works = [
  { id: 1,  img: g1,  category: 'UI/UX Design' },
  { id: 2,  img: g2,  category: 'UI/UX Design' },
  { id: 3,  img: g3,  category: 'UI/UX Design' },
  { id: 4,  img: g4,  category: 'UI/UX Design' },
  { id: 5,  img: g5,  category: 'UI/UX Design' },
  { id: 6,  img: g6,  category: 'UI/UX Design' },
  { id: 7,  img: g7,  category: 'UI/UX Design' },
  { id: 8,  img: g8,  category: 'UI/UX Design' },
  { id: 9,  img: g9,  category: 'UI/UX Design' },
  { id: 10, img: g10, category: 'UI/UX Design' },
  { id: 11, img: g11, category: 'UI/UX Design' },
  { id: 12, img: g12, category: 'UI/UX Design' },
  { id: 13, img: g13, category: 'UI/UX Design' },
  { id: 14, img: g14, category: 'UI/UX Design' },
  { id: 15, img: g15, category: 'UI/UX Design' },
  { id: 16, img: g16, category: 'UI/UX Design' },
  { id: 17, img: g17, category: 'UI/UX Design' },
  { id: 18, img: g18, category: 'UI/UX Design' },
  { id: 19, img: g19, category: 'UI/UX Design' },
  { id: 20, img: g20, category: 'UI/UX Design' },
  { id: 21, img: g21, category: 'UI/UX Design' },
  { id: 22, img: g22, category: 'UI/UX Design' },
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

export default function UIUXDesigns() {
  return (
    <div>
            <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-6 md:py-20 lg:py-8'>
            <h1 className='font-heading font-bold text-[clamp(40px,7vw,88px)] text-[#2C2C2A] leading-none mb-6'>
              UI/UX Designs
            </h1>
            <p className='font-body text-sm text-[#444441] max-w-2xl leading-relaxed mb-2'>
              A collection of my UI/UX design works, showcasing a range of subjects and styles. From mobile apps to web interfaces, each piece is a testament to the power of thoughtful design.
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