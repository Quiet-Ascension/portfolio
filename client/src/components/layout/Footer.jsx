import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Manav Shailesh. Built with React & Express.
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/Quiet-Ascension" target="_blank" rel="noreferrer"
            className="text-slate-500 hover:text-white transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/manav-shailesh/" target="_blank" rel="noreferrer"
            className="text-slate-500 hover:text-white transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:your@gmail.com"
            className="text-slate-500 hover:text-white transition-colors">
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}