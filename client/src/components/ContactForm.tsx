import { useState } from 'react'

import { Mail, Phone, MapPin } from 'lucide-react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${API}/api/contacts/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const data = await res.json()
      console.log(data)
      if (!data.ok) throw new Error('Failed')
      setStatus('sent')
      setName(''); setEmail(''); setMessage('')
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-300">Let's discuss your next project or opportunity</p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-[--color-netflix-red] p-3">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:jdisha424@gmail.com" className="text-gray-300 hover:text-white">jdisha424@gmail.com</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-[--color-netflix-red] p-3">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:+919039004000" className="text-gray-300 hover:text-white">+91 9039004000</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-[--color-netflix-red] p-3">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-300">Bhopal, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <input 
              className="w-full rounded-lg bg-white/10 p-3 text-white placeholder-gray-400 focus:bg-white/20 focus:outline-none" 
              placeholder="Your Name" 
              value={name} 
              onChange={e=>setName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <input 
              className="w-full rounded-lg bg-white/10 p-3 text-white placeholder-gray-400 focus:bg-white/20 focus:outline-none" 
              placeholder="Your Email" 
              type="email" 
              value={email} 
              onChange={e=>setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <textarea 
              className="w-full rounded-lg bg-white/10 p-3 text-white placeholder-gray-400 focus:bg-white/20 focus:outline-none" 
              placeholder="Your Message" 
              rows={5} 
              value={message} 
              onChange={e=>setMessage(e.target.value)} 
              required 
            />
          </div>
          <div className="flex items-center gap-3">
            <button 
              disabled={status==='sending'} 
              className="rounded-lg bg-[--color-netflix-red] px-6 py-3 font-semibold hover:bg-red-700 disabled:opacity-50 transition-colors"
            >
              {status==='sending'?'Sending...':'Send Message'}
            </button>
            {status==='sent' && <span className="text-green-400">Message sent successfully!</span>}
            {status==='error' && <span className="text-red-400">Error sending message. Please try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
