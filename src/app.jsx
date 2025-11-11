import React, { useEffect } from 'react'
import TerminalWindow from './components/TerminalWindow'
import ProjectsGrid from './components/ProjectsGrid'
import ExperienceTimeline from './components/ExperienceTimeline'
import SkillsWidget from './components/SkillsWidget'
import ContactCLI from './components/ContactCLI'
import ThreeHero from './components/ThreeHero'

export default function App(){
  useEffect(()=>{
    function onKey(e){
      if(e.key === 'p') document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})
      if(e.key === 'r') window.open('/resume.pdf', '_blank')
      if(e.key === 'c') document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[])

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-black/30 backdrop-blur px-6 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="mono text-sm text-terminal-accent">user@portfolio:~$</div>
          <nav className="hidden md:flex gap-4 text-sm opacity-80">
            <a href="#projects" className="hover:text-terminal-accent">projects</a>
            <a href="#experience" className="hover:text-terminal-accent">experience</a>
            <a href="#skills" className="hover:text-terminal-accent">skills</a>
            <a href="#contact" className="hover:text-terminal-accent">contact</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a href="/resume.pdf" download className="px-3 py-1 text-sm border rounded border-slate-700 hover:bg-slate-800">Resume</a>
        </div>
      </header>

      <main className="px-6 py-10 max-w-6xl mx-auto relative">
        <ThreeHero />
        <div className="relative z-20">
          <TerminalWindow />
          <section id="projects" className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <ProjectsGrid />
          </section>

          <section id="experience" className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Experience</h2>
            <ExperienceTimeline />
          </section>

          <section id="skills" className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <SkillsWidget />
          </section>

          <section id="contact" className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <ContactCLI />
          </section>
        </div>
      </main>

      <footer className="py-6 text-center text-sm opacity-70">© {new Date().getFullYear()} — Portfolio</footer>
    </div>
  )
}