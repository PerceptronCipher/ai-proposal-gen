'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Use Case', href: '#use-case' },
  ]

  return (
    <nav className='fixed top-0 w-full z-[100] px-6 py-4 transition-all duration-300'>
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        {/* Logo Section */}
        <Link href='/' className='flex items-center gap-2 group'>
          <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform'>
            <span className='text-white font-black text-xl'>D</span>
          </div>
          <div className='text-white font-bold text-xl tracking-tight'>
            Pitchcraft<span className='text-blue-400'>AI</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-10'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-slate-400 text-sm font-medium hover:text-white transition-all relative group'
            >
              {link.name}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full' />
            </Link>
          ))}
        </div>

        {/* CTA Button Section */}
        <div className='flex items-center gap-4'>
          <Link href='#proposal'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='hidden sm:flex items-center gap-2 bg-white text-slate-950 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative overflow-hidden group cursor-pointer'
            >
              {/* Shimmer Effect */}
              <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform' />

              <span>Generate Proposal</span>
              <ArrowRight
                size={14}
                className='group-hover:translate-x-1 transition-transform'
              />
            </motion.div>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='absolute top-20 left-6 right-6 p-8 bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-3xl z-[99] md:hidden'
          >
            <div className='flex flex-col gap-6'>
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='text-2xl font-bold text-slate-200 hover:text-blue-400 transition-colors'
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <hr className='border-white/10 my-2' />
              <Link href='#proposal' onClick={() => setIsOpen(false)}>
                <button className='w-full bg-blue-600 py-4 rounded-2xl font-bold text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)] active:scale-95 transition-all'>
                  Generate Proposal
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
