import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const categoryRoutes = [
  { label: 'All Works',          to: '/gallery'                  },
  { label: 'Pencil Art',         to: '/gallery/pencil-art'       },
  { label: 'Social Media Posts', to: '/gallery/social-media'     },
  { label: 'Brand Designs',      to: '/gallery/brand-designs'    },
  { label: 'Printing Designs',   to: '/gallery/printing-designs' },
  { label: 'Thumbnails',         to: '/gallery/thumbnails'       },
  { label: 'Manipulations',      to: '/gallery/manipulations'    },
  { label: 'UI/UX Designs',      to: '/gallery/uiux-designs'     },
]

export default function GalleryFilter({ children }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const active = categoryRoutes.find(cat => cat.to === pathname)

  return (
    <div className='min-h-screen'>

      {/* ── FILTER ───────────────────────── */}
      <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-5 border-b border-gray-100'>

        {/* Mobile: dropdown trigger */}
        <div className='md:hidden'>
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className='w-full flex items-center justify-between px-4 py-2 border border-gray-200 rounded-sm font-body text-xs tracking-wider text-[#2C2C2A]'
          >
            <span>{active?.label || 'All Works'}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
              fill='none' stroke='currentColor' viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M19 9l-7 7-7-7' />
            </svg>
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div className='mt-1 border border-gray-100 rounded-sm overflow-hidden shadow-sm'>
              {categoryRoutes.map(cat => {
                const isActive = pathname === cat.to
                return (
                  <button
                    key={cat.to}
                    onClick={() => { navigate(cat.to); setMenuOpen(false) }}
                    className={`w-full text-left px-4 py-2 font-body text-xs tracking-wider transition-colors duration-150
                      ${isActive
                        ? 'bg-[#2C2C2A] text-white'
                        : 'text-gray-400 hover:text-[#2C2C2A] hover:bg-gray-50'
                      }`}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Desktop: pill buttons */}
        <div className='hidden md:flex gap-2 flex-wrap'>
          {categoryRoutes.map(cat => {
            const isActive = pathname === cat.to
            return (
              <button
                key={cat.to}
                onClick={() => navigate(cat.to)}
                className={`font-body text-xs tracking-wider px-4 py-2 rounded-sm border
                  transition-all duration-200 whitespace-nowrap
                  ${isActive
                    ? 'bg-[#2C2C2A] text-white border-[#2C2C2A]'
                    : 'bg-transparent text-gray-400 border-gray-200 hover:border-[#2C2C2A] hover:text-[#2C2C2A]'
                  }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

      </section>

      {/* ── PAGE CONTENT ───────────────────────── */}
      {children}

    </div>
  )
}