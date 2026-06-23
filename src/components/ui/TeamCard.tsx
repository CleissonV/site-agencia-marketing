import type { TeamMember } from '../../types'

interface Props {
  member: TeamMember
  index: number
}

export default function TeamCard({ member }: Props) {
  return (
    <div className="rounded-xl bg-[#0f0f0f] border border-[#1f1f1f] p-8 flex flex-col gap-4 hover:border-[#ff6b35]/40 transition-colors">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#4ecdc4] flex items-center justify-center text-white font-bold text-lg select-none">
        {member.initial}
      </div>
      <div>
        <h3 className="text-lg font-bold text-[#fafafa]">{member.name}</h3>
        <p className="text-sm text-[#ff6b35] font-medium mt-0.5">{member.role}</p>
      </div>
      <p className="text-sm text-[#888] leading-relaxed italic">"{member.bio}"</p>
    </div>
  )
}
