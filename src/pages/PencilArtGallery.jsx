import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ─── DATA ─────────────────────────────────────────────────────────────────────
// Replace img: null with your real imports
const allWorks = [
  { id: 1,  title: 'Silent Hours',        medium: 'Graphite on paper',    size: 'A2', year: '2024', category: 'Pencil Art',       aspect: 'tall',   img: null },
  { id: 2,  title: 'Weathered Hands',     medium: 'Graphite on cartridge',size: 'A3', year: '2024', category: 'Pencil Art',       aspect: 'tall',   img: null },
  { id: 3,  title: 'Evening Light',       medium: 'Pencil on cartridge',  size: 'A3', year: '2024', category: 'Pencil Art',       aspect: 'wide',   img: null },
  { id: 4,  title: 'The Watcher',         medium: 'Graphite on paper',    size: 'A2', year: '2023', category: 'Pencil Art',       aspect: 'tall',   img: null },
  { id: 5,  title: 'Still Life No. 7',    medium: 'Pencil on Bristol',    size: 'A4', year: '2024', category: 'Pencil Art',       aspect: 'square', img: null },
  { id: 6,  title: 'Coastal Ruins',       medium: 'Pencil on cartridge',  size: 'A3', year: '2023', category: 'Pencil Art',       aspect: 'wide',   img: null },
  { id: 7,  title: 'Stream Drop',         medium: 'YouTube thumbnail',    size: '1280x720', year: '2024', category: 'Thumbnails',  aspect: 'wide',   img: null },
  { id: 8,  title: 'Tech Talk Ep.12',     medium: 'YouTube thumbnail',    size: '1280x720', year: '2024', category: 'Thumbnails',  aspect: 'wide',   img: null },
  { id: 9,  title: 'Flame Tee',           medium: 'T-shirt print',        size: 'A4', year: '2024', category: 'Printing Designs', aspect: 'tall',   img: null },
  { id: 10, title: 'Urban Wave',          medium: 'T-shirt print',        size: 'A4', year: '2023', category: 'Printing Designs', aspect: 'tall',   img: null },
  { id: 11, title: 'Minimal Biz Card',    medium: 'Business card',        size: '3.5x2in', year: '2024', category: 'Business Cards', aspect: 'wide', img: null },
  { id: 12, title: 'Studio Brand',        medium: 'Brand identity',       size: 'A4', year: '2024', category: 'Business Cards',   aspect: 'square', img: null },
  { id: 13, title: 'Reel Cover — April',  medium: 'Instagram post',       size: '1080x1080', year: '2024', category: 'Social Media Posts', aspect: 'square', img: null },
  { id: 14, title: 'Story Series Vol.2',  medium: 'Instagram story',      size: '1080x1920', year: '2024', category: 'Social Media Posts', aspect: 'tall',   img: null },
  { id: 15, title: 'Inner Silence',       medium: 'Graphite on paper',    size: 'A3', year: '2023', category: 'Pencil Art',       aspect: 'square', img: null },
  { id: 16, title: 'Morning Dew',         medium: 'Pencil on Bristol',    size: 'A4', year: '2024', category: 'Pencil Art',       aspect: 'tall',   img: null },
  { id: 17, title: 'Brand Flip',          medium: 'Photo manipulation',   size: 'A4', year: '2024', category: 'Manipulations',    aspect: 'square', img: null },
  { id: 18, title: 'Dashboard Concept',   medium: 'Figma',                size: '1440px', year: '2024', category: 'UI/UX Designs', aspect: 'wide',  img: null },
]

// Category → route mapping
const categoryRoutes = {
  'Pencil Art':       '/gallery/pencil-art',
  'Social Media Posts': '/gallery/social-media',
  'Business Cards':   '/gallery/business-cards',
  'Printing Designs': '/gallery/printing-designs',
  'Thumbnails':       '/gallery/thumbnails',
  'Manipulations':    '/gallery/manipulations',
  'UI/UX Designs':    '/gallery/uiux-designs',
}

// Category browse cards
const browseCategories = [
  { label: 'Pencil Art',         to: '/gallery/pencil-art',       count: allWorks.filter(w => w.category === 'Pencil Art').length       },
  { label: 'Social Media Posts', to: '/gallery/social-media',     count: allWorks.filter(w => w.category === 'Social Media Posts').length },
  { label: 'Business Cards',     to: '/gallery/business-cards',   count: allWorks.filter(w => w.category === 'Business Cards').length   },
  { label: 'Printing Designs',   to: '/gallery/printing-designs', count: allWorks.filter(w => w.category === 'Printing Designs').length },
  { label: 'Thumbnails',         to: '/gallery/thumbnails',       count: allWorks.filter(w => w.category === 'Thumbnails').length       },
  { label: 'Manipulations',      to: '/gallery/manipulations',    count: allWorks.filter(w => w.category === 'Manipulations').length    },
  { label: 'UI/UX Designs',      to: '/gallery/uiux-designs',     count: allWorks.filter(w => w.category === 'UI/UX Designs').length    },
]

// ─── PLACEHOLDER SVG ──────────────────────────────────────────────────────────
const tones = {
  tall:   ['#D8D6CE', '#C8C6BC', '#BCBAB0', '#D0CEC4'],
  wide:   ['#CACCC4', '#D0CEC4', '#C4C2B8', '#CCCAC0'],
  square: ['#CCCAC0', '#C2C0B6', '#D4D2C8', '#C8C6BE'],
}

function Placeholder({ aspect, index }) {
  const bg = tones[aspect][index % 4]
  const dark = '#5A5855'
  const mid  = '#8A8880'

  if (aspect === 'tall') return (
    <svg viewBox='0 0 260 340' xmlns='http://www.w3.org/2000/svg'
      style={{ width: '100%', height: '100%', display: 'block' }} aria-hidden='true'>
      <rect width='260' height='340' fill={bg} />
      {[...Array(20)].map((_, i) => (
        <line key={i} x1={i*14} y1='0' x2={i*14-8} y2='340' stroke={mid} strokeWidth='0.4' opacity='0.18'/>
      ))}
      <ellipse cx='130' cy='126' rx='58' ry='72' fill='none' stroke={dark} strokeWidth='0.9' opacity='0.35'/>
      <circle cx='118' cy='108' r='7' fill={dark} opacity='0.3'/>
      <circle cx='116' cy='106' r='3' fill='#F7F7F5' opacity='0.55'/>
    </svg>
  )

  if (aspect === 'wide') return (
    <svg viewBox='0 0 320 215' xmlns='http://www.w3.org/2000/svg'
      style={{ width: '100%', height: '100%', display: 'block' }} aria-hidden='true'>
      <rect width='320' height='215' fill={bg} />
      {[...Array(22)].map((_, i) => (
        <line key={i} x1='0' y1={i*10} x2='320' y2={i*10+4} stroke={mid} strokeWidth='0.4' opacity='0.18'/>
      ))}
      <path d='M0 130 Q80 80 160 110 Q240 140 320 90' fill='none' stroke={dark} strokeWidth='1.1' opacity='0.35'/>
    </svg>
  )

  return (
    <svg viewBox='0 0 280 280' xmlns='http://www.w3.org/2000/svg'
      style={{ width: '100%', height: '100%', display: 'block' }} aria-hidden='true'>
      <rect width='280' height='280' fill={bg} />
      {[...Array(14)].map((_, i) => (
        <line key={i} x1={i*20} y1='0' x2={i*20+8} y2='280' stroke={mid} strokeWidth='0.4' opacity='0.18'/>
      ))}
      <rect x='56' y='56' width='168' height='168' fill='none' stroke={dark} strokeWidth='0.7' opacity='0.28'/>
      <circle cx='140' cy='140' r='38' fill={dark} opacity='0.08'/>
    </svg>
  )
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function Lightbox({ work, onClose, onPrev, onNext }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  return (
    <div onClick={onClose} style={{ animation: 'fadeIn 0.2s ease', zIndex: 200 }}
      className='fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-10'>
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>

      <button onClick={onClose} aria-label='Close'
        className='absolute top-5 right-5 w-9 h-9 flex items-center justify-center
          border border-white/20 text-white/60 hover:text-white hover:border-white/40
          transition-colors rounded-sm text-lg'>✕</button>

      <button onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label='Previous'
        className='absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10
          flex items-center justify-center border border-white/20 text-white/60
          hover:text-white hover:border-white/40 transition-colors rounded-sm'>←</button>

      <button onClick={(e) => { e.stopPropagation(); onNext() }} aria-label='Next'
        className='absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10
          flex items-center justify-center border border-white/20 text-white/60
          hover:text-white hover:border-white/40 transition-colors rounded-sm'>→</button>

      <div onClick={(e) => e.stopPropagation()}
        style={{ animation: 'slideUp 0.3s cubic-bezier(0.16,1,0.3,1)' }}
        className='flex flex-col items-center max-w-2xl w-full'>
        <style>{`@keyframes slideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>
        <div className='w-full rounded-sm overflow-hidden'
          style={{ aspectRatio: work.aspect === 'tall' ? '3/4' : work.aspect === 'wide' ? '4/3' : '1/1', maxHeight: '65vh' }}>
          {work.img
            ? <img src={work.img} alt={work.title} className='w-full h-full object-cover'/>
            : <Placeholder aspect={work.aspect} index={work.id}/>
          }
        </div>
        <div className='mt-5 text-center'>
          <p className='font-heading italic text-2xl text-white/95 mb-1'>{work.title}</p>
          <p className='font-body text-xs text-white/45 tracking-widest uppercase'>
            {work.medium} · {work.size} · {work.year}
          </p>
          {categoryRoutes[work.category] && (
            <Link to={categoryRoutes[work.category]}
              onClick={onClose}
              className='inline-block mt-3 font-body text-xs text-white/40
                border-b border-white/20 pb-0.5 hover:text-white/70 transition-colors'>
              More {work.category} →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── GALLERY CARD ─────────────────────────────────────────────────────────────
function GalleryCard({ work, index, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='relative overflow-hidden rounded-sm cursor-pointer mb-3 md:mb-4 break-inside-avoid'>

      <div className='w-full overflow-hidden'
        style={{ aspectRatio: work.aspect === 'tall' ? '3/4' : work.aspect === 'wide' ? '4/3' : '1/1' }}>
        <div className={`w-full h-full transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}>
          {work.img
            ? <img src={work.img} alt={work.title} className='w-full h-full object-cover'/>
            : <Placeholder aspect={work.aspect} index={index}/>
          }
        </div>
      </div>

      {/* Category badge — always visible */}
      <div className='absolute top-3 left-3'>
        <span className='font-body text-[10px] tracking-wider uppercase
          bg-white/90 text-[#2C2C2A] px-2.5 py-1 rounded-sm'>
          {work.category}
        </span>
      </div>

      {/* Hover overlay */}
      <div className={`absolute inset-0 flex flex-col justify-end p-4
        bg-gradient-to-t from-black/65 via-black/15 to-transparent
        transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <p className='font-heading italic text-lg text-white/95 leading-tight'>{work.title}</p>
        <p className='font-body text-xs text-white/55 mt-1 tracking-wider'>{work.medium} · {work.year}</p>
        <p className='font-body text-[10px] text-white/35 mt-2 tracking-widest uppercase'>Click to enlarge</p>
      </div>
    </div>
  )
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [count,    setCount]    = useState(12)

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 60)
    return () => clearTimeout(t)
  }, [])

  const openLightbox  = (idx) => setLightbox(idx)
  const closeLightbox = ()    => setLightbox(null)
  const prevWork      = ()    => setLightbox(i => (i - 1 + allWorks.length) % allWorks.length)
  const nextWork      = ()    => setLightbox(i => (i + 1) % allWorks.length)
  const visible       = allWorks.slice(0, count)

  return (
    <div className='min-h-screen'>

      {/* ── HEADER ─────────────────────────────── */}
      <section style={{ opacity: revealed ? 1 : 0, transform: revealed ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.7s ease' }}
        className='px-5 sm:px-10 md:px-16 lg:px-20 pt-10 pb-10 border-b border-gray-100'>

        <div className='flex flex-col md:flex-row md:items-end justify-between gap-4'>
          <div>
            <p className='font-body text-xs tracking-[0.18em] text-gray-400 uppercase mb-2'>
              {allWorks.length} works across {browseCategories.length} categories
            </p>
            <h1 className='font-heading font-bold text-[clamp(36px,6vw,72px)] text-[#2C2C2A] leading-none'>
              All <em className='italic text-gray-300'>Works</em>
            </h1>
          </div>

          {/* Browse by category link */}
          <p className='font-body text-xs text-gray-400'>
            Browse by category ↓
          </p>
        </div>
      </section>

      {/* ── CATEGORY BROWSE STRIP ──────────────── */}
      <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-6 border-b border-gray-100
        overflow-x-auto scrollbar-hide'>
        <div className='flex gap-3 min-w-max md:min-w-0 md:flex-wrap'>
          {browseCategories.map(cat => (
            <Link key={cat.to} to={cat.to}
              className='flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-sm
                hover:border-[#2C2C2A] hover:text-[#2C2C2A] transition-all duration-200 group'>
              <span className='font-body text-xs tracking-wider text-gray-500 group-hover:text-[#2C2C2A] transition-colors whitespace-nowrap'>
                {cat.label}
              </span>
              <span className='font-body text-[10px] text-gray-300 group-hover:text-gray-400 transition-colors'>
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── MASONRY GRID ───────────────────────── */}
      <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-10 md:py-14'>
        <div className='columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4'>
          {visible.map((work, i) => (
            <GalleryCard
              key={work.id}
              work={work}
              index={i}
              onClick={() => openLightbox(allWorks.indexOf(work))}
            />
          ))}
        </div>

        {/* Load more */}
        {count < allWorks.length && (
          <div className='flex justify-center mt-12'>
            <button onClick={() => setCount(c => c + 8)}
              className='font-body text-xs tracking-widest uppercase px-10 py-4
                border border-gray-200 text-gray-400 rounded-sm
                hover:border-[#2C2C2A] hover:text-[#2C2C2A] transition-all duration-200'>
              Load more ({allWorks.length - count} remaining)
            </button>
          </div>
        )}
      </section>

      {/* ── LIGHTBOX ───────────────────────────── */}
      {lightbox !== null && (
        <Lightbox
          work={allWorks[lightbox]}
          onClose={closeLightbox}
          onPrev={prevWork}
          onNext={nextWork}
        />
      )}

    </div>
  )
}