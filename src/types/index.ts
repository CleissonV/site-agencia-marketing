import type { IconType } from 'react-icons'

export interface AgencyService {
  icon: IconType
  title: string
  desc: string
}

export interface CaseStudy {
  client: string
  category: string
  bg: string
  slug: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  initial: string
}

export interface ProcessStep {
  number: string
  title: string
  desc: string
}

export interface FooterColumn {
  title: string
  links: string[]
}
