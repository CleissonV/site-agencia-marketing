import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  FaBars, FaTimes, FaChevronDown, FaArrowRight, FaRocket, FaChartLine,
  FaPalette, FaSearch, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp,
  FaPhone, FaStar,
} from 'react-icons/fa'
import { MdCampaign, MdBrandingWatermark, MdTrendingUp } from 'react-icons/md'

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: MdCampaign,
    name: 'Tráfego Pago',
    desc: 'Google Ads, Meta Ads e TikTok Ads com ROI garantido. Campanhas que convertem desde o dia 1.',
    color: '#ff6b35',
    result: '+340% ROI médio',
  },
  {
    icon: FaInstagram,
    name: 'Social Media',
    desc: 'Gestão completa das suas redes. Conteúdo estratégico, comunidade engajada e crescimento real.',
    color: '#4ecdc4',
    result: '+280% Engajamento',
  },
  {
    icon: FaPalette,
    name: 'Design Criativo',
    desc: 'Identidade visual impactante, posts que param o scroll e criativos que vendem.',
    color: '#ffe66d',
    result: '+180% CTR',
  },
  {
    icon: MdBrandingWatermark,
    name: 'Branding',
    desc: 'Construção de marca do zero. Posicionamento, naming, identidade visual completa.',
    color: '#ff6b9d',
    result: 'Brand recall +65%',
  },
  {
    icon: FaSearch,
    name: 'SEO',
    desc: 'Tráfego orgânico que cresce mês a mês. Estratégias técnicas e de conteúdo para rankear.',
    color: '#a78bfa',
    result: '+520% Tráfego orgânico',
  },
  {
    icon: FaEnvelope,
    name: 'Email Marketing',
    desc: 'Fluxos automatizados que nutrem leads e convertem. Open rate acima da média do mercado.',
    color: '#34d399',
    result: 'Open rate 45%+',
  },
]

const cases = [
  { brand: 'TechStore', result: '+420% vendas', period: '6 meses', service: 'Tráfego Pago', gradient: 'from-orange-600 to-rose-700', emoji: '📱' },
  { brand: 'Clínica Bella', result: '+180 leads/mês', period: '3 meses', service: 'Social Media', gradient: 'from-teal-600 to-cyan-700', emoji: '💆' },
  { brand: 'FoodBrasil', result: 'ROAS 8.4x', period: '4 meses', service: 'Google Ads', gradient: 'from-yellow-500 to-orange-600', emoji: '🍔' },
  { brand: 'Moda LUXE', result: '+290% faturamento', period: '8 meses', service: 'Branding + Tráfego', gradient: 'from-purple-600 to-pink-700', emoji: '👗' },
]

const steps = [
  {
    n: '01',
    title: 'Diagnóstico Gratuito',
    desc: 'Analisamos seu negócio, concorrentes e oportunidades. Entregamos um plano personalizado sem compromisso.',
  },
  {
    n: '02',
    title: 'Estratégia Sob Medida',
    desc: 'Desenvolvemos uma estratégia completa baseada nos seus objetivos, público e orçamento disponível.',
  },
  {
    n: '03',
    title: 'Execução com Precisão',
    desc: 'Time especializado executa cada ação com dados em tempo real e otimização contínua dos resultados.',
  },
  {
    n: '04',
    title: 'Resultados Comprovados',
    desc: 'Relatórios semanais transparentes. Você acompanha cada real investido e cada resultado gerado.',
  },
]

const testimonials = [
  {
    name: 'Lucas Mendes',
    role: 'CEO, TechStore',
    text: 'Em 6 meses com a ORBIT, saímos de R$ 50k para R$ 260k de faturamento mensal. Simplesmente extraordinário.',
    stars: 5,
  },
  {
    name: 'Dra. Sofia Lima',
    role: 'Clínica Bella',
    text: 'Nossa agenda lotou em 30 dias. 180 novos pacientes em 3 meses. ORBIT entrega o que promete.',
    stars: 5,
  },
  {
    name: 'Pedro Carvalho',
    role: 'Diretor, FoodBrasil',
    text: 'ROAS de 8.4x em campanha de e-commerce. Melhor investimento que já fizemos em toda a história da empresa.',
    stars: 5,
  },
]

const heroStats = [
  { n: '150+', l: 'Clientes', color: '#ff6b35' },
  { n: 'R$ 50M+', l: 'Gerenciado', color: '#4ecdc4' },
  { n: '8x', l: 'ROAS médio', color: '#ffe66d' },
  { n: '98%', l: 'Satisfação', color: '#ff6b9d' },
]

const contactChannels = [
  { icon: FaPhone, text: '(11) 94567-8901', label: 'Ligue agora' },
  { icon: FaWhatsapp, text: '(11) 94567-8901', label: 'WhatsApp direto' },
  { icon: FaEnvelope, text: 'contato@orbitagency.com.br', label: 'E-mail' },
]

const socialIcons = [FaInstagram, FaLinkedin, FaWhatsapp]

const formFields = [
  { label: 'Nome', type: 'text', ph: 'Seu nome' },
  { label: 'WhatsApp', type: 'tel', ph: '(11) 99999-9999' },
  { label: 'Site / Empresa', type: 'text', ph: 'empresa.com.br' },
]

// ─── Sub-components (hooks never called inside .map()) ────────────────────────

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="service-card bg-[#141414] p-8 cursor-default group rounded-xl"
    >
      <div
        className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center"
        style={{ backgroundColor: `${service.color}20` }}
      >
        <service.icon size={22} style={{ color: service.color }} />
      </div>
      <h3 className="font-bold text-xl text-white mb-2">{service.name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
        style={{ backgroundColor: `${service.color}15`, color: service.color }}
      >
        <MdTrendingUp size={12} />
        {service.result}
      </div>
    </motion.div>
  )
}

const CaseCard = ({ item, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`case-card aspect-video bg-gradient-to-br ${item.gradient} relative flex items-end p-6 cursor-pointer rounded-xl overflow-hidden`}
    >
      <div className="case-overlay absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
        <div className="text-center">
          <div className="text-white font-bold text-2xl mb-1">{item.result}</div>
          <div className="text-white/70 text-sm">{item.service}</div>
        </div>
      </div>
      <div className="relative z-10">
        <span className="text-3xl mr-2">{item.emoji}</span>
        <div className="inline">
          <div className="text-white font-bold text-lg">{item.brand}</div>
          <div className="text-white/60 text-xs">{item.period} · {item.service}</div>
        </div>
      </div>
    </motion.div>
  )
}

const ProcessStep = ({ step, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="font-black text-6xl text-[#1f1f1f] mb-4">{step.n}</div>
      <h3 className="font-bold text-xl text-white mb-2">{step.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
      {index < 3 && (
        <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-[#1f1f1f] to-[#ff6b35]/20 translate-x-1/2" />
      )}
    </motion.div>
  )
}

const TestiCard = ({ t, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="service-card bg-[#141414] p-8 rounded-xl"
    >
      <div className="flex gap-1 mb-4">
        {Array(t.stars).fill(0).map((_, j) => (
          <FaStar key={j} className="text-[#ffe66d]" size={14} />
        ))}
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #ff6b35, #4ecdc4)' }}
        >
          {t.name[0]}
        </div>
        <div>
          <div className="font-semibold text-white text-sm">{t.name}</div>
          <div className="text-[#ff6b35] text-xs">{t.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -80])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 z-50"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
          background: 'linear-gradient(90deg, #ff6b35, #4ecdc4, #ffe66d)',
        }}
      />

      {/* ── Navigation ── */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/96 backdrop-blur-xl border-b border-[#1f1f1f] py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-black text-xl flex items-center gap-1">
            <span className="text-white">ORBIT</span>
            <span className="text-[#ff6b35]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['Serviços', 'Cases', 'Processo'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-500 hover:text-white transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="#contato"
              className="px-6 py-2.5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #ff6b35, #4ecdc4)' }}
            >
              Diagnóstico Grátis
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#ff6b35]">
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#141414] border-t border-[#1f1f1f] overflow-hidden"
            >
              <div className="flex flex-col gap-5 p-6">
                {['Serviços', 'Cases', 'Processo', 'Contato'].map(item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-400 hover:text-white font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 20% 50%, rgba(255,107,53,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(78,205,196,0.06) 0%, transparent 50%)',
          }}
        />

        <motion.div style={{ y: heroY }} className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse" />
              <span className="text-[#ff6b35] text-xs tracking-[0.4em] uppercase font-medium">
                Agência de Marketing Digital · SP
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-black leading-none mb-6"
            >
              <span className="block text-[13vw] md:text-[10vw] lg:text-[110px] text-white">RESULTADOS</span>
              <span
                className="block text-[13vw] md:text-[10vw] lg:text-[110px]"
                style={{ WebkitTextStroke: '2px #ff6b35', color: 'transparent' }}
              >
                QUE VENDEM
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10"
            >
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Marketing digital com foco em resultados reais. Tráfego, social media, design e branding para
                fazer sua empresa crescer de verdade.
              </p>

              <div className="flex-shrink-0 grid grid-cols-2 gap-3">
                {heroStats.map((s, i) => (
                  <div
                    key={i}
                    className="text-center p-3 bg-[#141414] border border-[#1f1f1f] rounded-lg"
                  >
                    <div className="font-black text-xl" style={{ color: s.color }}>{s.n}</div>
                    <div className="text-gray-600 text-xs">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contato"
                className="group px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg, #ff6b35, #4ecdc4)' }}
              >
                <FaRocket size={14} />
                Diagnóstico Gratuito
                <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#cases"
                className="px-8 py-4 border border-[#1f1f1f] text-gray-400 rounded-xl font-medium hover:border-[#ff6b35] hover:text-white transition-all flex items-center gap-2"
              >
                <FaChartLine size={14} />
                Ver Resultados
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <FaChevronDown className="text-[#ff6b35] animate-bounce" size={16} />
        </motion.div>
      </section>

      {/* ── Marquee strip ── */}
      <div className="py-5 border-y border-[#1f1f1f] overflow-hidden">
        <div className="flex whitespace-nowrap marquee-left mb-3">
          {Array(4)
            .fill(['Tráfego Pago', 'Social Media', 'Branding', 'Design', 'SEO', 'Email Marketing', 'ROI Garantido'])
            .flat()
            .map((t, i) => (
              <span key={i} className="text-gray-700 text-sm font-medium mx-6">✦ {t}</span>
            ))}
        </div>
        <div className="flex whitespace-nowrap marquee-right">
          {Array(4)
            .fill(['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads', 'Pinterest Ads', 'YouTube Ads'])
            .flat()
            .map((t, i) => (
              <span key={i} className="text-[#ff6b35]/40 text-sm font-medium mx-6">○ {t}</span>
            ))}
        </div>
      </div>

      {/* ── Services ── */}
      <section id="serviços" className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#ff6b35] text-xs tracking-[0.3em] uppercase mb-3"
            >
              O Que Fazemos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black text-5xl md:text-6xl text-white"
            >
              Nossos Serviços
            </motion.h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Soluções completas de marketing digital para negócios que querem crescer com estratégia e dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* ── Cases ── */}
      <section id="cases" className="py-32 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#4ecdc4] text-xs tracking-[0.3em] uppercase mb-3"
            >
              Resultados Reais
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black text-5xl md:text-6xl text-white"
            >
              Cases de Sucesso
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cases.map((item, i) => (
              <CaseCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="processo" className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#ffe66d] text-xs tracking-[0.3em] uppercase mb-3"
          >
            Como Trabalhamos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-5xl md:text-6xl text-white"
          >
            Nosso Processo
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ProcessStep key={i} step={step} index={i} />
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#ff6b35] text-xs tracking-[0.3em] uppercase mb-3">Depoimentos</p>
            <h2 className="font-black text-4xl md:text-5xl text-white">
              Clientes que{' '}
              <span style={{ color: '#ff6b35' }}>cresceram</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <TestiCard key={i} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contato" className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,107,53,0.1) 0%, rgba(78,205,196,0.05) 50%, transparent 70%)',
          }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#ff6b35] text-xs tracking-[0.3em] uppercase mb-4">Pronto Para Crescer?</p>
            <h2 className="font-black text-5xl md:text-7xl text-white mb-6">
              Vamos{' '}
              <span style={{ WebkitTextStroke: '2px #ff6b35', color: 'transparent' }}>CRESCER</span>
              <br />juntos?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Diagnóstico completo gratuito. Sem compromisso. Em até 24h você recebe um plano personalizado
              para o seu negócio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact info column */}
            <div className="space-y-4">
              {contactChannels.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-[#141414] border border-[#1f1f1f] rounded-xl"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,107,53,0.1)' }}
                  >
                    <c.icon className="text-[#ff6b35]" size={16} />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">{c.label}</div>
                    <div className="text-white font-medium text-sm">{c.text}</div>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 mt-6">
                {socialIcons.map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-[#141414] border border-[#1f1f1f] rounded-lg flex items-center justify-center text-gray-500 hover:text-[#ff6b35] hover:border-[#ff6b35] transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form column */}
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              {formFields.map((f, i) => (
                <div key={i}>
                  <label className="block text-xs text-gray-600 mb-1.5 uppercase tracking-wider">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.ph}
                    className="w-full bg-[#141414] border border-[#1f1f1f] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-700 focus:border-[#ff6b35] focus:outline-none transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs text-gray-600 mb-1.5 uppercase tracking-wider">
                  Serviço de Interesse
                </label>
                <select className="w-full bg-[#141414] border border-[#1f1f1f] rounded-xl px-4 py-3 text-gray-500 text-sm focus:border-[#ff6b35] focus:outline-none transition-colors">
                  <option>Selecione um serviço</option>
                  {services.map(s => (
                    <option key={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-white font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg, #ff6b35, #4ecdc4)' }}
              >
                Solicitar Diagnóstico Grátis
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-black text-xl text-white">
            ORBIT<span className="text-[#ff6b35]">.</span>
          </span>
          <p className="text-gray-700 text-xs">
            © 2024 ORBIT Agency. CNPJ 00.000.000/0001-00. Marketing Digital Estratégico.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((Icon, i) => (
              <a key={i} href="#" className="text-gray-700 hover:text-[#ff6b35] transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
