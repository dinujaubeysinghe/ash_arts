import React from 'react'
import hero from '../assets/about/ash.webp'

const About = () => {
  return (
    <div>
      <div className='px-5 sm:px-10 md:px-16 lg:px-20 mt-12 md:mt-6 lg:mt-12 leading-none'>
              <img src={hero} alt='Ashen Dewinda' className='w-full h-auto rounded-sm' />
      </div>
      <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24'>
        <div className='mb-8 md:mb-12 text-center'>
          <h2 className='font-heading font-bold text-[clamp(28px,5vw,48px)] text-[#2C2C2A]'>
            About Me
          </h2>
        </div>

        <p className='font-body text-[clamp(14px,2vw,20px)] text-[#444441] leading-relaxed
          max-w-3xl mx-auto text-center mb-2 md:mb-16 lg:mb-2'>
          Hi, I’m Ash. My journey in design started with a simple pencil and a blank sheet of paper, capturing details through traditional sketching. Today, I bridge that raw, artistic intuition with modern technology as a Multimedia Designer.
        </p>
        <p className='font-body text-[clamp(14px,2vw,20px)] text-[#444441] leading-relaxed
          max-w-3xl mx-auto text-center mb-12 md:mb-16'>
          I transform abstract ideas into compelling visual experiences—blending the discipline of fine art with the dynamics of digital design. Whether it’s crafting intuitive digital layouts, multimedia content, or detailed illustrations, I bring a unique, hand-crafted perspective to every pixel.
        </p>
        <h2 className='text-center font-body text-[#888780] text-[clamp(14px,2vw,20px)]'>
          ─── Ashen Dewinda ───
        </h2>
      </section>
    </div>
  )
}

export default About
