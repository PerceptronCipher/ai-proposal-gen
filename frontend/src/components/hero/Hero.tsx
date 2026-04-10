'use client'

import Image from 'next/image'
import avartar from '../avartar.png'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className='relative pt-24 lg:pt-32 pb-16 px-6 overflow-hidden bg-[#020617]'>
      {/* Background Glows to match the deep blue/dark theme in the image */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] -z-10' />
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/5 blur-[120px] -z-10' />

      <div className='max-w-6xl mx-auto'>
        <div className='grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center'>
          {/* Image Side - Constrained and Professional */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className='order-first lg:order-last relative group flex justify-center lg:justify-end'
          >
            <div className='relative w-full max-w-[320px] md:max-w-[380px] rounded-[2.5rem] border border-white/10 overflow-hidden bg-slate-900/40 backdrop-blur-md p-2 shadow-2xl transition-all duration-500 hover:border-blue-500/30'>
              <div className='aspect-square relative rounded-[2rem] overflow-hidden bg-[#0f172a] flex items-center justify-center border border-white/5 shadow-inner'>
                <Image
                  src={avartar}
                  alt='Freelancer AI Dashboard Preview'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  priority
                />
              </div>

              {/* Status Badge */}
              <div className='absolute -bottom-2 -left-2 bg-[#020617] border border-white/10 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-2xl z-20'>
                <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
                <span className='text-[9px] text-slate-300 font-bold uppercase tracking-widest'>
                  AI Engine Ready
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text Content Side - Updated to match screenshot content */}
          <div className='text-center lg:text-left'>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6'
            >
              <Sparkles size={10} /> The Working AI Proposal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight'
            >
              Win More Clients with <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400'>
                AI Proposals & Contracts.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className='text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 text-sm md:text-lg font-medium leading-relaxed'
            >
              Paste any job description and instantly get a professional
              proposal, pricing suggestion, and risk analysis.
            </motion.p>

            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5'>
              <Link href='#proposal'>
                <motion.button
                  whileHover={{
                    y: -3,
                    boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.4)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className='bg-white text-slate-950 px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] flex items-center gap-2 transition-all shadow-xl'
                >
                  Generate Proposal <ArrowRight size={14} />
                </motion.button>
              </Link>

              <div className='flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5'>
                <ShieldCheck size={14} className='text-blue-500' />
                Risk Analysis Included
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}