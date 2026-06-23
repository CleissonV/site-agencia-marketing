import ServiceCard from '../components/ui/ServiceCard'
import { services } from '../constants/data'

export default function Services() {
  return (
    <section id="serviços" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ff6b35] mb-3">O que fazemos</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#fafafa]">Serviços que<br />geram resultado</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
