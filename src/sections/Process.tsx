import ProcessStep from '../components/ui/ProcessStep'
import { process } from '../constants/data'

export default function Process() {
  return (
    <section id="processo" className="bg-[#0a0a0a] py-24 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4ecdc4] mb-3">Método</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#fafafa]">Como trabalhamos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {process.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} isLast={i === process.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
