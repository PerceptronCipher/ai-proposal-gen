'use client'

import { motion } from 'framer-motion'
import {
  Laptop,
  Palette,
  Scale,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from 'lucide-react'

const useCases = [
  {
    title: 'Software Developers',
    subtitle: 'MERN, Next.js, & Mobile',
    description:
      'Instantly draft technical scopes, stack justifications, and maintenance agreements that prove your expertise.',
    icon: <Laptop className='text-blue-400' />,
    stats: '85% Faster Drafting',
    size: 'md:col-span-2',
  },
  {
    title: 'Creative Designers',
    subtitle: 'UI/UX & Branding',
    description:
      'Clearly define revision cycles and asset handovers to avoid scope creep.',
    icon: <Palette className='text-pink-400' />,
    stats: 'Zero Scope Creep',
    size: 'md:col-span-1',
  },
  {
    title: 'Legal & Consultants',
    subtitle: 'Contracts & Agreements',
    description:
      'AI-driven risk analysis ensures your terms are fair and your liabilities are covered.',
    icon: <Scale className='text-emerald-400' />,
    stats: 'Risk-Averse Logic',
    size: 'md:col-span-1',
  },
  {
    title: 'Digital Agencies',
    subtitle: 'Scale & Automation',
    description:
      'Standardize your agency’s proposal quality across your entire sales team with central AI logic.',
    icon: <Zap className='text-yellow-400' />,
    stats: '10x Team Output',
    size: 'md:col-span-2',
  },
]

export default function UseCase() {
  return (
    <section id='use-case' className='py-24 bg-[#020617] px-6 relative'>
      <div className='max-w-6xl mx-auto'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'>
          <div className='max-w-2xl'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className='flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4'
            >
              <ShieldCheck size={16} /> Versatility
            </motion.div>
            <h2 className='text-4xl md:text-5xl font-black text-white tracking-tight'>
              Designed for the <br />
              <span className='text-slate-500'>Modern Professional.</span>
            </h2>
          </div>
          <p className='text-slate-400 text-sm max-w-xs leading-relaxed border-l border-slate-800 pl-6'>
            Whether you are a solo dev or a scaling agency, FreelancerAI adapts
            its logic to your specific industry needs.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {useCases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden ${useCase.size}`}
            >
              {/* Animated Glow on Hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />

              <div className='relative z-10 h-full flex flex-col justify-between'>
                <div>
                  <div className='w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500'>
                    {useCase.icon}
                  </div>

                  <h4 className='text-blue-200 text-xs font-bold uppercase tracking-widest mb-2'>
                    {useCase.subtitle}
                  </h4>
                  <h3 className='text-2xl font-bold text-white mb-4'>
                    {useCase.title}
                  </h3>
                  <p className='text-slate-400 text-sm leading-relaxed max-w-sm'>
                    {useCase.description}
                  </p>
                </div>

                <div className='mt-12 flex items-center justify-between'>
                  <div className='px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-tighter'>
                    {useCase.stats}
                  </div>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className='w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-950 cursor-pointer shadow-lg'
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
