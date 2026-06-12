import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/home/ashenlogo.webp'

const galleryItems = [
  { to: '/gallery',                  label: 'All Works'          },
  { to: '/gallery/pencil-art',       label: 'Pencil Art'         },
  { to: '/gallery/social-media',     label: 'Social Media Posts' },
  { to: '/gallery/business-cards',   label: 'Business Cards'     },
  { to: '/gallery/printing-designs', label: 'Printing Designs'   },
  { to: '/gallery/thumbnails',       label: 'Thumbnails'         },
  { to: '/gallery/manipulations',    label: 'Manipulations'      },
  { to: '/gallery/uiux-designs',     label: 'UI/UX Designs'      },
]

const NavBar = () => {
  const [scrolled,      setScrolled]      = useState(false)
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [galleryOpen,   setGalleryOpen]   = useState(false)
  const [mobileGallery, setMobileGallery] = useState(false)
  const location = useLocation()
  const dropRef  = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setGalleryOpen(false)
    setMobileGallery(false)
  }, [location])

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target))
        setGalleryOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isGalleryActive = location.pathname.startsWith('/gallery')

  const linkClass = (isActive) =>
    `font-body text-xs tracking-widest transition-colors duration-200 cursor-pointer
    ${isActive
      ? 'text-[#2C2C2A] border-b border-[#2C2C2A] pb-0.5'
      : 'text-gray-400 hover:text-[#2C2C2A]'
    }`

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-white border-b border-gray-100'
        }`}>

        <div className='flex justify-between items-center px-5 sm:px-10 md:px-16 lg:px-20 h-16 md:h-20'>

          {/* Desktop links — LEFT */}
          <div className='hidden md:flex items-center gap-10'>

            <NavLink to='/' className={({ isActive }) => linkClass(isActive)}>
              HOME
            </NavLink>

            <NavLink to='/about' className={({ isActive }) => linkClass(isActive)}>
              ABOUT
            </NavLink>

            {/* Gallery dropdown */}
            <div ref={dropRef} className='relative'>
              <button
                onClick={() => setGalleryOpen(o => !o)}
                className={`font-body text-xs tracking-widest transition-colors duration-200 flex items-center gap-1.5
                  ${isGalleryActive
                    ? 'text-[#2C2C2A] border-b border-[#2C2C2A] pb-0.5'
                    : 'text-gray-400 hover:text-[#2C2C2A]'
                  }`}>
                GALLERY
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${galleryOpen ? 'rotate-180' : ''}`}
                  fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                </svg>
              </button>

              {/* Dropdown panel */}
              {galleryOpen && (
                <div className='absolute top-full left-1/2 -translate-x-1/2 mt-4
                  bg-white border border-gray-100 shadow-lg rounded-sm w-52 py-2 z-50'>

                  {/* Arrow */}
                  <div className='absolute -top-1.5 left-1/2 -translate-x-1/2
                    w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45' />

                  {/* All Works — separated with a divider */}
                  <NavLink to='/gallery'
                    end
                    className={({ isActive }) =>
                      `block px-5 py-2.5 font-body text-xs tracking-wider transition-colors duration-150
                      ${isActive
                        ? 'text-[#2C2C2A] bg-gray-50 font-medium'
                        : 'text-gray-400 hover:text-[#2C2C2A] hover:bg-gray-50'
                      }`
                    }>
                    All Works
                  </NavLink>

                  <div className='border-t border-gray-100 my-1.5' />

                  {/* Category items */}
                  {galleryItems.slice(1).map(item => (
                    <NavLink key={item.to} to={item.to}
                      className={({ isActive }) =>
                        `block px-5 py-2.5 font-body text-xs tracking-wider transition-colors duration-150
                        ${isActive
                          ? 'text-[#2C2C2A] bg-gray-50 font-medium'
                          : 'text-gray-400 hover:text-[#2C2C2A] hover:bg-gray-50'
                        }`
                      }>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to='/contact' className={({ isActive }) => linkClass(isActive)}>
              CONTACT
            </NavLink>

          </div>

          {/* Mobile hamburger — LEFT */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label='Toggle menu'
            className='md:hidden flex flex-col justify-center gap-1.5 p-2'>
            <span className={`block h-px w-6 bg-[#2C2C2A] transition-all duration-300
              ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px w-6 bg-[#2C2C2A] transition-all duration-300
              ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-[#2C2C2A] transition-all duration-300
              ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {/* Logo — RIGHT */}
          <NavLink to='/'>
            <img src={logo} alt='Ash Arts logo' className='h-10 md:h-14 w-auto' />
          </NavLink>

        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className='md:hidden border-t border-gray-100 bg-white px-5 py-4 flex flex-col gap-1'>

            <NavLink to='/'
              className={({ isActive }) =>
                `font-body text-xs tracking-widest py-3 border-b border-gray-100 transition-colors
                ${isActive ? 'text-[#2C2C2A] font-medium' : 'text-gray-400'}`}>
              HOME
            </NavLink>

            <NavLink to='/about'
              className={({ isActive }) =>
                `font-body text-xs tracking-widest py-3 border-b border-gray-100 transition-colors
                ${isActive ? 'text-[#2C2C2A] font-medium' : 'text-gray-400'}`}>
              ABOUT
            </NavLink>

            {/* Mobile gallery accordion */}
            <div className='border-b border-gray-100'>
              <button
                onClick={() => setMobileGallery(o => !o)}
                className={`w-full flex justify-between items-center font-body text-xs tracking-widest py-3 transition-colors
                  ${isGalleryActive ? 'text-[#2C2C2A] font-medium' : 'text-gray-400'}`}>
                GALLERY
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${mobileGallery ? 'rotate-180' : ''}`}
                  fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                </svg>
              </button>

              {mobileGallery && (
                <div className='flex flex-col pl-4 pb-3'>

                  {/* All Works */}
                  <NavLink to='/gallery' end
                    className={({ isActive }) =>
                      `font-body text-xs tracking-wider py-2.5 border-b border-gray-100 transition-colors
                      ${isActive ? 'text-[#2C2C2A] font-medium' : 'text-gray-400'}`}>
                    All Works
                  </NavLink>

                  {/* Categories */}
                  {galleryItems.slice(1).map(item => (
                    <NavLink key={item.to} to={item.to}
                      className={({ isActive }) =>
                        `font-body text-xs tracking-wider py-2.5 border-b border-gray-100 last:border-0 transition-colors
                        ${isActive ? 'text-[#2C2C2A] font-medium' : 'text-gray-400'}`}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to='/contact'
              className={({ isActive }) =>
                `font-body text-xs tracking-widest py-3 transition-colors
                ${isActive ? 'text-[#2C2C2A] font-medium' : 'text-gray-400'}`}>
              CONTACT
            </NavLink>

          </div>
        )}

      </nav>

      {/* Spacer */}
      <div className='h-16 md:h-20' />
    </>
  )
}

export default NavBar