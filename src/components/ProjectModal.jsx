// src/components/ProjectModal.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectModal({project, onClose}){
  const [idx, setIdx] = useState(0)
  useEffect(()=>{
    function onKey(e){ if(e.key==='Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[onClose])

  if(!project) return null
  const imgs = project.images || []

  return (
    <AnimatePresence>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        <motion.div initial={{y:20}} animate={{y:0}} exit={{y:20}} className="bg-[#071017] max-w-3xl w-full p-6 rounded border">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm opacity-80">{project.short}</p>
            </div>
            <button onClick={onClose} className="ml-4 px-2 py-1 border rounded">Close</button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4">
            {/* No images path */}
            {imgs.length === 0 ? (
              <div>
                <div className="text-sm mono opacity-70 mb-2">Tech</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => <span key={t} className="px-2 py-1 border rounded text-sm">{t}</span>)}
                </div>

                <div className="mt-2 text-sm">
                  <ul className="list-disc ml-5">
                    {project.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
                  </ul>
                </div>

                <div className="mt-4 flex gap-3">
                  {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="underline">Repository</a>}
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="underline">Live</a>}
                </div>
              </div>
            ) : (
              // (kept for completeness — will not show since images are empty)
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <img src={imgs[idx]} alt={`${project.title} screenshot ${idx+1}`} className="w-full h-64 object-cover rounded" />
                    <button onClick={()=>setIdx((idx-1+imgs.length)%imgs.length)} className="absolute left-2 top-1/2 -translate-y-1/2 px-2 py-1 border rounded">‹</button>
                    <button onClick={()=>setIdx((idx+1)%imgs.length)} className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 border rounded">›</button>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="text-sm mono opacity-70 mb-2">Tech</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => <span key={t} className="px-2 py-1 border rounded text-sm">{t}</span>)}
                  </div>

                  <div className="mt-4 text-sm">
                    <ul className="list-disc ml-5">
                      {project.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}