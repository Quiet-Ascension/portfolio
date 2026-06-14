import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import GlassCard from '../ui/GlassCard'
import { skills } from '../../data/skills'

const categoryColors = {
  AI: 'bg-indigo-500',
  Cybersecurity: 'bg-cyan-500',
  Cloud: 'bg-orange-500',
  Development: 'bg-emerald-500'
}

const categoryBorders = {
  AI: 'border-indigo-500/30 text-indigo-400',
  Cybersecurity: 'border-cyan-500/30 text-cyan-400',
  Cloud: 'border-orange-500/30 text-orange-400',
  Development: 'border-emerald-500/30 text-emerald-400'
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('AI')

  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-14">
        <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3">What I Know</p>
        <h2 className="text-4xl font-bold text-white">Skills</h2>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {Object.keys(skills).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeCategory === cat
                ? `${categoryBorders[cat]} bg-white/5`
                : 'border-white/10 text-slate-500 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Bars */}
      <div className="max-w-2xl mx-auto space-y-4">
        {skills[activeCategory].map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <GlassCard hover={false} className="p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium text-sm">{skill.name}</span>
                <span className="text-slate-500 text-sm">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
                  className={`h-full rounded-full ${categoryColors[activeCategory]}`}
                />
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* All categories overview */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {Object.entries(skills).map(([category, items]) => (
          <GlassCard key={category} className={`border ${categoryBorders[category].split(' ')[0]}`}>
            <p className={`text-xs font-semibold mb-3 ${categoryBorders[category].split(' ')[1]}`}>
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s.name} className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded-md">
                  {s.name}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  )
}