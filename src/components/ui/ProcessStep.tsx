import type { ProcessStep as ProcessStepType } from '../../types'

interface Props {
  step: ProcessStepType
  index: number
  isLast: boolean
}

export default function ProcessStep({ step, isLast }: Props) {
  return (
    <div className="flex flex-col items-center text-center relative">
      <div className="w-20 h-20 rounded-full bg-[#0f0f0f] border border-[#1f1f1f] flex items-center justify-center mb-4 relative z-10">
        <span className="text-2xl font-black text-[#ff6b35]">{step.number}</span>
      </div>
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-[#ff6b35]/40 to-[#4ecdc4]/40" />
      )}
      <h3 className="text-lg font-bold text-[#fafafa] mb-2">{step.title}</h3>
      <p className="text-sm text-[#888] leading-relaxed max-w-[200px]">{step.desc}</p>
    </div>
  )
}
