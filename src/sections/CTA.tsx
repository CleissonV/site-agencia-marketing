export default function CTA() {
  return (
    <section id="contato" className="bg-[#0a0a0a] py-32 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#555]">Vamos conversar</p>
        <h2 className="text-5xl md:text-7xl font-black text-[#fafafa] leading-tight">
          Pronto para<br />
          <span className="text-[#ff6b35]">crescer?</span>
        </h2>
        <p className="text-[#666] text-lg max-w-md leading-relaxed">
          Conte-nos sobre seu projeto e veja como podemos transformar sua marca.
        </p>
        <div className="gradient-border rounded-full">
          <a
            href="mailto:contato@orbitagencia.com.br"
            className="relative z-10 inline-flex items-center gap-2 bg-[#0a0a0a] text-[#fafafa] font-semibold text-lg px-10 py-4 rounded-full hover:bg-[#111] transition-colors"
          >
            Iniciar projeto →
          </a>
        </div>
      </div>
    </section>
  )
}
