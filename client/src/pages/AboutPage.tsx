// Import logo images
import javascriptLogo from '../assets/logos/javascript.png'
import typescriptLogo from '../assets/logos/typescript.png'
import nodeLogo from '../assets/logos/node.png'
import reactLogo from '../assets/logos/react.png'
import nextLogo from '../assets/logos/next.jpeg'
import htmlLogo from '../assets/logos/Html.jpeg'
import cssLogo from '../assets/logos/css.png'
import javaLogo from '../assets/logos/java.png'
import pythonLogo from '../assets/logos/python.png'
import mongodbLogo from '../assets/logos/mongodb.png'
import mysqlLogo from '../assets/logos/MySQL.png'
import dynamodbLogo from '../assets/logos/DynamoDB.png'
import awsLogo from '../assets/logos/AWS.png'
import vercelLogo from '../assets/logos/Vercel.png'
import stripeLogo from '../assets/logos/Stripe.jpeg'
import supabaseLogo from '../assets/logos/Supabase.png'
import openapiLogo from '../assets/logos/OpenAPI.png'
import vapiLogo from '../assets/logos/Vapi.jpeg'
import huggingfaceLogo from '../assets/logos/HuggingFace API.png'
import bootstrapLogo from '../assets/logos/Bootstrap.jpeg'
import tailwindLogo from '../assets/logos/TailwindCSS.png'
import materialLogo from '../assets/logos/Material Design.jpeg'
import viteLogo from '../assets/logos/Vite.png'
import dsaLogo from '../assets/logos/Data Structure and Algorithms.png'
import oopsLogo from '../assets/logos/Object Oriented programming.jpeg'
import gitLogo from '../assets/logos/Git.png'
import cicdLogo from '../assets/logos/CICD pipelines.png'
import debuggingLogo from '../assets/logos/Debugging.png'

export function AboutPage() {
  // Create a mapping of skill names to their logo images
  const skillLogoMap: Record<string, string> = {
    'JavaScript': javascriptLogo,
    'TypeScript': typescriptLogo,
    'Node.js': nodeLogo,
    'React.js': reactLogo,
    'Next.js': nextLogo,
    'HTML': htmlLogo,
    'CSS': cssLogo,
    'Java': javaLogo,
    'Python': pythonLogo,
    'MongoDB': mongodbLogo,
    'MySQL': mysqlLogo,
    'DynamoDB': dynamodbLogo,
    'AWS (Amplify, Console)': awsLogo,
    'Vercel': vercelLogo,
    'Stripe (Payment Integration)': stripeLogo,
    'Supabase Auth': supabaseLogo,
    'OpenAPI': openapiLogo,
    'Vapi': vapiLogo,
    'HuggingFace API': huggingfaceLogo,
    'Bootstrap': bootstrapLogo,
    'TailwindCSS': tailwindLogo,
    'Material Design': materialLogo,
    'Amazon Web Services (AWS)': awsLogo,
    'Vite': viteLogo,
    'Data Structures and Algorithms': dsaLogo,
    'OOPS': oopsLogo,
    'Git': gitLogo,
    'CI/CD pipelines': cicdLogo,
    'Debugging': debuggingLogo
  }

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["JavaScript", "TypeScript", "Node.js", "React.js", "Next.js", "HTML", "CSS", "Java", "Python"]
    },
    {
      title: "Databases & Cloud",
      skills: ["MongoDB", "MySQL", "DynamoDB", "AWS (Amplify, Console)", "Vercel"]
    },
    {
      title: "Tools & APIs",
      skills: ["Stripe (Payment Integration)", "Supabase Auth", "OpenAPI", "Vapi", "HuggingFace API"]
    },
    {
      title: "Styling & UI",
      skills: ["Bootstrap", "TailwindCSS", "Material Design"]
    },
    {
      title: "Cloud Services",
      skills: ["Amazon Web Services (AWS)", "Vercel", "Vite"]
    },
    {
      title: "Basic Computing",
      skills: ["Data Structures and Algorithms", "OOPS", "Git", "CI/CD pipelines", "Debugging"]
    }
  ]

  return (
    <div className="min-h-screen bg-[--color-netflix-dark]">
      {/* Hero Section */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="font-brand-display animate-fadeInUp mb-4 text-5xl font-bold text-white">Disha Jadhav</h1>
            <p className="mb-6 text-2xl text-gray-300">Full-Stack Developer & AI Enthusiast</p>
            <div className="flex justify-center gap-6 text-lg">
              <a href="mailto:jdisha424@gmail.com" className="text-[--color-netflix-red] hover:text-white transition-colors">
                jdisha424@gmail.com
              </a>
              <span className="text-gray-500">•</span>
              <span className="text-gray-300">+91 9039004000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-bold text-white">Education</h2>
          <div className="rounded-lg bg-black/60 p-8 backdrop-blur-sm">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-white">Vellore Institute of Technology, Bhopal</h3>
              <p className="text-lg text-gray-300">Bachelor of Computer Science, Specialized in Cloud Computing and Automation (BSA)</p>
              <p className="text-gray-400">CGPA: 8.24 • Oct 2022 - Sep 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-bold text-white">Experience</h2>
          <div className="rounded-lg bg-black/60 p-8 backdrop-blur-sm">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-white">Heybase Inc. — Intern, Full-stack Developer</h3>
              <p className="text-gray-400 mb-4">Nov 2024 - Jan 2025</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[--color-netflix-red] mr-2">•</span>
                  <span>Developed scalable web applications using MERN stack</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-netflix-red] mr-2">•</span>
                  <span>Improved application performance by 20% and reduced bugs by 30%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-netflix-red] mr-2">•</span>
                  <span>Implemented responsive front-end designs and optimized API endpoints</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Netflix Style */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-white">Skills</h2>
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                <div className="no-scrollbar flex gap-4 overflow-x-auto pb-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group relative h-32 w-64 flex-shrink-0 overflow-hidden rounded-lg bg-[--color-netflix-gray] shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                    >
                      {/* Logo Image Background */}
                      {skillLogoMap[skill] && (
                        <img
                          src={skillLogoMap[skill]}
                          alt={`${skill} logo`}
                          className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-br from-[--color-netflix-red]/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Logo in top-right corner */}
                      {skillLogoMap[skill] && (
                        <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/50 p-1">
                          <img
                            src={skillLogoMap[skill]}
                            alt={`${skill} logo`}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      )}
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-lg font-semibold text-white line-clamp-2 drop-shadow-lg">{skill}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-bold text-white">Certifications</h2>
          <div className="rounded-lg bg-black/60 p-8 backdrop-blur-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start">
                <span className="text-[--color-netflix-red] mr-3 text-xl">•</span>
                <span className="text-gray-300">MERN Full Stack Certification by Ethnus</span>
              </div>
              <div className="flex items-start">
                <span className="text-[--color-netflix-red] mr-3 text-xl">•</span>
                <span className="text-gray-300">AWS Solution Architect Certification</span>
              </div>
              <div className="flex items-start">
                <span className="text-[--color-netflix-red] mr-3 text-xl">•</span>
                <span className="text-gray-300">Graph Theory by AlgoUniversity</span>
              </div>
              <div className="flex items-start">
                <span className="text-[--color-netflix-red] mr-3 text-xl">•</span>
                <span className="text-gray-300">HTML, CSS, Javascript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Resume Section */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <a 
            href="/resume.pdf" 
            download="Disha_Jadhav_Resume.pdf"
            className="inline-flex items-center gap-2 rounded bg-[--color-netflix-red] px-8 py-4 text-lg font-semibold text-white hover:bg-red-700 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  )
}


