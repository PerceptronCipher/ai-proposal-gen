// ai-proposal-gen/frontend/src/components/proposal/Architecture.tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, RotateCcw, Sparkles } from 'lucide-react'

export default function ProposalArchitecture() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('Proposal')
  const [copied, setCopied] = useState(false)

  const handleGenerate = async () => {
    if (!input) return
    setLoading(true)
    try {
      const response = await fetch(
        'https://ai-proposal-gen-1.onrender.com/generate',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ description: input }),
        },
      )
      const data = await response.json()
      setOutput(data.output)
    } catch (error) {
      setOutput('Error connecting to AI service. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    if (!output) return
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <section id='proposal' className='py-20 bg-[#020617] px-6 relative'>
      <div className='max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 md:p-12 shadow-2xl'>
        <div className='text-center mb-10'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight'>
            Proposal Architecture
          </h2>
          <p className='text-slate-400 text-sm font-medium'>
            Generate Winning Proposal Drafts In Seconds
          </p>
        </div>

        {/* Input Area */}
        <div className='relative'>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Paste Freelance Job Description Here...'
            className='w-full h-40 bg-white rounded-2xl p-6 text-slate-800 focus:ring-2 focus:ring-blue-400/50 outline-none mb-6 shadow-inner transition-all resize-none'
          />
          <div className='absolute bottom-10 right-4 text-[10px] font-bold text-slate-400 uppercase tracking-tighter'>
            {input.length} characters
          </div>
        </div>

        <div className='flex justify-center mb-10'>
          <motion.button
            onClick={handleGenerate}
            disabled={loading || !input}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='bg-gradient-to-r from-pink-200 to-blue-200 hover:from-pink-300 hover:to-blue-300 px-10 py-4 rounded-xl font-black text-slate-800 shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
          >
            {loading ? (
              <>
                <RotateCcw className='animate-spin' size={18} />
                <span>Analyzing Scope...</span>
              </>
            ) : (
              <>
                <Sparkles size={18} />
                <span>Generate {activeTab}</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-center gap-4 md:gap-8 mb-8 text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400'>
          {['Proposal', 'Pricing', 'Risk', 'Contract'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 transition-all ${
                activeTab === tab
                  ? 'text-blue-300 border-b-2 border-blue-300'
                  : 'hover:text-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Output Area */}
        <div className='relative group'>
          <motion.div
            layout
            className='bg-white rounded-3xl p-8 min-h-[250px] text-slate-700 text-sm md:text-base leading-relaxed shadow-2xl relative overflow-hidden'
          >
            <AnimatePresence mode='wait'>
              {loading ? (
                <motion.div
                  key='loading'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='space-y-3 pt-4'
                >
                  <div className='h-4 bg-slate-100 rounded-full w-3/4 animate-pulse' />
                  <div className='h-4 bg-slate-100 rounded-full w-full animate-pulse' />
                  <div className='h-4 bg-slate-100 rounded-full w-5/6 animate-pulse' />
                  <div className='h-4 bg-slate-100 rounded-full w-2/3 animate-pulse' />
                </motion.div>
              ) : output ? (
                <motion.div
                  key='output'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='relative'
                >
                  <p className='whitespace-pre-wrap font-medium'>{output}</p>
                </motion.div>
              ) : (
                <div
                  key='placeholder'
                  className='italic text-slate-400 text-center pt-16 flex flex-col items-center gap-3'
                >
                  <div className='w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center'>
                    <Sparkles className='text-slate-200' size={24} />
                  </div>
                  Your generated {activeTab.toLowerCase()} content will appear
                  here...
                </div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Copy Button (Floating) */}
          {output && !loading && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={handleCopy}
              className={`absolute top-4 right-4 p-3 rounded-xl backdrop-blur-md transition-all shadow-lg flex items-center gap-2 ${
                copied
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-900/5 hover:bg-slate-900/10 text-slate-600'
              }`}
            >
              {copied ? (
                <>
                  <Check size={16} />
                  <span className='text-[10px] font-bold uppercase tracking-tighter'>
                    Copied!
                  </span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span className='text-[10px] font-bold uppercase tracking-tighter'>
                    Copy Text
                  </span>
                </>
              )}
            </motion.button>
          )}
        </div>
      </div>
    </section>
  )
}
