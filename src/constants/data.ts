import {
  LuPalette,
  LuSmartphone,
  LuTarget,
  LuMonitor,
  LuPencil,
  LuTrendingUp,
} from 'react-icons/lu'
import type { AgencyService, CaseStudy, TeamMember, ProcessStep, FooterColumn } from '../types'

export const services: AgencyService[] = [
  { icon: LuPalette, title: 'Branding', desc: 'Identidade visual que faz sua marca ser lembrada' },
  { icon: LuSmartphone, title: 'Social Media', desc: 'Conteúdo estratégico que engaja e converte' },
  { icon: LuTarget, title: 'Performance', desc: 'Campanhas de mídia paga com ROI comprovado' },
  { icon: LuMonitor, title: 'UX/UI Design', desc: 'Interfaces intuitivas que encantam usuários' },
  { icon: LuPencil, title: 'Conteúdo', desc: 'Copywriting e SEO que ranqueia e persuade' },
  { icon: LuTrendingUp, title: 'SEO', desc: 'Visibilidade orgânica de longo prazo' },
]

export const cases: CaseStudy[] = [
  { client: 'Vertice Studio', category: 'Branding', bg: '#ff6b35', slug: 'vertice-studio' },
  { client: 'GrowLab', category: 'Performance', bg: '#4ecdc4', slug: 'growlab' },
  { client: 'Mosaic Digital', category: 'Social Media', bg: '#8b5cf6', slug: 'mosaic-digital' },
  { client: 'Nexum Tech', category: 'UX/UI', bg: '#06b6d4', slug: 'nexum-tech' },
  { client: 'Aurum Finance', category: 'Conteúdo', bg: '#f97316', slug: 'aurum-finance' },
  { client: 'Stella Health', category: 'SEO', bg: '#10b981', slug: 'stella-health' },
]

export const team: TeamMember[] = [
  {
    name: 'Lucas Andrade',
    role: 'CEO & Estrategista',
    bio: '15 anos transformando marcas no digital',
    initial: 'LA',
  },
  {
    name: 'Camila Reis',
    role: 'Diretora Criativa',
    bio: 'Design que conta histórias que vendem',
    initial: 'CR',
  },
  {
    name: 'Felipe Torres',
    role: 'Head de Performance',
    bio: 'Especialista em escalar marcas com mídia paga',
    initial: 'FT',
  },
]

export const process: ProcessStep[] = [
  { number: '01', title: 'Imersão', desc: 'Entendemos seu negócio, mercado e objetivos a fundo' },
  { number: '02', title: 'Estratégia', desc: 'Planejamos cada ação com base em dados reais' },
  { number: '03', title: 'Execução', desc: 'Time especializado trabalhando na sua marca' },
  { number: '04', title: 'Escala', desc: 'Iteramos e otimizamos continuamente os resultados' },
]

export const clients: string[] = [
  'Nike Brasil',
  'Mercado Livre',
  'iFood',
  'Nubank',
  'Magalu',
  'Totvs',
  'BTG Pactual',
  'XP Investimentos',
  'C6 Bank',
  'Vivo',
  'Claro',
  'Ambev',
  'Heineken Brasil',
  'Outback',
  "McDonald's",
  'Samsung Brasil',
  'LG Electronics',
  'Itaú',
  'Bradesco',
  'Santander',
]

export const footerCols: FooterColumn[] = [
  {
    title: 'Serviços',
    links: ['Branding', 'Social Media', 'Performance', 'UX/UI Design', 'Conteúdo', 'SEO'],
  },
  {
    title: 'Empresa',
    links: ['Sobre nós', 'Cases', 'Equipe', 'Processo', 'Blog', 'Carreiras'],
  },
  {
    title: 'Contato',
    links: ['contato@orbitagencia.com.br', '+55 11 9 9999-9999', 'São Paulo, SP — Brasil'],
  },
]
