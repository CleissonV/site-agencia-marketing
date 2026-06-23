<h1 align="center">ORBIT — Agência de Marketing Digital</h1>

<p align="center">
  Site institucional para agência de marketing criativo com cases interativos, marquee de clientes e processo de trabalho em etapas.
  <br /><br />
  <a href="https://site-agencia-marketing.vercel.app"><strong>🔗 Ver Demo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" />
</p>

---

## Sobre o Projeto

Site institucional para agência criativa ORBIT. Design dark com laranja vibrante (#ff6b35), teal e amarelo. Cards de cases com overlay animado no hover. Marquee duplo de clientes com direções opostas. Gradient-border animado no CTA via CSS `::before`.

## Funcionalidades

- Hero com headline impactante e strip de números
- 6 cards de serviços com hover translateY e borda animada
- Grid de cases com overlay de hover (.case-card + .case-overlay)
- Manifesto em 3 pilares
- Cards de equipe com perfis pessoais
- Processo de trabalho em 4 etapas
- Marquee duplo de clientes (marqueeLeft + marqueeRight)
- CTA com gradient-border CSS animado

## Stack

- **React 18 + TypeScript** — componentes tipados
- **Tailwind CSS 3** — utility-first
- **Framer Motion 11** — animações de entrada
- **Vite 5** — build rápido
- **react-icons** — ícones Lucide

## Instalação

```bash
git clone https://github.com/CleissonV/site-agencia-marketing
cd site-agencia-marketing
npm install
npm run dev
```

## Estrutura

```
src/
├── constants/
│   └── data.ts           # serviços, cases, equipe, processo, clientes
├── types/
│   └── index.ts          # AgencyService, CaseStudy, TeamMember, ProcessStep
├── components/
│   └── ui/
│       ├── ServiceCard.tsx
│       ├── CaseCard.tsx
│       ├── TeamCard.tsx
│       └── ProcessStep.tsx
├── sections/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Cases.tsx
│   ├── About.tsx
│   ├── Team.tsx
│   ├── Process.tsx
│   ├── Clients.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── App.tsx
```

---

Desenvolvido por [Cleisson Vilela](https://github.com/CleissonV)
