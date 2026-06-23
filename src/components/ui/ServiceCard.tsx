import type { AgencyService } from '../../types'

interface Props {
  service: AgencyService
  index: number
}

export default function ServiceCard({ service }: Props) {
  const Icon = service.icon
  return (
    <div className="service-card rounded-xl p-6 flex flex-col gap-4 bg-[#0f0f0f]">
      <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#ff6b35] text-2xl">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-[#fafafa]">{service.title}</h3>
      <p className="text-sm text-[#888] leading-relaxed">{service.desc}</p>
    </div>
  )
}
