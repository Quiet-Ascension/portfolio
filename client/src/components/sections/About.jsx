import SectionWrapper from '../ui/SectionWrapper'
import GlassCard from '../ui/GlassCard'
import { Brain, Shield, Cloud, Code } from 'lucide-react'

const interests = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Building AI agents, exploring machine learning models and RAG systems.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10 border-indigo-500/20'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Web application security, network analysis, and security automation.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20'
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'AWS security monitoring, IAM, CloudTrail and CloudWatch configurations.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20'
  },
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'Building real-world applications using the MERN stack and FastAPI.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20'
  }
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-14">
        <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3">Who I Am</p>
        <h2 className="text-4xl font-bold text-white">About Me</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left - Summary */}
        <GlassCard className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-white mb-4">
            AI & Cybersecurity Student
          </h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            I'm Manav Shailesh, currently pursuing my M.Sc. in Artificial Intelligence
            & Cybersecurity. I'm passionate about building systems that sit at the
            intersection of intelligence and security.
          </p>
          <p className="text-slate-400 leading-relaxed">
            From deploying AWS security monitoring systems to building AI-powered tools,
            I focus on creating practical, real-world solutions that solve meaningful problems.
          </p>
        </GlassCard>

        {/* Right - Details */}
        <GlassCard>
          <div className="space-y-5">
            <div>
              <p className="text-slate-500 text-sm mb-1">Current Degree</p>
              <p className="text-white font-medium">M.Sc. Artificial Intelligence & Cybersecurity</p>
            </div>
            <div className="h-px bg-white/5" />
            <div>
              <p className="text-slate-500 text-sm mb-1">Status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-emerald-400 font-medium">Actively Building Projects</p>
              </div>
            </div>
            <div className="h-px bg-white/5" />
            <div>
              <p className="text-slate-500 text-sm mb-1">Focus Areas</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['AI', 'Security Tools', 'Cloud Security', 'Automation'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="h-px bg-white/5" />
            <div>
              <p className="text-slate-500 text-sm mb-1">Location</p>
              <p className="text-white font-medium">India</p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Interest Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {interests.map((item) => {
          const Icon = item.icon
          return (
            <GlassCard key={item.title} className={`border ${item.bg}`}>
              <Icon size={24} className={`${item.color} mb-3`} />
              <h4 className="text-white font-semibold mb-2 text-sm">{item.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
            </GlassCard>
          )
        })}
      </div>
    </SectionWrapper>
  )
}