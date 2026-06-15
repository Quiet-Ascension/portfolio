import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { projects, categories } from '../../data/projects'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hovered, setHovered] = useState(null)

  const filtered = activeCategory === 'All'
  ? projects
  : projects.filter(p => p.category.includes(activeCategory))

  const openGithub = (url) => {
    if (url) window.open(url, '_blank')
  }

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-14">
        <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3">What I've Built</p>
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <p className="text-slate-500 text-sm mt-3 max-w-lg mx-auto">
          A collection of security tools, cloud systems, and full stack applications I've built.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeCategory === cat
                ? 'border-indigo-500/50 text-indigo-400 bg-indigo-500/10'
                : 'border-white/10 text-slate-500 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => openGithub(project.github)}
              className="glass rounded-2xl overflow-hidden border border-white/8 hover:border-indigo-500/30 transition-all duration-300 group cursor-pointer"
            >
              {/* Preview Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.preview}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-indigo-300">
                    {project.category.join(' • ')}
                  </span>
                </div>

                {/* Hover arrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hovered === project.id ? 1 : 0,
                    scale: hovered === project.id ? 1 : 0.8
                  }}
                  className="absolute top-4 right-4"
                >
                  <div className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                    <ArrowUpRight size={15} />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4 border-t border-white/5">
                  {project.github && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation()
                        openGithub(project.github)
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-sm transition-all duration-200 cursor-pointer"
                    >
                      <FaGithub size={14} />
                      View Code
                    </div>
                  )}
                  {project.demo && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.demo, '_blank')
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-400 text-sm transition-all duration-200 cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  )
}