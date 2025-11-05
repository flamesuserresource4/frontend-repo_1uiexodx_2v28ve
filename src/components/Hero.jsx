import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-sky-50 to-violet-50" />
      <div aria-hidden className="pointer-events-none absolute -top-24 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
              Nuovo • Maggiore velocità e qualità
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Crea applicazioni straordinarie con l'aiuto dell'AI
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Un ambiente moderno per progettare, sviluppare e pubblicare idee in poche ore. Interfaccia elegante, performance veloci e strumenti pensati per te.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition">
                Inizia ora
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition">
                Scopri le funzionalità
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-violet-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white shadow p-3 border border-slate-200">
              <p className="text-sm font-medium text-slate-700">Design pulito</p>
            </div>
            <div className="absolute -top-4 -right-4 rounded-xl bg-white shadow p-3 border border-slate-200">
              <p className="text-sm font-medium text-slate-700">Performance elevate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
