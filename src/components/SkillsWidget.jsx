// src/components/SkillsWidget.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function SkillsWidget() {
  const skillGroups = [
    {
      group: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C', level: 80 },
        { name: 'C++', level: 82 },
        { name: 'C#', level: 75 },
        { name: 'Java', level: 78 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      group: 'Web Development',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 88 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 75 },
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'PHP', level: 70 }
      ]
    },
    {
      group: 'Databases',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      group: 'Machine Learning & AI',
      skills: [
        { name: 'PyTorch', level: 92 },
        { name: 'TensorFlow', level: 88 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'OpenCV', level: 82 }
      ]
    },
    {
      group: 'Tools & Cloud',
      skills: [
        { name: 'AWS', level: 88 },
        { name: 'Linux', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 68 }
      ]
    }
  ]

  // Motion variants for group card and bar
  const cardVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="space-y-6">
      {skillGroups.map((group) => (
        <motion.div
          key={group.group}
          className="p-4 border border-slate-800/60 rounded bg-[#071017]"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <h3 className="font-semibold mb-3">{group.group}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {group.skills.map((skill) => (
              <div key={skill.name} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm mono opacity-70">{skill.level}%</span>
                </div>

                <div className="mt-1 h-2 bg-slate-800 rounded overflow-hidden">
                  {/* Background bar (empty) */}
                  <div className="relative w-full h-full">
                    {/* Animated fill */}
                    <motion.div
                      className="h-full rounded bg-terminal-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.9, ease: 'circOut', delay: 0.08 }}
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}