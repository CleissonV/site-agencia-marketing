const stats = [
  { value: '150+', label: 'Projetos' },
  { value: '8 Anos', label: 'de Mercado' },
  { value: '98%', label: 'Satisfação' },
  { value: '40+', label: 'Prêmios' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-start gap-8">
        <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-4 py-1.5 text-xs font-medium text-[#888]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ecdc4] animate-pulse" />
          Agência de Marketing Digital
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight max-w-4xl">
          Estratégia.{' '}
          <span className="text-[#888]">Criatividade.</span>{' '}
          <span className="text-[#ff6b35]">Resultados.</span>
        </h1>

        <p className="text-lg text-[#666] max-w-xl leading-relaxed">
          Somos uma agência de marketing digital que transforma marcas em referências no mercado.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#cases"
            className="bg-[#ff6b35] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#e55a25] transition-colors"
          >
            Ver nossos cases →
          </a>
          <a
            href="#equipe"
            className="border border-[#2a2a2a] text-[#fafafa] font-semibold px-7 py-3.5 rounded-full hover:border-[#444] hover:bg-[#1a1a1a] transition-colors"
          >
            Conheça a equipe
          </a>
        </div>
      </div>

      <div className="w-full border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-3xl font-black text-[#fafafa]">{s.value}</span>
              <span className="text-sm text-[#555]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
