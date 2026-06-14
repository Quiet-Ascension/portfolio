import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { education } from '../../data/timeline'
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react'

export default function Timeline() {
  return (
    <SectionWrapper id="timeline">
      <div className="text-center mb-14">
        <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3">Academic Background</p>
        <h2 className="text-4xl font-bold text-white">Education</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className={`glass rounded-2xl p-7 border transition-all duration-300 hover:border-indigo-500/30 ${
              item.status === 'current'
                ? 'border-indigo-500/20'
                : 'border-white/8'
            }`}
          >
            <div className="flex items-start gap-5">

              {/* Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                item.status === 'current'
                  ? 'bg-indigo-500/10 border border-indigo-500/30'
                  : 'bg-emerald-500/10 border border-emerald-500/30'
              }`}>
                <GraduationCap
                  size={22}
                  className={item.status === 'current' ? 'text-indigo-400' : 'text-emerald-400'}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-lg leading-snug">
                      {item.degree}
                    </h3>
                    <p className={`text-sm font-medium mt-0.5 ${
                      item.status === 'current' ? 'text-indigo-400' : 'text-emerald-400'
                    }`}>
                      {item.institution}
                    </p>
                  </div>

                  {/* Current badge */}
                  {item.status === 'current' && (
                    <span className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      In Progress
                    </span>
                  )}
                  {item.status === 'done' && (
                    <span className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0">
                      Completed
                    </span>
                  )}
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-4 mb-5 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star size={12} />
                    GPA: {item.gpa}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 mb-5" />

                {/* Highlights */}
                <ul className="space-y-2.5">
                  {item.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        item.status === 'current' ? 'bg-indigo-400' : 'bg-emerald-400'
                      }`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}