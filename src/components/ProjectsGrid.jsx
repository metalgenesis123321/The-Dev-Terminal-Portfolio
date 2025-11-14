// src/components/ProjectsGrid.jsx
import React, { useState } from 'react'
import { projects } from '../data/projects'
import ProjectModal from './ProjectModal'

export default function ProjectsGrid(){
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(null)

  const techs = Array.from(new Set(projects.flatMap(p=>p.tech))).sort()
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tech.includes(filter))

  return (
    <div>
      <div className="mb-4 flex gap-2 items-center flex-wrap">
        <div className="text-sm opacity-80 mr-2">Filter:</div>
        <button
          className={`px-2 py-1 text-sm rounded ${filter==='All' ? 'bg-terminal-accent text-black' : 'border'}`}
          onClick={()=>setFilter('All')}
        >
          All
        </button>
        {techs.map(t => (
          <button
            key={t}
            onClick={()=>setFilter(t)}
            className={`px-2 py-1 text-sm rounded ${filter===t ? 'bg-terminal-accent text-black' : 'border'}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Use auto-rows-fr so every grid cell stretches equally */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
        {filtered.map(p => (
          <article
            key={p.id}
            className="h-full p-4 border rounded bg-[#07131A] hover:shadow-lg transition cursor-pointer flex flex-col justify-between"
            onClick={()=>setOpen(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e)=> { if(e.key === 'Enter') setOpen(p) }}
          >
            <div className="flex-1">
              {/* Tech small line */}
              <div className="text-xs mono opacity-60 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                {p.tech.join(' · ')}
              </div>

              {/* Title: clamp to 3 lines */}
              <h3
                className="font-semibold text-lg leading-snug"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
              >
                {p.title}
              </h3>

              {/* Short description: clamp to 6 lines */}
              <p
                className="text-sm opacity-80 mt-3"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
              >
                {p.short}
              </p>

              <div className="mt-4 text-sm opacity-70">{p.repo ? 'Repo available' : 'No repo'}</div>
            </div>

            {/* bottom row: view details button aligned to bottom */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={(e)=>{ e.stopPropagation(); setOpen(p) }}
                className="px-3 py-1 rounded bg-terminal-accent text-black text-sm"
              >
                View details
              </button>
            </div>
          </article>
        ))}
      </div>

      {open && <ProjectModal project={open} onClose={()=>setOpen(null)} />}
    </div>
  )
}