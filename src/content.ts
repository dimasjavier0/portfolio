export type Lang = 'en' | 'es'

export const profile = {
  name: 'Dimas Javier Rodríguez Cabrera',
  shortName: 'Dimas Rodríguez',
  email: 'dimasjavier.0@gmail.com',
  github: 'https://github.com/dimasjavier0',
  linkedin: 'https://www.linkedin.com/in/dimas-javier-rodriguez-ba582b187/',
}

type Bi = Record<Lang, string>

export const ui = {
  nav: {
    home: { en: 'Home', es: 'Inicio' },
    about: { en: 'About', es: 'Sobre mí' },
    experience: { en: 'Experience', es: 'Experiencia' },
    projects: { en: 'Projects', es: 'Proyectos' },
    skills: { en: 'Skills', es: 'Habilidades' },
    education: { en: 'Education', es: 'Educación' },
    fun: { en: 'Fun', es: 'Diversión' },
    contact: { en: 'Contact', es: 'Contacto' },
  },
  hero: {
    greeting: { en: "Hello 👋, I'm", es: 'Hola 👋, soy' },
    // cycled by the typewriter under the name
    roles: {
      en: ['Full Stack Developer 💻', 'Frontend Developer 🎨', 'Backend Developer ⚙️', 'REST API Builder 🔌', 'Systems Engineer 🎓', 'QA Tester 🧪', 'Graphic Designer ✏️'],
      es: ['Desarrollador Full Stack 💻', 'Desarrollador Frontend 🎨', 'Desarrollador Backend ⚙️', 'Creador de APIs REST 🔌', 'Ingeniero en Sistemas 🎓', 'QA Tester 🧪', 'Diseñador Gráfico ✏️'],
    },
    intro: {
      en: [
        "I'm Dimas 😄 — a Systems Engineer from Honduras 🌎 who loves turning ideas into real products 🚀.",
        'I build web apps and APIs 🛠️ with clean, maintainable code, and when I log off you’ll find me gaming 🎮, listening to music 🎧, or hanging out with my dog 🐶.',
      ],
      es: [
        'Soy Dimas 😄 — Ingeniero en Sistemas de Honduras 🌎 al que le encanta convertir ideas en productos reales 🚀.',
        'Construyo aplicaciones web y APIs 🛠️ con código limpio y mantenible, y cuando me desconecto me encuentras jugando videojuegos 🎮, escuchando música 🎧 o con mi perro 🐶.',
      ],
    },
    ctaPrimary: { en: 'View my experience 👀', es: 'Ver mi experiencia 👀' },
    ctaSecondary: { en: "Let's talk ✉️", es: 'Hablemos ✉️' },
    location: { en: 'Tegucigalpa, Honduras', es: 'Tegucigalpa, Honduras' },
    openToWork: { en: 'Open to work', es: 'Disponible' },
    photoAlt: { en: 'Photo of Dimas Rodríguez', es: 'Foto de Dimas Rodríguez' },
  },
  fun: {
    title: { en: 'Beyond the Code 🎉', es: 'Más allá del código 🎉' },
    subtitle: {
      en: 'Cheerful, positive, and optimistic — I love exploring, learning new things, and meeting all kinds of people.',
      es: 'Alegre, positivo y optimista — me gusta explorar, aprender cosas nuevas y conocer todo tipo de personas.',
    },
    quote: {
      en: 'Don’t be afraid to fail — be afraid of not trying.',
      es: 'No tengas miedo de fallar, ten miedo de no intentarlo.',
    },
    quoteLabel: { en: 'My motto', es: 'Mi lema' },
    petTitle: { en: 'My co-pilot 🐶', es: 'Mi copiloto 🐶' },
    petText: {
      en: 'Official debugging supervisor. Has never approved a merge without a snack.',
      es: 'Supervisor oficial de debugging. Nunca ha aprobado un merge sin una galleta.',
    },
    petAlt: { en: "Dimas's dog", es: 'El perro de Dimas' },
    items: [
      { emoji: '🎮', en: 'Video games', es: 'Videojuegos' },
      { emoji: '🎬', en: 'Series & movies', es: 'Series y películas' },
      { emoji: '🎧', en: 'Music', es: 'Música' },
      { emoji: '🤝', en: 'Friends', es: 'Amigos' },
      { emoji: '📚', en: 'Learning new tech', es: 'Aprender tecnología' },
      { emoji: '🎨', en: 'Graphic design', es: 'Diseño gráfico' },
    ],
    itemsTitle: { en: 'Things that cheer me up', es: 'Cosas que me alegran' },
  },
  about: {
    title: { en: 'About Me 🙋‍♂️', es: 'Sobre mí 🙋‍♂️' },
    p1: {
      en: 'I am a Systems Engineer graduated from UNAH and a junior full stack developer with hands-on experience designing, building, and integrating RESTful APIs and microservices with Node.js and Express, backed by solid object-oriented programming fundamentals.',
      es: 'Soy Ingeniero en Sistemas egresado de la UNAH y desarrollador full stack junior con experiencia práctica diseñando, construyendo e integrando APIs RESTful y microservicios con Node.js y Express, con sólidos fundamentos de programación orientada a objetos.',
    },
    p2: {
      en: 'During my supervised professional practice at Sumadi I worked across the stack: JWT/OAuth authentication, PostgreSQL and MongoDB, AWS services (EC2, S3, Lambda, API Gateway), React interfaces, and functional testing of REST endpoints — all inside Scrum teams.',
      es: 'Durante mi práctica profesional supervisada en Sumadi trabajé en todo el stack: autenticación con JWT/OAuth, PostgreSQL y MongoDB, servicios de AWS (EC2, S3, Lambda, API Gateway), interfaces con React y pruebas funcionales de endpoints REST, todo dentro de equipos Scrum.',
    },
    p3: {
      en: 'Beyond code, I led the IEEE Computer Society student chapter at UNAH and volunteered as a math teacher. That taught me to communicate clearly, organize teams, and explain complex ideas simply. A background in graphic design also helps me care about UI and UX.',
      es: 'Más allá del código, presidí el capítulo estudiantil de IEEE Computer Society en la UNAH y fui docente voluntario de matemáticas. Eso me enseñó a comunicar con claridad, organizar equipos y explicar ideas complejas de forma sencilla. Mi formación en diseño gráfico también me ayuda a cuidar la UI y la UX.',
    },
    highlights: [
      { value: { en: 'APIs', es: 'APIs' }, label: { en: 'REST & microservices', es: 'REST y microservicios' } },
      { value: { en: 'Full Stack', es: 'Full Stack' }, label: { en: 'React + Node.js', es: 'React + Node.js' } },
      { value: { en: 'Leader', es: 'Líder' }, label: { en: 'IEEE CS UNAH president', es: 'Presidente IEEE CS UNAH' } },
    ],
    softTitle: { en: 'What I bring to a team', es: 'Lo que aporto a un equipo' },
    soft: {
      en: ['Teamwork', 'Effective communication', 'Problem solving', 'Leadership', 'Time management', 'Task prioritization', 'Working under pressure', 'Decision making'],
      es: ['Trabajo en equipo', 'Comunicación efectiva', 'Resolución de problemas', 'Liderazgo', 'Gestión del tiempo', 'Priorización de tareas', 'Trabajo bajo presión', 'Toma de decisiones'],
    },
    languagesTitle: { en: 'Languages', es: 'Idiomas' },
    languages: {
      en: ['Spanish — Native', 'English — B2 (upper intermediate)'],
      es: ['Español — Nativo', 'Inglés — B2 (intermedio alto)'],
    },
  },
  experience: {
    title: { en: 'Professional Experience 💼', es: 'Experiencia Profesional 💼' },
    subtitle: { en: 'Where I have learned, built, and led.', es: 'Donde he aprendido, construido y liderado.' },
  },
  projects: {
    title: { en: 'Projects 🚀', es: 'Proyectos 🚀' },
    subtitle: {
      en: 'Work I have designed, built, or contributed to.',
      es: 'Trabajos que he diseñado, construido o en los que he colaborado.',
    },
    problem: { en: 'Problem', es: 'Problema' },
    solution: { en: 'Approach', es: 'Propuesta' },
    role: { en: 'My role', es: 'Mi rol' },
    visit: { en: 'Visit site', es: 'Ver sitio' },
    code: { en: 'Code', es: 'Código' },
  },
  skills: {
    title: { en: 'Technical Skills 🛠️', es: 'Habilidades Técnicas 🛠️' },
    subtitle: {
      en: 'The technologies and tools I work with to build complete web solutions.',
      es: 'Las tecnologías y herramientas con las que trabajo para construir soluciones web completas.',
    },
  },
  education: {
    title: { en: 'Education & Certifications 🎓', es: 'Educación y Certificaciones 🎓' },
    subtitle: { en: 'Formal education and continuous learning.', es: 'Formación académica y aprendizaje continuo.' },
    eduTitle: { en: 'Education', es: 'Educación' },
    certTitle: { en: 'Courses & Certifications', es: 'Cursos y Certificaciones' },
  },
  contact: {
    title: { en: 'Get in Touch 📬', es: 'Hablemos 📬' },
    text: {
      en: 'Open to junior developer roles, collaborations, and conversations about web development and APIs.',
      es: 'Abierto a oportunidades como desarrollador junior, colaboraciones y conversaciones sobre desarrollo web y APIs.',
    },
    button: { en: 'Email Me', es: 'Envíame un correo' },
    fallback: { en: 'Or write to me directly at', es: 'O escríbeme directamente a' },
    copy: { en: 'Copy', es: 'Copiar' },
    copied: { en: 'Copied!', es: '¡Copiado!' },
  },
  footer: { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
  theme: { en: 'Toggle theme', es: 'Cambiar tema' },
  langSwitch: { en: 'Cambiar a español', es: 'Switch to English' },
  scrollDown: { en: 'Scroll to about section', es: 'Ir a la sección sobre mí' },
  menu: { en: 'Open menu', es: 'Abrir menú' },
} satisfies Record<string, unknown>

export type Experience = {
  role: Bi
  org: string
  period: Bi
  kind: Bi
  bullets: Record<Lang, string[]>
  tags?: string[]
}

export const experience: Experience[] = [
  {
    role: { en: 'Full Stack Developer (Trainee / Junior)', es: 'Desarrollador Full Stack (Trainee / Junior)' },
    org: 'Sumadi',
    period: { en: 'Feb 2025 – Jun 2025', es: 'Feb 2025 – Jun 2025' },
    kind: { en: 'Supervised professional practice', es: 'Práctica profesional supervisada' },
    bullets: {
      en: [
        'Integrated authentication with JWT and OAuth in backend services.',
        'Worked with SQL (PostgreSQL) and NoSQL (MongoDB) databases.',
        'Deployed services on AWS — EC2, S3, Lambda, and API Gateway for serverless architectures.',
        'Built dynamic React interfaces using Hooks, Context API, and Redux; contributed to an Electron.js desktop app.',
        'QA: functional testing of REST endpoints, response validation, SQL data checks, frontend–backend integration tests, Jest unit tests, and basic Playwright end-to-end tests.',
        'Collaborated through Git/GitHub (branching, issues) in Scrum teams.',
      ],
      es: [
        'Integración de autenticación con JWT y OAuth en servicios backend.',
        'Gestión de bases de datos SQL (PostgreSQL) y NoSQL (MongoDB).',
        'Despliegue de servicios en AWS: EC2, S3, Lambda y API Gateway para arquitecturas serverless.',
        'Construcción de interfaces dinámicas con React usando Hooks, Context API y Redux; participación en una app de escritorio con Electron.js.',
        'QA: pruebas funcionales de endpoints REST, validación de respuestas, verificación de datos con SQL, pruebas de integración frontend–backend, pruebas unitarias con Jest y pruebas end-to-end básicas con Playwright.',
        'Colaboración con Git/GitHub (branching, issues) en equipos Scrum.',
      ],
    },
    tags: ['Node.js', 'Express', 'React', 'Redux', 'AWS', 'PostgreSQL', 'MongoDB', 'Electron', 'Jest', 'Playwright'],
  },
  {
    role: { en: 'Customer Support Agent', es: 'Agente de Servicio al Cliente' },
    org: 'IBEX',
    period: { en: '2025 – 2026', es: '2025 – 2026' },
    kind: { en: 'Work', es: 'Trabajo' },
    bullets: {
      en: [
        'Resolved customer issues in English in a fast-paced, metrics-driven environment.',
        'Analyzed policies to find the right solution for each case.',
        'Strengthened empathy, problem solving, and working under pressure.',
      ],
      es: [
        'Resolución de casos de clientes en inglés en un entorno dinámico y orientado a métricas.',
        'Análisis de políticas para encontrar la solución adecuada en cada caso.',
        'Fortalecí la empatía, la resolución de problemas y el trabajo bajo presión.',
      ],
    },
  },
  {
    role: { en: 'Chapter President', es: 'Presidente del Capítulo' },
    org: 'IEEE Computer Society — UNAH Student Chapter',
    period: { en: '2023 – 2024', es: '2023 – 2024' },
    kind: { en: 'Leadership', es: 'Liderazgo' },
    bullets: {
      en: [
        'Led the student chapter, coordinating activities and technology initiatives for students.',
        'Organized teams and strengthened project management and communication skills.',
        'Collaborated on the website for the IEEE CONCAPAN event hosted in Honduras.',
      ],
      es: [
        'Dirigí el capítulo estudiantil, coordinando actividades e iniciativas tecnológicas para estudiantes.',
        'Organicé equipos y fortalecí mis habilidades de gestión de proyectos y comunicación.',
        'Colaboré en el sitio web del evento IEEE CONCAPAN celebrado en Honduras.',
      ],
    },
  },
  {
    role: { en: 'Volunteer Teacher', es: 'Docente Voluntario' },
    org: 'Escuela La Roca',
    period: { en: '2023 – 2024', es: '2023 – 2024' },
    kind: { en: 'Volunteering', es: 'Voluntariado' },
    bullets: {
      en: [
        'Taught math to students, adapting content to different learning levels.',
        'Developed effective communication and leadership in educational settings.',
      ],
      es: [
        'Impartí clases de matemáticas, adaptando los contenidos a distintos niveles de aprendizaje.',
        'Desarrollé comunicación efectiva y liderazgo en entornos educativos.',
      ],
    },
  },
]

export type Project = {
  name: string
  status: Bi
  statusKind: 'progress' | 'done' | 'collab' | 'design'
  summary: Bi
  problem?: Bi
  solution?: Bi
  role?: Bi
  stack: string[]
  link?: string
  repo?: string
  featured?: boolean
  images?: { src: string; alt: Bi }[]
}

export const projects: Project[] = [
  {
    name: 'LexFlow',
    featured: true,
    status: { en: 'In development', es: 'En desarrollo' },
    statusKind: 'progress',
    summary: {
      en: 'A platform to learn English vocabulary through contextual, sensory immersion — for A1 to intermediate learners, ESL teachers, travelers, and expats.',
      es: 'Plataforma para aprender vocabulario en inglés mediante inmersión contextual y sensorial — para estudiantes de nivel A1 a intermedio, profesores de ESL, viajeros y expatriados.',
    },
    problem: {
      en: 'Learning words through isolated translations limits the direct link between a word and its meaning.',
      es: 'Aprender palabras mediante traducciones aisladas limita la asociación directa entre la palabra y su significado.',
    },
    solution: {
      en: 'Combine images, short videos, audio, pronunciation, and the written word, with optional Spanish translation. Planned as a PWA with an Android release.',
      es: 'Combinar imágenes, videos cortos, audio, pronunciación y la palabra escrita, con traducción opcional al español. Planificada como PWA con publicación en Android.',
    },
    role: {
      en: 'Product design, architecture, relational data modeling, and full stack development.',
      es: 'Diseño de producto, arquitectura, modelado relacional y desarrollo full stack.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'PostgreSQL'],
  },
  {
    name: 'AutoMarket — Brand Identity',
    status: { en: 'Graphic design', es: 'Diseño gráfico' },
    statusKind: 'design',
    summary: {
      en: 'Corporate identity for AutoMarket, a vehicle marketplace brand: logo and isotype, color palette, typography system, gradients, and usage rules collected in a brand manual.',
      es: 'Identidad corporativa para AutoMarket, una marca de compraventa de vehículos: logotipo e isotipo, paleta de colores, sistema tipográfico, degradados y reglas de uso reunidas en un manual de marca.',
    },
    role: {
      en: 'Brand design and manual — the same palette (aqua, fuchsia, navy) styles this portfolio.',
      es: 'Diseño de marca y manual — la misma paleta (aqua, fucsia, azul marino) le da estilo a este portfolio.',
    },
    stack: ['Photoshop', 'Illustrator', 'Branding', 'Mockups'],
    images: [
      { src: '/img/automarket-logo.webp', alt: { en: 'AutoMarket logo printed on paper', es: 'Logo de AutoMarket impreso en papel' } },
      { src: '/img/automarket-backpack.webp', alt: { en: 'AutoMarket backpack mockup', es: 'Mockup de mochila con la marca AutoMarket' } },
    ],
  },
  {
    name: 'CONCAPAN Website',
    status: { en: 'IEEE collaboration', es: 'Colaboración IEEE' },
    statusKind: 'collab',
    summary: {
      en: 'Website for the IEEE CONCAPAN conference hosted in Honduras, presenting event information to attendees.',
      es: 'Sitio web de la conferencia IEEE CONCAPAN celebrada en Honduras, para presentar la información del evento a los asistentes.',
    },
    role: {
      en: 'Contributed as part of the IEEE student team building the event site.',
      es: 'Colaboré como parte del equipo estudiantil de IEEE que construyó el sitio del evento.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Static sites on Cloudflare Pages',
    status: { en: 'Live', es: 'Publicado' },
    statusKind: 'done',
    summary: {
      en: 'Design, build, and deployment of static websites with Cloudflare Pages — including this portfolio.',
      es: 'Diseño, construcción y despliegue de sitios estáticos con Cloudflare Pages — incluido este portfolio.',
    },
    role: {
      en: 'Deployment setup, version control, and the path from development to production.',
      es: 'Configuración del despliegue, control de versiones y el paso de desarrollo a producción.',
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'Cloudflare Pages', 'Git'],
    link: 'https://am01.pages.dev',
  },
]

export type Skill = { name: string; icon?: string; invert?: boolean }
export type SkillGroup = { id: string; label: Bi; skills: Skill[] }

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: { en: 'Frontend', es: 'Frontend' },
    skills: [
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Redux', icon: 'redux' },
      { name: 'Next.js', icon: 'nextjs', invert: true },
      { name: 'Vite', icon: 'vite' },
      { name: 'Electron', icon: 'electron' },
    ],
  },
  {
    id: 'backend',
    label: { en: 'Backend', es: 'Backend' },
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express', invert: true },
      { name: 'PHP', icon: 'php' },
      { name: 'Python', icon: 'python' },
      { name: 'C#', icon: 'csharp' },
      { name: '.NET', icon: 'dotnet' },
      { name: 'Django', icon: 'django', invert: true },
      { name: 'Flask', icon: 'flask', invert: true },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'REST APIs' },
    ],
  },
  {
    id: 'databases',
    label: { en: 'Databases', es: 'Bases de datos' },
    skills: [
      { name: 'SQL', icon: 'sql' },
      { name: 'SQL Server', icon: 'sqlserver' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Oracle SQL', icon: 'oracle' },
    ],
  },
  {
    id: 'tools',
    label: { en: 'Tools & Cloud', es: 'Herramientas y Cloud' },
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github', invert: true },
      { name: 'Jest', icon: 'jest' },
      { name: 'Playwright', icon: 'playwright' },
      { name: 'Docker', icon: 'docker' },
      { name: 'npm', icon: 'npm' },
      { name: 'Yarn', icon: 'yarn' },
      { name: 'Postman', icon: 'postman' },
      { name: 'AWS', icon: 'aws', invert: true },
      { name: 'Cloudflare', icon: 'cloudflare' },
      { name: 'Linux', icon: 'linux' },
      { name: 'VS Code', icon: 'vscode' },
    ],
  },
  {
    id: 'design',
    label: { en: 'Design', es: 'Diseño' },
    skills: [
      { name: 'Figma', icon: 'figma' },
      { name: 'Photoshop', icon: 'photoshop' },
      { name: 'Illustrator', icon: 'illustrator' },
      { name: 'UI/UX Principles' },
      { name: 'Web Accessibility' },
    ],
  },
  {
    id: 'architecture',
    label: { en: 'Architecture', es: 'Arquitectura' },
    skills: [
      { name: 'MVC' },
      { name: 'Microservices' },
      { name: 'Reusable Components' },
      { name: 'Redux / Context API' },
      { name: 'Performance Optimization' },
      { name: 'Responsive Patterns' },
    ],
  },
]

// Spanish labels for the text-only skills
export const skillNameEs: Record<string, string> = {
  'REST APIs': 'APIs REST',
  'UI/UX Principles': 'Principios UI/UX',
  'Web Accessibility': 'Accesibilidad Web',
  Microservices: 'Microservicios',
  'Reusable Components': 'Componentes Reutilizables',
  'Performance Optimization': 'Optimización de rendimiento',
  'Responsive Patterns': 'Patrones Responsive',
}

export type Education = { school: string; degree: Bi; period?: string }

export const education: Education[] = [
  {
    school: 'Universidad Nacional Autónoma de Honduras (UNAH)',
    degree: { en: 'B.S. in Systems Engineering', es: 'Ingeniería en Sistemas' },
  },
  {
    school: 'Holy Spirit School',
    degree: { en: 'High School Diploma in Sciences and Humanities', es: 'Bachillerato en Ciencias y Humanidades' },
    period: '2015 – 2016',
  },
]

export type Cert = { name: Bi; issuer: string; tag: string }

export const certifications: Cert[] = [
  { name: { en: 'CCNA: Introduction to Networks', es: 'CCNA: Introduction to Networks' }, issuer: 'Cisco Networking Academy', tag: 'Networking' },
  { name: { en: 'Python Essentials', es: 'Fundamentos de Python' }, issuer: 'Cisco Networking Academy', tag: 'Python' },
  { name: { en: 'Programming Logic with JavaScript', es: 'Lógica de Programación con JavaScript' }, issuer: 'Alura Latam', tag: 'JavaScript' },
  { name: { en: 'Graphic Design (160 hours)', es: 'Diseño Gráfico (160 horas)' }, issuer: 'Instituto Tecnológico Taular', tag: 'Design' },
  { name: { en: 'Effective Leadership', es: 'Liderazgo Efectivo' }, issuer: 'HP LIFE', tag: 'Leadership' },
  { name: { en: 'Effective Business Websites', es: 'Sitios Web de Negocios Efectivos' }, issuer: 'HP LIFE', tag: 'Web' },
  { name: { en: 'Customer Relationship Management', es: 'Administración de la Relación con los Clientes' }, issuer: 'HP LIFE', tag: 'Business' },
  { name: { en: 'Strategic Planning', es: 'Planificación Estratégica' }, issuer: 'HP LIFE', tag: 'Business' },
  { name: { en: 'Business Communication', es: 'Comunicación Empresarial' }, issuer: 'HP LIFE', tag: 'Communication' },
]
