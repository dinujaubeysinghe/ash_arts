import { useState } from 'react'
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaBehance } from 'react-icons/fa'

const subjects = [
  'Pencil Arts',
  'Live Drawing Event',
  'Thumbnail Design',
  'T-Shirt Design',
  'Business Card Design',
  'Social Media Post Design',
  'Other',
]

const ContactPage = () => {
  const [form,   setForm]   = useState({ name: '', email: '', subject: subjects[0], message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // 🔌 Replace with your EmailJS call
    await new Promise(r => setTimeout(r, 1400))
    setStatus('sent')
  }

  const inputClass = `w-full font-body text-sm text-[#2C2C2A] bg-transparent
    border-b border-[#888780] py-3 outline-none placeholder:text-gray-300
    hover:border-[#2C2C2A] transition-colors duration-200`

  const labelClass = `font-heading font-bold text-[18px] uppercase tracking-[0.12em] text-[#2C2C2A] block mb-2`
  const labelForm = `font-body font-bold text-[12px] uppercase tracking-[0.12em] text-[#2C2C2A] block mb-2`


  return (
    <div className='min-h-screen'>

      {/* ── HEADER ───────────────────────────────── */}
      <section className='px-5 sm:px-10 md:px-16 lg:px-20 pt-12 pb-10 border-b border-gray-100'>
        <h1 className='font-heading font-bold text-[clamp(40px,7vw,88px)] text-[#2C2C2A] leading-none'>
          Get in<br />
          <em className='italic text-[#888780]'>touch</em>
        </h1>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────── */}
      <section className='px-5 sm:px-10 md:px-16 lg:px-20 py-14 md:py-20'>
        <div className='flex flex-col lg:flex-row gap-14 lg:gap-24'>

          {/*FORM ─────────────────────── */}
          <div className='w-full lg:w-3/5'>

            {status === 'sent' ? (
              // Success
              <div className='flex flex-col items-center justify-center py-24 text-center'>
                <div className='w-14 h-14 rounded-full border border-gray-200
                  flex items-center justify-center mb-8'>
                  <span className='text-[#2C2C2A] text-2xl'>✓</span>
                </div>
                <h2 className='font-heading italic text-4xl text-[#2C2C2A] mb-4'>
                  Thank you, {form.name.split(' ')[0]}.
                </h2>
                <p className='font-body text-sm text-gray-400 max-w-xs leading-relaxed mb-10'>
                  Your message has been received. Ashen will get back to you within 48 hours.
                </p>
                <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: subjects[0], message: '' }) }}
                  className='font-body text-xs uppercase tracking-widest text-gray-400
                    border-b border-gray-200 pb-0.5 hover:text-[#2C2C2A] transition-colors'>
                  Send another message
                </button>
              </div>

            ) : (
              // Form
              <form onSubmit={handleSubmit} noValidate className='flex flex-col gap-10'>

                {/* Name + Email */}
                <div className='flex flex-col sm:flex-row gap-10'>
                  <div className='flex-1'>
                    <label className={labelForm}>Name<span className='text-red-500'>*</span></label>
                    <input type='text' required
                      placeholder='Ashen Dewinda'
                      value={form.name} onChange={update('name')}
                      className={inputClass} />
                  </div>
                  <div className='flex-1'>
                    <label className={labelForm}>Email<span className='text-red-500'>*</span></label>
                    <input type='email' required
                      placeholder='your@email.com'
                      value={form.email} onChange={update('email')}
                      className={inputClass} />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className={labelForm}>Service <span className='text-red-500'>*</span></label>
                  <select value={form.subject} onChange={update('subject')}
                    className={inputClass + ' cursor-pointer'}>
                    {subjects.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className={labelForm}>Message<span className='text-red-500'>*</span></label>
                  <textarea required rows={6}
                    placeholder="Tell me about your project — the more detail the better. What's the subject? Any references? Timeline?"
                    value={form.message} onChange={update('message')}
                    className={inputClass + ' resize-none'} />
                </div>

                {/* Submit */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                  <button type='submit'
                    disabled={status === 'sending'}
                    className='font-body text-xs font-medium tracking-widest uppercase
                      px-10 py-4 bg-[#2C2C2A] text-white rounded-sm
                      hover:bg-[#444441] transition-colors duration-200
                      disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'>
                    {status === 'sending' ? 'Sending...' : 'Send message →'}
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* ── RIGHT ─────────────────────────────── */}
          <div className='w-full lg:w-2/5 flex flex-col gap-10'>

            {/* About */}
            <div>
              <p className={labelClass}>About</p>
              <p className='font-body text-[clamp(14px,1.6vw,16px)] text-[#444441] leading-relaxed'>
                Whether it's a custom pencil portrait, a brand identity, or a creative design
                project — Ashen works closely with each client to bring their vision to life.
                Every project starts with a conversation.
              </p>
            </div>

            {/* Services */}
            <div>
              <p className={labelClass}>Services</p>
              <div className='flex flex-col gap-0'>
                {subjects.filter(s => s !== 'Other').map((s, i) => (
                  <div key={s}
                    className='flex items-center justify-between py-3 border-b border-gray-100'>
                    <span className='font-body text-sm text-[#444441]'>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contact */}
            <div>
              <p className={labelClass}>Direct contact</p>
              <div className='flex flex-col gap-3'>
                <a href='mailto:contact@asharts.lk'
                  className='font-body text-sm text-[#444441] hover:text-[#2C2C2A] transition-colors flex items-center gap-3'>
                  <span className='text-[#888780] font-body'>—</span>
                  contact@asharts.lk
                </a>
                <a href='https://wa.me/94XXXXXXXXX' target='_blank' rel='noopener noreferrer'
                  className='font-body text-sm text-[#444441] hover:text-[#2C2C2A] transition-colors flex items-center gap-3'>
                  <span className='text-[#888780] font-body'>—</span>
                  WhatsApp
                </a>
              </div>
            </div>

          </div>

          
        </div>
      </section>

    </div>
  )
}

export default ContactPage