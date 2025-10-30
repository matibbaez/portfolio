import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Portfolio',
  description:
    "Estudiante de Tecnicatura en Programación. Apasionado por el desarrollo de software. Me especializo en construir soluciones web completas, desde el frontend hasta la infraestructura.",
  href: 'http://localhost:3010',
  author: 'Matias Baez',
  locale: 'en-US',
  location: 'Argentina',
  email: 'mfbcaneda@gmail.com'
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'inicio',
  },
  {
    href: '/projects',
    label: 'proyectos',
  },
  {
    href: '/blog',
    label: 'blog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/matibbaez',
    label: 'GitHub',
  },
  {
    href: 'mailto:mfbcaneda@gmail.com',
    label: 'Email',
  },
  {
    href: 'tel:+541153464411',
    label: 'Phone',
  },
  {
    href: 'https://www.instagram.com/matibbaez',
    label: 'Instagram',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Instagram: 'lucide:instagram',
  Phone: 'lucide:phone',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  'Web Development': Category[]
  'Development Tools': Category[]
  'Hosting and Cloud Services': Category[]
  'Operating Systems': Category[]
  'Other Programming Languages and Technologies': Category[]
  'Web Servers': Category[]
  Databases: Category[]
  'Other Software': Category[]
}

export const technologies: Technologies = {
  'Web Development': [
    { text: 'HTML', logo: 'mdi:language-html5' },
    { text: 'Angular', logo: 'simple-icons:angular' },
    { text: 'JavaScript', logo: 'mdi:language-javascript' },
    { text: 'CSS', logo: 'mdi:language-css3' },
    { text: 'Astro', logo: 'simple-icons:astro' },
    { text: 'Tailwind CSS', logo: 'mdi:tailwind' },
    { text: 'React', logo: 'simple-icons:react' },
  ],
  'Development Tools': [
    { text: 'Git', logo: 'mdi:git' },
    { text: 'GitHub', logo: 'simple-icons:github' },
  ],
  'Hosting and Cloud Services': [
    { text: 'Netlify', logo: 'cib:netlify' },
    { text: 'Vercel', logo: 'simple-icons:vercel' },
  ],
  'Operating Systems': [
    { text: 'Windows', logo: 'mdi:windows' },
    { text: 'Ubuntu', logo: 'mdi:ubuntu' },
  ],
  'Other Programming Languages and Technologies': [
    { text: 'Node.js', logo: 'mdi:nodejs' },
    { text: 'Python', logo: 'mdi:language-python' },
  ],
  'Web Servers': [
    { text: 'Apache', logo: 'cib:apache' },
    { text: 'Nginx', logo: 'cib:nginx' },
  ],
  Databases: [
    { text: 'MySQL', logo: 'cib:mysql' },
    { text: 'MongoDB', logo: 'cib:mongodb' },
    { text: 'Supabase', logo: 'simple-icons:supabase' },
  ],
  'Other Software': [
    { text: 'Visual Studio', logo: 'mdi:visual-studio' },
  ],
}
