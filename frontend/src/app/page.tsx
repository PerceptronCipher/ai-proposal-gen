'use client'

import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import UseCase from '@/components/usecase/UseCase'
import ProposalArchitecture from '@/components/proposal/Architecture'
import HowItWorks from '@/components/features/HowItWorks'
import Features from '@/components/features/Features'
import Footer from '@/components/footer/Footer'
import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <main className='min-h-screen bg-[#020617] selection:bg-blue-500/30'>
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Use Case Section */}
      <UseCase />

      {/* Main Interaction Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ProposalArchitecture />
      </motion.div>

      {/* Features */}
      <Features />

      {/* Global Footer */}
      <Footer />

      {/* Optional: Global Background Decoration */}
      <div className='fixed inset-0 pointer-events-none -z-20'>
        <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full' />
        <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-600/5 blur-[120px] rounded-full' />
      </div>
    </main>
  )
}
