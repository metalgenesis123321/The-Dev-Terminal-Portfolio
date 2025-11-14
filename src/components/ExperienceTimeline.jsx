// src/components/ExperienceTimeline.jsx
import React from 'react'

export default function ExperienceTimeline(){
  const entries = [
    {
      date: 'June 2025 – August 2025',
      role: 'Research Intern — TCS Innovation Labs IITM (Chennai, India)',
      details: [
        'Designed a priority-based aircraft landing system project by building a custom reinforcement learning environment in Python, modeling aircraft states, transitions, and action spaces for 1000+ simulated flight sequences.',
        'Initiated development of a domain-specific reward function and trained a Deep Q-Network agent, achieving 20% better landing efficiency than baseline heuristics.',
        'Fine-tuned LLaMA 3.2 (11B & 90B) with Retrieval-Augmented Generation (RAG) to deliver domain-specific responses.'
      ]
    },
    {
      date: 'January 2024 – July 2024',
      role: 'Software Developer Intern — Intellect Design Arena (Chennai, India)',
      details: [
        'Developed the backend for a new financial management web app to replace an outdated version identified as slow by users.',
        'Boosted backend efficiency by refining APIs and database schemas, improving speed by 10% without reliability loss.',
        'Built scalable backend modules and streamlined RESTful APIs, reducing average query latency by 28% and supporting 25% more concurrent users.'
      ]
    },
    {
      date: 'August 2022 – January 2023',
      role: 'Network Associate Intern — Issquared Inc (Hyderabad, India, Remote)',
      details: [
        'Diagnosed and resolved network connectivity issues by analyzing packet data and traffic patterns, improving stability and reducing downtime by 15% across 30+ enterprise endpoints.',
        'Addressed hardware malfunctions via device replacements and firmware updates while coordinating with senior engineers to improve network security and performance.',
        'Executed and validated network configurations, troubleshooting deployment errors, and ensuring smooth rollout of 20+ routers and switches across 5 client sites.'
      ]
    }
  ]

  return (
    <div className="space-y-4">
      {entries.map((e,i)=>(
        <div key={i} className="p-4 border rounded bg-[#07131A]">
          <div className="flex justify-between items-start flex-col md:flex-row">
            <div className="flex-1">
              <div className="font-semibold">{e.role}</div>
              <div className="text-sm mono opacity-60">{e.date}</div>
              <ul className="mt-2 text-sm opacity-80 list-disc ml-5">
                {e.details.map((d,idx)=>(<li key={idx}>{d}</li>))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
