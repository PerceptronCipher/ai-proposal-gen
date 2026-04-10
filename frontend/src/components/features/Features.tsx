'use client'

import { motion } from 'framer-motion'
import {
  Settings2,
  MessageSquareQuote,
  BrainCircuit,
  ArrowUpRight,
} from 'lucide-react'

const featureData = [
  {
    icon: <Settings2 className='w-6 h-6' />,
    title: 'Tone Customization',
    desc: 'Fine-tune your outreach with AI that adapts to your unique brand voice—from boardroom formal to friendly.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: <MessageSquareQuote className='w-6 h-6' />,
    title: 'Smart Reply Generation',
    desc: 'Eliminate blank-page syndrome. Generate responses that resonate with high-ticket clients instantly.',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: <BrainCircuit className='w-6 h-6' />,
    title: 'Context Intelligence',
    desc: 'Our neural engine analyzes the depth of your conversations to provide relevant suggestions.',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
]

export default function Features() {
  return (
    <section
      id='features'
      className='py-24 bg-[#020617] relative overflow-hidden'
    >
      {/* Background Radial Glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0,transparent_70%)]' />

      <div className='max-w-6xl mx-auto px-6 relative z-10'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-black text-white tracking-tight'>
            Powered by <span className='text-blue-400'>Next-Gen AI.</span>
          </h2>
          <p className='text-slate-500 mt-4 max-w-xl mx-auto font-medium'>
            Everything you need to stop losing bids and start winning high-value
            contracts.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {featureData.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative p-10 rounded-[2.5rem] bg-gradient-to-br ${f.color} border border-white/5 hover:border-white/10 transition-all overflow-hidden`}
            >
              <div className='absolute -top-20 -right-20 w-40 h-40 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors' />

              <div className='w-14 h-14 bg-slate-950/80 rounded-2xl flex items-center justify-center text-blue-400 mb-8 border border-white/10'>
                {f.icon}
              </div>

              <h3 className='text-2xl font-bold text-white mb-4 tracking-tight'>
                {f.title}
              </h3>
              <p className='text-slate-400 text-sm leading-relaxed mb-8 font-medium italic'>
                {f.desc}
              </p>

              <div className='flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform cursor-pointer'>
                View Tech Stack <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
