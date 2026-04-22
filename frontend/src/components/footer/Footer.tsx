'use client'
import { FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-[#CDCDCD] pt-24 pb-12 px-8 border-t border-black/5'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-20'>
          {/* Brand Identity */}
          <div className='md:col-span-2'>
            <div className='text-blue-600 font-black text-2xl mb-1 tracking-tighter'>
              DealCraft<span className='text-slate-800'>AI</span>
            </div>
            <p className='text-slate-600 text-xs font-bold uppercase tracking-widest mb-8'>
              The Working AI Proposal
            </p>

            <div className='flex gap-4'>
              {[
                
                { Icon: FaXTwitter, href: 'https://x.com/dealcraft_ai?s=21' }
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className='w-10 h-10 bg-white border border-black/5 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-md'
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className='grid grid-cols-2 gap-8 md:col-span-2'>
            <div className='space-y-4'>
              <h4 className='text-slate-800 text-xs font-black uppercase tracking-[0.2em] mb-6'>
                Quick Links
              </h4>
              <ul className='space-y-3'>
                {['Home', 'Features', 'How it Works', 'Use Case'].map(
                  (link) => (
                    <li key={link}>
                      <Link
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className='text-slate-600 text-sm font-medium hover:text-blue-600 transition-colors'
                      >
                        {link}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className='space-y-4'>
              <h4 className='text-slate-800 text-xs font-black uppercase tracking-[0.2em] mb-6'>
                Support
              </h4>
              <ul className='space-y-3'>
                {['Contact', 'Help Center', 'Email'].map((link) => (
                  <li key={link}>
                    <button className='text-slate-600 text-sm font-medium hover:text-blue-600 transition-colors text-left'>
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='text-slate-500 text-[9px] font-bold uppercase tracking-[0.3em]'>
            © {currentYear} BuildON Inc. All Rights Reserved.
          </div>
          <div className='flex gap-6 text-slate-500 text-[9px] font-bold uppercase tracking-widest'>
            <button className='hover:text-slate-800 transition-colors'>
              Privacy Policy
            </button>
            <button className='hover:text-slate-800 transition-colors'>
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
