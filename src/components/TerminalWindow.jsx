import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const lines = [
  { cmd: 'whoami', result: 'Full-stack ML Engineer' },
  { cmd: 'about', result: 'I build production ML systems, cloud infra, and polished front-ends.' },
  { cmd: 'skills --top', result: 'Python · React · AWS · TensorFlow · Three.js' }
]

export default function TerminalWindow(){
  const [output, setOutput] = useState([])
  useEffect(()=>{
    let cancelled = false
    async function run(){
      for(const line of lines){
        if(cancelled) return
        await typeCommand(line.cmd)
        await sleep(260)
        if(cancelled) return
        await typeResult(line.result)
        await sleep(200)
      }
      setOutput(prev => [...prev, '> tip: press p (projects), r (resume), c (contact)'])
    }
    function sleep(ms){ return new Promise(r=>setTimeout(r, ms)) }
    function typeCommand(cmd){
      return new Promise(res=>{
        setOutput(prev => [...prev, `> ${cmd}`])
        setTimeout(res, 120)
      })
    }
    function typeResult(resText){
      return new Promise(res=>{
        setOutput(prev => [...prev, resText])
        setTimeout(res, 80)
      })
    }
    run()
    return ()=> { cancelled = true }
  }, [])

  return (
    <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="bg-[#071017] border border-slate-800 shadow-2xl rounded-lg p-6 mono">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-400"></span>
        <div className="ml-auto text-sm opacity-60">~/portfolio</div>
      </div>

      <div className="min-h-[160px]">
        {output.map((l, i) => (
          <div key={i} className="leading-6">
            <span className={l.startsWith('>') ? 'text-terminal-accent' : ''}>{l}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <a href="#projects" className="px-3 py-1 rounded bg-terminal-accent text-black text-sm">View Projects</a>
        <a href="/resume.pdf" className="px-3 py-1 border rounded text-sm border-slate-700">Download Resume</a>
        <a href="#contact" className="px-3 py-1 border rounded text-sm border-slate-700">Contact</a>
      </div>
    </motion.div>
  )
}