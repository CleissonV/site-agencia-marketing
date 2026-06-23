import { clients } from '../constants/data'

const doubled = [...clients, ...clients]
const reversedDoubled = [...clients].reverse().concat([...clients].reverse())

export default function Clients() {
  return (
    <section className="bg-[#050505] py-24 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#555] mb-3">Clientes</p>
        <h2 className="text-4xl md:text-5xl font-black text-[#fafafa]">Eles confiam<br />na ORBIT</h2>
      </div>

      <div className="flex flex-col gap-6 overflow-hidden">
        <div className="overflow-hidden">
          <div className="marquee-left flex gap-12 w-max">
            {doubled.map((name, i) => (
              <span
                key={`l-${i}`}
                className="text-sm font-semibold text-[#333] uppercase tracking-widest whitespace-nowrap hover:text-[#ff6b35] transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="marquee-right flex gap-12 w-max">
            {reversedDoubled.map((name, i) => (
              <span
                key={`r-${i}`}
                className="text-sm font-semibold text-[#444] uppercase tracking-widest whitespace-nowrap hover:text-[#4ecdc4] transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
