import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="get-started" className="py-16 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold text-slate-900">Pronto a partire?</h3>
            <p className="mt-3 text-slate-600">Crea un nuovo progetto e pubblica in poche ore. Nessuna configurazione complicata, solo risultati.</p>
            <div className="mt-6">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition">
                Crea il tuo progetto
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
