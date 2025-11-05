export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Vibe Studio. Tutti i diritti riservati.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-slate-900">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-slate-900">Termini</a>
            <a href="#contact" className="text-slate-500 hover:text-slate-900">Contatti</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
