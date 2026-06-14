import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import GlassCard from '../ui/GlassCard'
import { Globe, Star, GitFork, ExternalLink } from 'lucide-react'

export default function GitHub() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <SectionWrapper id="github">
      <div className="text-center mb-14">
        <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3">Open Source</p>
        <h2 className="text-4xl font-bold text-white">GitHub</h2>
      </div>

      {loading && (
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
        </div>
      )}

      {data && (
        <>
          {/* Profile Card */}
          <GlassCard className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <img
              src={data.user.avatar_url}
              alt="GitHub Avatar"
              className="w-20 h-20 rounded-full border-2 border-indigo-500/30"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-white font-semibold text-lg">{data.user.name}</h3>
              <p className="text-slate-500 text-sm mb-3">@{data.user.login}</p>
              <p className="text-slate-400 text-sm">{data.user.bio}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">{data.user.public_repos}</p>
                <p className="text-slate-500 text-xs">Repos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{data.user.followers}</p>
                <p className="text-slate-500 text-xs">Followers</p>
              </div>
            </div>
          </GlassCard>

          {/* Repos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-5 border border-white/8 hover:border-indigo-500/30 transition-all duration-200 block group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Globe size={15} className="text-slate-500" />
                    <span className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink size={13} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                </div>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">
                  {repo.description || 'No description provided.'}
                </p>
                <div className="flex items-center gap-4">
                  {repo.language && (
                    <span className="text-xs text-slate-500">{repo.language}</span>
                  )}
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Star size={11} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <GitFork size={11} /> {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  )
}