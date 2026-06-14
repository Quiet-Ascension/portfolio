import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import GlassCard from '../ui/GlassCard'
import { Send } from 'lucide-react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-14">
        <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3">Get In Touch</p>
        <h2 className="text-4xl font-bold text-white">Contact</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        {/* Left - Info */}
        <div className="space-y-4">
          <GlassCard>
            <p className="text-slate-400 leading-relaxed mb-6">
              I'm open to opportunities, collaborations, and conversations about AI and cybersecurity.
              Feel free to reach out!
            </p>
            <div className="space-y-4">
             <a href="mailto:manavshailesh17@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-all">
                  <FaEnvelope size={15} className="text-indigo-400" />
                </div>
                <span className="text-sm">manavshailesh17@gmail.com</span>
              </a>

              <a href="https://linkedin.com/in/manavshailesh" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all">
                  <FaLinkedin size={15} className="text-cyan-400" />
                </div>
                <span className="text-sm">linkedin.com/in/manavshailesh</span>
              </a>

               <a href="https://github.com/Quiet-Ascension" target="_blank" rel="noreferrer"
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                 <div className="w-9 h-9 rounded-lg bg-slate-500/10 border border-slate-500/20 flex items-center justify-center group-hover:bg-slate-500/20 transition-all">
                <FaGithub size={15} className="text-slate-400" />
                 </div>
                <span className="text-sm">github.com/Quiet-Ascension</span>
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Right - Form */}
        <GlassCard hover={false}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-slate-500 text-xs mb-1.5 block">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-slate-500 text-xs mb-1.5 block">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-slate-500 text-xs mb-1.5 block">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Your message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
              />
            </div>

            {status === 'success' && (
              <p className="text-emerald-400 text-sm">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </GlassCard>
      </div>
    </SectionWrapper>
  )
}