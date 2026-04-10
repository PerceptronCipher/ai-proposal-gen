'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  MousePointer2,
  Cpu,
  FileCheck,
} from 'lucide-react'

const steps = [
  {
    title: 'Input Context',
    icon: <MousePointer2 size={18} />,
    desc: 'Paste the job description or email thread.',
  },
  {
    title: 'AI Analysis',
    icon: <Cpu size={18} />,
    desc: 'Our engine identifies scope and potential risks.',
  },
  {
    title: 'Final Result',
    icon: <FileCheck size={18} />,
    desc: 'Get a conversion-optimized proposal.',
  },
]

export default function HowItWorks() {
  return (
    <section id='how-it-works' className='py-24 bg-[#020617] relative'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6'
        >
          <Sparkles size={12} /> Simple Workflow
        </motion.div>

        <h2 className='text-4xl md:text-5xl font-black text-white mb-20 tracking-tight'>
          Three steps to{' '}
          <span className='text-slate-500 italic'>perfection.</span>
        </h2>

        <div className='flex flex-col md:flex-row items-start justify-center gap-8'>
          {steps.map((step, i) => (
            <div key={i} className='flex flex-col items-center w-full group'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className='relative flex flex-col items-center p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 w-full transition-all group-hover:border-blue-500/30'
              >
                <div className='w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20 shadow-lg group-hover:scale-110 transition-transform'>
                  {step.icon}
                </div>
                <h3 className='text-xl font-bold text-white mb-2'>
                  {step.title}
                </h3>
                <p className='text-slate-500 text-sm leading-relaxed'>
                  {step.desc}
                </p>

                {/* Step Number Badge */}
                <div className='absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center text-[10px] font-black text-blue-400'>
                  0{i + 1}
                </div>
              </motion.div>

              {i < steps.length - 1 && (
                <div className='hidden md:block absolute translate-x-[180px] translate-y-[60px] opacity-20 group-hover:opacity-100 transition-opacity'>
                  <ArrowRight className='text-blue-400' size={32} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
