import CaseCard from '../components/ui/CaseCard'
import { cases } from '../constants/data'

export default function Cases() {
  return (
    <section id="cases" className="bg-[#050505] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4ecdc4] mb-3">Portfólio</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#fafafa]">Nossos Cases</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <CaseCard key={c.slug} caseStudy={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
