import { useState } from 'react'
import GalleryFilter from '../../components/GalleryFilter'

import g1  from '../../assets/gallery/all/thumbnail/0000.webp'
import g2  from '../../assets/gallery/all/thumbnail/Kalabox thumbnail.webp'
import g3  from '../../assets/gallery/all/thumbnail/Picsart_24-04-18_13-06-58-932.webp'
import g4  from '../../assets/gallery/all/thumbnail/Thumnail.webp'
import g5  from '../../assets/gallery/all/thumbnail/art vlog 3 1.webp'
import g6  from '../../assets/gallery/all/thumbnail/gimbal.webp'
import g7  from '../../assets/gallery/all/thumbnail/kalugala.webp'
import g8  from '../../assets/gallery/all/thumbnail/punchi maradhana tumbnail.webp'
import g9  from '../../assets/gallery/all/thumbnail/sun goes down.webp'
import g10 from '../../assets/gallery/all/thumbnail/yamith you tube thumils02.webp'
import g11 from '../../assets/gallery/all/thumbnail/yamith youtube thumnails 01.webp'

const works = [
  { id: 1,  img: g1,  category: 'Thumbnail' },
  { id: 2,  img: g2,  category: 'Thumbnail' },
  { id: 3,  img: g3,  category: 'Thumbnail' },
  { id: 4,  img: g4,  category: 'Thumbnail' },
  { id: 5,  img: g5,  category: 'Thumbnail' },
  { id: 6,  img: g6,  category: 'Thumbnail' },
  { id: 7,  img: g7,  category: 'Thumbnail' },
  { id: 8,  img: g8,  category: 'Thumbnail' },
  { id: 9,  img: g9,  category: 'Thumbnail' },
  { id: 10, img: g10, category: 'Thumbnail' },
  { id: 11, img: g11, category: 'Thumbnail' },
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

export default function Thumbnails() {
  return (
    <div>
            <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-6 md:py-20 lg:py-8'>
            <h1 className='font-heading font-bold text-[clamp(40px,7vw,88px)] text-[#2C2C2A] leading-none mb-6'>
              Thumbnails
            </h1>
            <p className='font-body text-sm text-[#444441] max-w-2xl leading-relaxed mb-2'>
              A collection of my thumbnail designs, showcasing a range of subjects and styles. From YouTube thumbnails to social media graphics, each piece is a testament to the importance of eye-catching design in the world of digital content.
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