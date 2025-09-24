import mainVideo from '../assets/videos/main.mp4'

export function Hero() {
  return (
    <section className="relative aspect-[16/7] w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={mainVideo}
        autoPlay
        playsInline
        muted
        loop
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[--color-netflix-dark] to-transparent" />
      <div className="absolute bottom-10 left-10 max-w-4xl">
        <h1 className="font-brand-display animate-fadeInUp text-4xl font-black md:text-6xl">INTRODUCTION</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-200 leading-relaxed">
          A solution-driven computer science student specializing in Cloud Computing at VIT Bhopal. 
          Gained practical experience as a Full-Stack Developer Intern at Heybase.Inc, contributing 
          to the development of scalable web applications using the MERN stack. Passionate about building 
          innovative, AI-integrated projects, such as a real-time voice interview platform, and skilled 
          in modern technologies including React, Node.js, and AWS. Combines academic knowledge with 
          professional internship experience to deliver robust software solutions.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['React', 'Node.js', 'AWS', 'MongoDB', 'AI/ML', 'TypeScript'].map((tech) => (
            <span key={tech} className="rounded-full bg-white/20 px-3 py-1 text-sm">{tech}</span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a href="#projects" className="rounded bg-[--color-netflix-red] px-6 py-3 font-semibold hover:bg-red-700">Explore Projects</a>
          <a href="/about" className="rounded bg-white/20 px-6 py-3 hover:bg-white/30">Learn More</a>
          <a href="/resume.pdf" download className="rounded bg-white/10 px-6 py-3 hover:bg-white/20">Download Resume</a>
        </div>
      </div>
    </section>
  )
}


