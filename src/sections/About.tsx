const pillars = [
  {
    number: '01',
    title: 'Estratégia Antes de Tudo',
    desc: 'Cada campanha começa com dados, não achismos.',
  },
  {
    number: '02',
    title: 'Criatividade com Propósito',
    desc: 'Design e copy que servem ao objetivo do negócio.',
  },
  {
    number: '03',
    title: 'Resultados Mensuráveis',
    desc: 'Relatórios transparentes. Sem métricas de vaidade.',
  },
]

export default function About() {
  return (
    <section className="bg-[#0a0a0a] py-24 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ffe66d] mb-3">Manifesto</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#fafafa] leading-tight">
            Acreditamos que marketing de verdade gera negócio.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.number} className="flex flex-col gap-4 p-8 rounded-xl bg-[#0f0f0f] border border-[#1f1f1f]">
              <span className="text-4xl font-black text-[#1f1f1f]">{p.number}</span>
              <h3 className="text-xl font-bold text-[#fafafa]">{p.title}</h3>
              <p className="text-[#666] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
