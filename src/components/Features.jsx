import { Rocket, Shield, Zap, Star } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Lancio rapidissimo',
    desc: 'Prototipi pronti in poche ore grazie a flussi ottimizzati e tool intelligenti.'
  },
  {
    icon: Shield,
    title: 'Sicurezza integrata',
    desc: 'Best practice e protezioni predefinite per lavorare in tranquillità.'
  },
  {
    icon: Zap,
    title: 'Prestazioni top',
    desc: 'Rendering rapido, bundle leggero e UX fluida su ogni dispositivo.'
  },
  {
    icon: Star,
    title: 'Design curato',
    desc: 'Componenti moderni, tipografia elegante e attenzione ai dettagli.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Tutto ciò che ti serve</h2>
          <p className="mt-3 text-slate-600">Strumenti semplici, intelligenti ed efficaci per trasformare le tue idee in prodotti reali.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
