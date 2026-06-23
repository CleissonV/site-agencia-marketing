import TeamCard from '../components/ui/TeamCard'
import { team } from '../constants/data'

export default function Team() {
  return (
    <section id="equipe" className="bg-[#050505] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ff6b35] mb-3">Time</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#fafafa]">
            A equipe por<br />trás da ORBIT
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
