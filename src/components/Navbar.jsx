import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-lg font-semibold tracking-tight">Vibe Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-indigo-600 transition">Caratteristiche</a>
            <a href="#pricing" className="hover:text-indigo-600 transition">Piani</a>
            <a href="#contact" className="hover:text-indigo-600 transition">Contatti</a>
            <a href="#get-started" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white font-medium shadow hover:bg-indigo-700 transition">
              Inizia
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200/70 py-3 space-y-2">
            <a href="#features" className="block px-2 py-2 rounded hover:bg-slate-100">Caratteristiche</a>
            <a href="#pricing" className="block px-2 py-2 rounded hover:bg-slate-100">Piani</a>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-slate-100">Contatti</a>
            <a href="#get-started" className="block px-2 py-2 rounded bg-indigo-600 text-white text-center">Inizia</a>
          </div>
        )}
      </div>
    </header>
  )
}
