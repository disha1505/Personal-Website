import { useEffect } from 'react'
import { Hero } from '../sections/Hero'
import { Rows } from '../sections/Rows'
import { ContactForm } from '../components/ContactForm'

export function HomePage() {
  useEffect(() => {
    // fire-and-forget visitor tracking
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:80'}/api/visitors/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: '/' }),
    }).catch(() => {})
  }, [])

  return (
    <main className="pt-20">
      <Hero />
      <Rows />
      <div id="contact">
        <ContactForm />
      </div>
    </main>
  )
}


