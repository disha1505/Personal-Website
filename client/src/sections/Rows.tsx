import { useEffect, useRef, useState } from 'react'
import { Eye, Github, ExternalLink, Search, X, Play } from 'lucide-react'

// Direct imports for images
import prepwiseImg from '../assets/images/prepwise.png'
import playgroundImg from '../assets/images/playground.png'
import hotelBookingsImg from '../assets/images/hotelbooking.jpg'
import parkinsonsImg from '../assets/images/parkinsons.jpeg'

// Direct imports for videos
import prepwiseVideo from '../assets/videos/prepwise.mp4'
import playgroundVideo from '../assets/videos/playground.mp4'
import hotelVideo from '../assets/videos/hotelbookings.mp4'
import parkinsonsVideo from '../assets/videos/parkinsons.mp4'

// Create lookup maps
const imageMap: Record<string, string> = {
  'prepwise.png': prepwiseImg,
  'playground.png': playgroundImg,
  'hotelbooking.jpg': hotelBookingsImg,
  'parkinsons.jpeg': parkinsonsImg,
}

const videoMap: Record<string, string> = {
  'prepwise.mp4': prepwiseVideo,
  'playground.mp4': playgroundVideo,
  'hotelbookings.mp4': hotelVideo,
  'parkinsons.mp4': parkinsonsVideo,
}

// Debug: Log what files are available
console.log('Available images:', Object.keys(imageMap))
console.log('Available videos:', Object.keys(videoMap))

type Project = {
  title: string
  slug: string
  category: string
  description?: string
  thumbnail?: string
  liveUrl?: string
  repoUrl?: string
  tech?: string[]
  date?: string
  videoUrl?: string
  caseStudyUrl?: string
  tagline?: string
}

const API = import.meta.env.VITE_API_URL || 'https://personal-website-tdf0.onrender.com:80'

export function Rows() {
  const [projects, setProjects] = useState<Project[]>([])
  const [visitorCount, setVisitorCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [selected, setSelected] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Fallback project data - only your real projects
  const fallbackProjects: Project[] = [
    {
      title: "PrepWise: AI-based SaaS platform",
      slug: "prepwise",
      category: "Full-Stack Projects",
      description: "Built a full-stack AI interview simulation platform with real-time voice interactions via Vapi, enabling users to conduct mock technical interviews with AI and reducing manual mock prep time by 60%. Integrated OpenAI API for dynamic question generation and feedback, supporting 10+ interview categories (DSA, system design, HR) with intelligent scoring, answer analysis, and contextual follow-ups. Implemented secure user authentication (Supabase) and premium subscriptions (Stripe), scaling the platform for 100+ concurrent users with a mobile-first responsive UI and server-side rendering for fast performance.",
      tech: ["React", "Node.js", "Express", "MongoDB", "AWS", "OpenAI", "Vapi", "Stripe", "Supabase", "Next.js"],
      repoUrl: "https://github.com/disha1505/AI-Mock-Interviews",
      liveUrl: "",
      thumbnail: "prepwise.png",
      date: "July 2025",
      videoUrl: "prepwise.mp4",
      tagline: "AI-powered mock interview platform.",
      caseStudyUrl: "#"
    },
    {
      title: "Playground: The Code Editor",
      slug: "playground",
      category: "Web Applications",
      description: "Built a browser-based Code Editor using React.js, enabling real-time writing and preview of HTML, CSS, and JavaScript code with a responsive, mobile-friendly UI. Deployed on Vercel with <250ms average render time, ensuring fast and smooth code execution for users across devices.",
      tech: ["React", "JavaScript", "HTML", "CSS", "Vercel", "TailwindCSS"],
      repoUrl: "https://github.com/disha1505/CodeEditor",
      liveUrl: "https://code-editor-tau-puce.vercel.app/",
      thumbnail: "playground.png",
      date: "May 2025",
      videoUrl: "playground.mp4",
      tagline: "A fast, responsive in‑browser code editor.",
      caseStudyUrl: "#"
    },
    {
      title: "Hotel Booking System",
      slug: "hotel-booking-system",
      category: "Full-Stack Projects",
      description: "Developed a full-stack Hotel Booking Management System using MERN (MongoDB, Express.js, React, Node.js), managing over 100+ hotel rooms and multiple user roles (admin/customer) in a dynamic environment. Built and integrated RESTful APIs enabling 100% CRUD functionality, user authentication with JWT, and real-time updates.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS", "Vercel", "MongoDB Atlas"],
      repoUrl: "https://github.com/disha1505/hotel-booking-system",
      liveUrl: "https://hotel-booking-system-rust.vercel.app/",
      thumbnail: "hotelbooking.jpg",
      date: "April 2025",
      videoUrl: "hotelbookings.mp4",
      tagline: "Full‑stack hotel bookings with auth and real‑time updates.",
      caseStudyUrl: "#"
    },
    {
      title: "Parkinson's Disease Detection",
      slug: "parkinsons-detection",
      category: "AI/ML Projects",
      description: "Built an SVM-based machine learning model that achieved 92% precision and 90% F1-score for early Parkinson's disease detection using voice data from 195 samples. Preprocessed and extracted key vocal biomarkers (jitter, shimmer, frequency), boosting model performance by 25% after feature selection and tuning.",
      tech: ["Python", "SVM", "Machine Learning", "Matplotlib", "Seaborn", "Java", "Scikit-learn"],
      repoUrl: "https://github.com/disha1505/parkinsons-detection",
      liveUrl: "",
      thumbnail: "parkinsons.jpeg",
      date: "February 2024",
      videoUrl: "parkinsons.mp4",
      tagline: "Early detection via vocal biomarkers and SVMs.",
      caseStudyUrl: "#"
    },
    {
      title: "More Projects Coming Soon",
      slug: "coming-soon",
      category: "Coming Soon",
      description: "Exciting new projects are in development! Stay tuned for more innovative solutions and cutting-edge applications.",
      tech: ["React", "Node.js", "AI/ML", "Cloud Computing"],
      repoUrl: "",
      liveUrl: "",
      date: "2025"
    }
  ]
  
  useEffect(() => {
    fetch(`${API}/api/projects`)
      .then(r => r.json())
      .then(d => setProjects(d.rows || fallbackProjects))
      .catch(() => setProjects(fallbackProjects))
    
    fetch(`${API}/api/visitors/stats`)
      .then(r => r.json())
      .then(d => setVisitorCount(d.uniqueVisitors || 0))
      .catch(() => setVisitorCount(0))
  }, [])

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.tech?.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const groups = filteredProjects.reduce<Record<string, Project[]>>((acc, p) => {
    acc[p.category] ||= []
    acc[p.category].push(p)
    return acc
  }, {})

  return (
    <div id="projects" className="space-y-10 px-6 py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 rounded-lg bg-white/10 px-10 py-2 text-white placeholder-gray-400 focus:bg-white/20 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Eye size={16} />
            <span>{visitorCount.toLocaleString()} visitors</span>
          </div>
        </div>
      </div>
      
      {Object.keys(groups).length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">No projects found matching "{searchTerm}"</p>
        </div>
      ) : (
        Object.entries(groups).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-semibold">{category}</h3>
            <div className="no-scrollbar flex gap-4 overflow-x-auto pb-4">
              {items.map((p) => (
                <ProjectCard key={p.slug} project={p} onOpen={(proj) => { setSelected(proj); setIsModalOpen(true) }} />)
              )}
            </div>
          </div>
        ))
      )}

      {selected && (
        <ProjectModal
          open={isModalOpen}
          project={selected}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

function ProjectCard({ project, onOpen }: { project: Project, onOpen: (p: Project) => void }) {
  const [imgSrc, setImgSrc] = useState<string>('')
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  // Image resolution function - uses direct import map
  const resolveImageUrl = (path?: string): string => {
    if (!path) {
      // Fallback to slug-based filename
      const fallbackFilename = `${project.slug}.${project.slug.includes('detection') ? 'jpeg' : 'png'}`
      return resolveImageUrl(fallbackFilename)
    }
    
    const filename = path.split('/').pop() || ''
    console.log('🖼️ ProjectCard - Looking for image:', filename)
    
    // Direct lookup in imageMap
    if (imageMap[filename]) {
      console.log('✅ Found image in map:', filename)
      return imageMap[filename]
    }
    
    console.log('❌ No image found for:', filename, 'in imageMap')
    console.log('Available images:', Object.keys(imageMap))
    
    // Return placeholder if no image found
    return `https://picsum.photos/seed/${project.slug}/800/450`
  }

  useEffect(() => {
    setImageLoading(true)
    setImageError(false)
    
    try {
      const resolvedUrl = resolveImageUrl(project.thumbnail)
      setImgSrc(resolvedUrl)
    } catch (error) {
      console.error('Error resolving image:', error)
      setImgSrc(`https://picsum.photos/seed/${project.slug}/800/450`)
      setImageError(true)
    }
  }, [project.thumbnail, project.slug])

  const handleImageError = () => {
    console.error('Image failed to load:', imgSrc)
    setImageError(true)
    setImageLoading(false)
    // Fallback to external placeholder
    setImgSrc(`https://picsum.photos/seed/${project.slug}/800/450`)
  }

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', imgSrc)
    setImageError(false)
    setImageLoading(false)
  }

  return (
    <div
      className="group relative h-80 w-80 flex-shrink-0 overflow-hidden rounded-lg bg-[--color-netflix-gray] shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={() => onOpen(project)}
      data-title={project.title}
      data-video-url={project.videoUrl || ''}
      data-description={project.description || ''}
      data-tech={(project.tech || []).join(',')}
      data-date={project.date || ''}
    >
      {/* Loading state */}
      {imageLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="text-gray-400">Loading...</div>
        </div>
      )}
      
      {/* Image */}
      <img
        src={imgSrc}
        onError={handleImageError}
        onLoad={handleImageLoad}
        alt={project.title}
        className={`absolute inset-0 h-full w-full object-cover opacity-80 transition group-hover:opacity-100 ${imageLoading ? 'opacity-0' : 'opacity-80'}`}
        style={{ display: imageLoading ? 'none' : 'block' }}
      />
      
      {/* Error state */}
      {imageError && !imageLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-400">
          <div className="text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image not found</div>
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      
      {/* Tech Stack */}
      {project.tech && (
        <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full bg-white/20 px-2 py-1 text-xs">{tech}</span>
          ))}
          {project.tech.length > 3 && (
            <span className="rounded-full bg-white/20 px-2 py-1 text-xs">+{project.tech.length - 3}</span>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="absolute top-3 right-3 flex gap-2 opacity-0 transition group-hover:opacity-100">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="rounded-full bg-black/50 p-2 hover:bg-black/70"
            aria-label={`Open repository for ${project.title}`}
            title={`Open repository for ${project.title}`}
          >
            <Github size={16} />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="rounded-full bg-black/50 p-2 hover:bg-black/70"
            aria-label={`Open live demo for ${project.title}`}
            title={`Open live demo for ${project.title}`}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="flex items-center justify-between mb-1">
          <div className="text-xl font-bold">{project.title}</div>
          {project.date && (
            <span className="text-xs text-gray-400 bg-black/50 px-2 py-1 rounded">
              {project.date}
            </span>
          )}
        </div>
        <div className="line-clamp-3 text-sm text-gray-200">{project.description}</div>
      </div>
    </div>
  )
}

function ProjectModal({ open, project, onClose }: { open: boolean, project: Project, onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [videoSrc, setVideoSrc] = useState<string>('')
  const [modalImgSrc, setModalImgSrc] = useState<string>('')

  // Video resolution function - uses direct import map
  const resolveVideoUrl = (path?: string): string | null => {
    if (!path) return null
    
    const filename = path.split('/').pop() || ''
    console.log('🎥 ProjectModal - Looking for video:', filename)
    
    // Direct lookup in videoMap
    if (videoMap[filename]) {
      console.log('✅ Found video in map:', filename)
      return videoMap[filename]
    }
    
    console.log('❌ No video found for:', filename, 'in videoMap')
    console.log('Available videos:', Object.keys(videoMap))
    return null
  }

  // Image resolution function for modal fallback - uses direct import map
  const resolveModalImageUrl = (path?: string): string => {
    if (!path) {
      const fallbackFilename = `${project.slug}.${project.slug.includes('detection') ? 'jpeg' : 'png'}`
      return resolveModalImageUrl(fallbackFilename)
    }
    
    const filename = path.split('/').pop() || ''
    // Direct lookup in imageMap
    if (imageMap[filename]) {
      return imageMap[filename]
    }
    
    return `https://picsum.photos/seed/${project.slug}/800/450`
  }

  useEffect(() => {
    if (open) {
      setVisible(true)
      setVideoError(false)
      
      // Load video
      const videoUrl = resolveVideoUrl(project.videoUrl)
      setVideoSrc(videoUrl || '')
      setVideoError(!videoUrl)
      
      // Load image for fallback
      const imageUrl = resolveModalImageUrl(project.thumbnail)
      setModalImgSrc(imageUrl)
    } else {
      const t = setTimeout(() => setVisible(false), 200)
      return () => clearTimeout(t)
    }
  }, [open, project.videoUrl, project.thumbnail, project.slug])

  const handleClose = () => {
    if (videoRef.current) {
      try { 
        videoRef.current.pause() 
      } catch {}
    }
    onClose()
  }

  if (!open) return null

  return (
    <div
      className={`fixed inset-0 z-50 ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
      aria-modal="true"
      role="dialog"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" onClick={handleClose} />

      {/* Content */}
      <div
        className="absolute inset-0 mx-auto my-6 h-[92%] w-full max-w-5xl overflow-hidden rounded-lg bg-neutral-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video/Image Section */}
        <div className="relative h-[48%] w-full bg-black">
          {/* Video if available */}
          {videoSrc && !videoError && (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoError(true)}
            />
          )}
          
          {/* Fallback to image if video fails or not available */}
          {(!videoSrc || videoError) && (
            <img
              src={modalImgSrc}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                // Final fallback to placeholder
                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.slug}/800/450`
              }}
            />
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

          {/* Content over media */}
          <div className="relative z-10 flex h-full flex-col justify-end p-6 gap-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow">{project.title}</h2>
            {project.tagline && (
              <p className="text-sm md:text-base text-gray-200 max-w-3xl">{project.tagline}</p>
            )}
            <div className="flex flex-wrap gap-3 mt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                >
                  <Play size={16} /> Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              {project.caseStudyUrl && project.caseStudyUrl !== "#" && (
                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                >
                  Case Study
                </a>
              )}
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Bottom scrollable section */}
        <div className="h-[52%] w-full overflow-y-auto p-6">
          {project.description && (
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-semibold text-white">About</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>
          )}

          {project.tech && project.tech.length > 0 && (
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-semibold text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.date && (
            <div className="text-sm text-gray-400">Completed: {project.date}</div>
          )}
        </div>
      </div>
    </div>
  )
}
