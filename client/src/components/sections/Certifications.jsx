import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { certifications } from '../../data/certifications'
import { Award, X, ExternalLink, ZoomIn } from 'lucide-react'

export default function Certifications() {
  const [selected, setSelected] = useState(null)
  const [loaded, setLoaded] = useState(false)

const getPreviewUrl = (fileKey) => `/api/files/preview/${fileKey}`
const getViewUrl = (fileKey) => `/api/files/view/${fileKey}`


  const openCert = (cert) => {
    setLoaded(false)
    setSelected(cert)
  }

  const closeCert = () => {
    setSelected(null)
    setLoaded(false)
  }

  return (
    <SectionWrapper id="certifications">
      <div className="text-center mb-14">
        <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3">Credentials</p>
        <h2 className="text-4xl font-bold text-white">Certifications</h2>
        <p className="text-slate-500 text-sm mt-3">Click any certificate to view it</p>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => openCert(cert)}
            className="glass rounded-2xl overflow-hidden border border-white/8 group cursor-pointer hover:border-indigo-500/30 transition-all duration-300"
          >
            {/* Hover Preview Area */}
            <div className="relative h-40 overflow-hidden bg-[#0d0d15]">

              {/* Certificate iframe preview — loads in background */}
              <iframe
                src={getPreviewUrl(cert.fileId)}
                className="w-full h-full pointer-events-none"
                style={{
                  border: 'none',
                  transform: 'scale(1.05)',
                  transformOrigin: 'top left',
                  width: '111%',
                  height: '111%'
                }}
                title={cert.title}
              />

              {/* Dark overlay — lifts on hover to reveal preview */}
              <div className="absolute inset-0 bg-[#0a0a0f]/85 group-hover:bg-[#0a0a0f]/20 transition-all duration-500" />

              {/* Default state — icon visible when not hovered */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                  <Award size={26} className="text-white" />
                </div>
              </div>

              {/* Hover state — click to view prompt */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center mb-2">
                  <ZoomIn size={18} className="text-white" />
                </div>
                <span className="text-white text-xs font-medium bg-black/40 px-3 py-1 rounded-full">
                  Click to view
                </span>
              </div>
            </div>

            {/* Card Info */}
            <div className="p-5">
              <h3 className="text-white font-semibold text-sm mb-1 leading-snug group-hover:text-indigo-300 transition-colors">
                {cert.title}
              </h3>
              <p className="text-slate-500 text-xs mb-3">{cert.issuer}</p>
              <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-slate-500">
                {cert.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && closeCert()}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)' }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full max-w-4xl glass rounded-2xl overflow-hidden border border-white/10"
              style={{ height: '85vh' }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/8">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${selected.color} flex items-center justify-center`}>
                    <Award size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{selected.title}</p>
                    <p className="text-slate-500 text-xs">{selected.issuer} · {selected.year}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={getViewUrl(selected.fileId)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs hover:bg-indigo-500/20 transition-all"
                  >
                    <ExternalLink size={12} />
                    Open in Drive
                  </a>
                  <button
                    onClick={closeCert}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Loading spinner */}
              {!loaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0a0a0f] z-10"
                  style={{ top: '56px' }}>
                  <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
                  <p className="text-slate-500 text-sm">Loading certificate...</p>
                </div>
              )}

              {/* Certificate iframe */}
              <iframe
                src={getPreviewUrl(selected.fileId)}
                onLoad={() => setLoaded(true)}
                className="w-full"
                style={{ height: 'calc(85vh - 56px)', border: 'none' }}
                title={selected.title}
                allow="autoplay"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}