import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function AppLayout() {
  return (
    <div className="min-h-full bg-[--color-netflix-dark]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}


