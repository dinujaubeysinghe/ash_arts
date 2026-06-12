import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Curtain lives here — never unmounts
export function Curtain() {
  const { pathname } = useLocation()
  const curtainRef = useRef(null)
  const isFirst = useRef(true)

  useEffect(() => {
    const curtain = curtainRef.current
    if (!curtain) return

    if (isFirst.current) {
      // First load: start covered, then slide down
      curtain.style.transition = 'none'
      curtain.style.transform = 'translateY(0%)'
      isFirst.current = false

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          curtain.style.transition = 'transform 500ms cubic-bezier(0.76, 0, 0.24, 1)'
          curtain.style.transform = 'translateY(100%)'
        })
      })
      return
    }

    // Route change: slide in from top, then slide down
    curtain.style.transition = 'none'
    curtain.style.transform = 'translateY(-100%)'

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        curtain.style.transition = 'transform 500ms cubic-bezier(0.76, 0, 0.24, 1)'
        curtain.style.transform = 'translateY(0%)'

        setTimeout(() => {
          curtain.style.transform = 'translateY(100%)'
        }, 600)
      })
    })
  }, [pathname])

  return (
    <div
      ref={curtainRef}
      className='fixed inset-0 z-9999 bg-[#2C2C2A] pointer-events-none flex items-center justify-center'
      style={{ transform: 'translateY(0%)' }}
    >
      <span className='font-heading text-white text-2xl lg:text-5xl tracking-widest uppercase'>
        Ash Design Studio
      </span>
    </div>
  )
}

export default function PageTransition({ children }) {
  return <>{children}</>
}