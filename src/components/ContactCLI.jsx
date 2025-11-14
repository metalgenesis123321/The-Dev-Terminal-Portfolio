import React, { useState } from 'react'

export default function ContactCLI(){
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Portfolio inquiry from website')
    const body = encodeURIComponent(message)
    window.location = `mailto:shravan@example.com?subject=${subject}&body=${body}`
  }
  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-[#07131A]">
      <div className="mono text-sm mb-2">{`> send-message`}</div>
      <textarea value={message} onChange={e=>setMessage(e.target.value)} required placeholder="Type your message here..." className="w-full p-2 mb-3 bg-black/20 rounded border border-slate-700" rows={4}/>
      <div className="flex gap-2">
        <button type="submit" className="px-3 py-1 rounded bg-terminal-accent text-black">Send (mailto)</button>
        <a href="mailto:shravan@example.com" className="px-3 py-1 rounded border">Open mail</a>
      </div>
    </form>
  )
}