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

  return (
    <div className='min-h-screen'>

      {/* ── FILTER ───────────────────────── */}
      <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-5
        border-b border-gray-100 overflow-x-auto'>
        <div className='flex gap-2 min-w-max md:min-w-0 md:flex-wrap'>
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
                  }`}>
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