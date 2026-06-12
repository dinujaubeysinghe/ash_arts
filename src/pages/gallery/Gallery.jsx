import React from 'react'
import GalleryFilter from '../../components/GalleryFilter'
import { useState } from 'react'

import g1 from '../../assets/gallery/all/pencil/paa6.jpeg'
import g2 from '../../assets/gallery/all/manipulation/nissan.webp'
import g3 from '../../assets/home/ash4.jpeg'
import g4 from '../../assets/gallery/all/tshirt/3.webp'
import g5 from '../../assets/home/ash3.jpeg'
import g6 from '../../assets/home/ash2.jpeg'
import g7 from '../../assets/home/ash1.jpeg'
import g8 from '../../assets/home/ticket november.webp'
import g9 from '../../assets/home/p1.jpg'
import g10 from '../../assets/gallery/all/manipulation/water.webp'
import g11 from '../../assets/gallery/all/thumbnail/0000.webp'
import g12 from '../../assets/gallery/all/pencil/paa2.jpeg'
import g13 from '../../assets/gallery/all/manipulation/literact day.webp'
import g14 from '../../assets/gallery/all/business card/card.webp'
import g15 from '../../assets/home/p3.png'
import g16 from '../../assets/gallery/all/manipulation/2026 new year.webp'
import g17 from '../../assets/gallery/all/business card/ashan business card.webp'
import g18 from '../../assets/gallery/all/socail media/SAMPLE.webp'
import g19 from '../../assets/gallery/all/thumbnail/kalugala.webp'
import g20 from '../../assets/gallery/all/tshirt/t shirt 2.webp'

import g21 from '../../assets/gallery/all/pencil/paa3.jpeg'
import g22 from '../../assets/gallery/all/pencil/paa4.jpeg'
import g23 from '../../assets/gallery/all/pencil/paa5.jpeg'
import g24 from '../../assets/gallery/all/thumbnail/Kalabox thumbnail.webp'
import g25 from '../../assets/gallery/all/thumbnail/sun goes down.webp'
import g26 from '../../assets/gallery/all/socail media/20260215.webp'
import g27 from '../../assets/gallery/all/socail media/yamith.webp'
import g28 from '../../assets/gallery/all/business card/akshamala business card.webp'
import g29 from '../../assets/gallery/all/tshirt/Clothing brand.webp'
import g30 from '../../assets/gallery/all/uiux/Home page.webp'
import g31 from '../../assets/gallery/all/uiux/Login.webp'
import g32 from '../../assets/gallery/all/manipulation/National Doy day.webp'
import g33 from '../../assets/gallery/all/socail media/umesh flyer.webp'
import g34 from '../../assets/gallery/all/thumbnail/gimbal.webp'
import g35 from '../../assets/gallery/all/tshirt/t shirt.webp'

const works = [
  { id: 1, img: g1,  category: 'Pencil Art'  },
  { id: 2,  img: g2,  category: 'Manipulation'},
  { id: 3,  img: g3,  category: 'UI/UX Design'},
  { id: 4,  img: g4,  category: 'Printing Design'},
  { id: 5,  img: g5,  category: 'Thumbnail'},
  { id: 6,  img: g6,  category: 'Logo Design' },
  { id: 7,  img: g7,  category: 'Manipulation'},
  { id: 8,  img: g8,  category: 'Social Media'},
  { id: 9,  img: g9,  category: 'Pencil Art' },
  { id: 10, img: g10, category: 'Manipulation' },
  { id: 11, img: g11, category: 'Thumbnail' },
  { id: 12, img: g12, category: 'Pencil Art'},
  { id: 13, img: g13, category: 'Manipulation'},
  { id: 14, img: g14, category: 'Business Card'},
  { id: 15, img: g15, category: 'Pencil Art' },
  { id: 16, img: g16, category: 'Manipulation'},
  { id: 17, img: g17, category: 'Business Card'},
  { id: 18, img: g18, category: 'Social Media'},
  { id: 19, img: g19, category: 'Thumbnail' },
  { id: 20, img: g20, category: 'Printing Design'},

  { id: 21, img: g21, category: 'Pencil Art'        },
  { id: 22, img: g22, category: 'Pencil Art'        },
  { id: 23, img: g23, category: 'Pencil Art'        },
  { id: 24, img: g24, category: 'Thumbnail'         },
  { id: 25, img: g25, category: 'Thumbnail'         },
  { id: 26, img: g26, category: 'Social Media'      },
  { id: 27, img: g27, category: 'Social Media'      },
  { id: 28, img: g28, category: 'Business Card'     },
  { id: 29, img: g29, category: 'Printing Design'   },
  { id: 30, img: g30, category: 'UI/UX Design'      },
  { id: 31, img: g31, category: 'UI/UX Design'      },
  { id: 32, img: g32, category: 'Manipulation'      },
  { id: 33, img: g33, category: 'Social Media'      },
  { id: 34, img: g34, category: 'Thumbnail'         },
  { id: 35, img: g35, category: 'Printing Design'   },
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
    <div>
        <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-6 md:py-20 lg:py-8'>
        <h1 className='font-heading font-bold text-[clamp(40px,7vw,88px)] text-[#2C2C2A] leading-none mb-6'>
          Gallery
        </h1>
        <p className='font-body text-sm text-[#444441] max-w-2xl leading-relaxed mb-2'>
          A collection of my works, ranging from digital art, graphic design, to UI/UX projects. Click on the categories below to explore different types of projects.
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