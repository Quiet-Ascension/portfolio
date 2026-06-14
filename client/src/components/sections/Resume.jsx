import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { FileText, Download, Maximize2, X, ExternalLink } from 'lucide-react'

// Paste your Google Drive file ID here
const DRIVE_FILE_ID = '1vqiiDUFMhPFEuyyIsaTldkR7VoPN1k4y'

const PREVIEW_URL = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`
const VIEW_URL = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/view`

export default function Resume() {
  const [expanded, setExpanded] = useState(false)
  const [loaded, setLoaded] = useState(false)

  return (
    <SectionWrapper id="resume">
      <div className="text-center mb-14">
        <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3">My Profile</p>
        <h2 className="text-4xl font-bold text-white">Resume</h2>
        <p className="text-slate-500 text-sm mt-3">
          Preview my resume below or download it directly.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href={VIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            <ExternalLink size={16} />
            Open in Drive
          </a>
          <button
            onClick={() => setExpanded(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            <Maximize2 size={16} />
            Expand
          </button>
        </div>

        {/* Inline Preview Card */}
        <div className="glass rounded-2xl overflow-hidden border border-white/8">
          {/* Card Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <FileText size={14} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Manav_Shailesh_Resume.pdf</p>
                <p className="text-slate-600 text-xs">Google Drive Preview</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Traffic light dots */}
              <span className="w-3 h-3 rounded-full bg-red-500/50" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <span className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
          </div>

          {/* iframe */}
          <div className="relative" style={{ height: '600px' }}>
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0a0a0f]">
                <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
                <p className="text-slate-600 text-sm">Loading resume preview...</p>
              </div>
            )}
            <iframe
              src={PREVIEW_URL}
              onLoad={() => setLoaded(true)}
              className="w-full h-full"
              style={{ border: 'none' }}
              allow="autoplay"
              title="Resume Preview"
            />
          </div>
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setExpanded(false)
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-5xl glass rounded-2xl overflow-hidden border border-white/10"
              style={{ height: '90vh' }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <FileText size={14} className="text-indigo-400" />
                  </div>
                  <p className="text-white text-sm font-medium">Manav_Shailesh_Resume.pdf</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={DOWNLOAD_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs hover:bg-indigo-500/20 transition-all"
                  >
                  
                    <Download size={13} />
                    Download
                  </a>
                  <button
                    onClick={() => setExpanded(false)}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Modal iframe */}
              <iframe
                src={PREVIEW_URL}
                className="w-full"
                style={{ height: 'calc(90vh - 56px)', border: 'none' }}
                allow="autoplay"
                title="Resume Expanded Preview"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}