import { footerCols } from '../constants/data'

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-1 text-xl font-black mb-4">
              <span className="text-[#fafafa]">ORBIT</span>
              <span className="text-[#ff6b35] text-2xl leading-none">.</span>
            </a>
            <p className="text-sm text-[#555] leading-relaxed max-w-[200px]">
              Marketing digital que transforma marcas em referências.
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-[#fafafa] uppercase tracking-widest mb-5">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#555] hover:text-[#fafafa] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#444]">© {new Date().getFullYear()} ORBIT Agency. Todos os direitos reservados.</p>
          <p className="text-xs text-[#333]">Feito com ♥ em São Paulo</p>
        </div>
      </div>
    </footer>
  )
}
