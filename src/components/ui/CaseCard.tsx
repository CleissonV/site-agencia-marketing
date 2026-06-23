import type { CaseStudy } from '../../types'

interface Props {
  caseStudy: CaseStudy
  index: number
}

export default function CaseCard({ caseStudy }: Props) {
  return (
    <div className="case-card rounded-xl relative aspect-[4/3] cursor-pointer" style={{ background: caseStudy.bg }}>
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1">
          {caseStudy.category}
        </span>
        <h3 className="text-xl font-bold text-white">{caseStudy.client}</h3>
      </div>
      <div className="case-overlay absolute inset-0 bg-black/70 flex items-center justify-center rounded-xl">
        <a
          href={`#${caseStudy.slug}`}
          className="text-white font-semibold text-lg border border-white/40 px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
        >
          Ver case →
        </a>
      </div>
    </div>
  )
}
