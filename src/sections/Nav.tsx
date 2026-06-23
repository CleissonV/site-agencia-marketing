import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1 text-xl font-black tracking-tight">
          <span className="text-[#fafafa]">ORBIT</span>
          <span className="text-[#ff6b35] text-2xl leading-none">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888]">
          {['Serviços', 'Cases', 'Equipe', 'Processo', 'Contato'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-[#fafafa] transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden md:inline-flex bg-[#ff6b35] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#e55a25] transition-colors"
        >
          Falar com a equipe
        </a>
      </div>
    </nav>
  )
}
