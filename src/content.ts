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
  navContact: { en: 'Contact me', es: 'Contáctame' },
  hero: {
    greeting: { en: "Hello 👋, I'm", es: 'Hola 👋, soy' },
    // cycled by the typewriter under the name
    roles: {
      en: ['Full Stack Developer 💻', 'Frontend Developer 🎨', 'Backend Developer ⚙️', 'REST API Builder 🔌', 'Systems Engineer 🎓', 'QA Tester 🧪', 'Graphic Designer ✏️'],
      es: ['Desarrollador Full Stack 💻', 'Desarrollador Frontend 🎨', 'Desarrollador Backend ⚙️', 'Creador de APIs REST 🔌', 'Ingeniero en Sistemas 🎓', 'QA Tester 🧪', 'Diseñador Gráfico ✏️'],
    },
    intro: {
      en: [
        "I'm Dimas 😄, a Systems Engineer from Honduras 🌎. I like building things people actually use, and I never say no to a good challenge 🧩.",
        "Most of my work is web apps and APIs 🛠️. When I'm not coding, I'm probably gaming 🎮, listening to music 🎧 or hanging out with my dog 🐶.",
      ],
      es: [
        'Soy Dimas 😄, Ingeniero en Sistemas de Honduras 🌎. Me gusta construir cosas que la gente use de verdad y nunca le digo que no a un buen reto 🧩.',
        'Casi siempre estoy haciendo aplicaciones web y APIs 🛠️. Cuando no estoy programando, seguro me encuentras jugando 🎮, escuchando música 🎧 o con mi perro 🐶.',
      ],
    },
    ctaPrimary: { en: 'See my experience 👀', es: 'Ver mi experiencia 👀' },
    ctaSecondary: { en: "Let's talk ✉️", es: 'Hablemos ✉️' },
    location: { en: 'Tegucigalpa, Honduras', es: 'Tegucigalpa, Honduras' },
    openToWork: { en: 'Open to work', es: 'Disponible' },
    photoAlt: { en: 'Photo of Dimas Rodríguez', es: 'Foto de Dimas Rodríguez' },
  },
  // banner right under the hero
  business: {
    title: { en: 'Got a small business? 🏪', es: '¿Tienes un negocio pequeño? 🏪' },
    text: {
      en: "I can build the software you need, improve the one you already use, get your business online or make your own app. Tell me what you have in mind and we'll figure it out together.",
      es: 'Puedo hacerte el programa que necesitas, mejorar el que ya usas, poner tu negocio en internet o crear tu propia app. Cuéntame qué tienes en mente y lo armamos juntos.',
    },
    items: [
      { icon: 'code', en: 'Custom software', es: 'Software a la medida' },
      { icon: 'wrench', en: 'Improve what you have', es: 'Mejorar lo que ya tienes' },
      { icon: 'globe', en: 'Get online', es: 'Presencia en internet' },
      { icon: 'layers', en: 'Your own app', es: 'Tu propia app' },
    ],
    button: { en: "Let's talk about your project", es: 'Hablemos de tu proyecto' },
    subject: { en: 'Project for my business', es: 'Proyecto para mi negocio' },
  },
  fun: {
    title: { en: 'Beyond the Code 🎉', es: 'Más allá del código 🎉' },
    subtitle: {
      en: "I'm a cheerful, positive person. I like exploring, learning new things, meeting all kinds of people and taking on challenges.",
      es: 'Soy alegre y positivo. Me gusta explorar, aprender cosas nuevas, conocer todo tipo de gente y meterme en retos.',
    },
    quote: {
      en: "Don't be afraid to fail. Be afraid of not trying.",
      es: 'No tengas miedo de fallar, ten miedo de no intentarlo.',
    },
    quoteLabel: { en: 'My motto', es: 'Mi lema' },
    petTitle: { en: 'My co-pilot 🐶', es: 'Mi copiloto 🐶' },
    petText: {
      en: "Official debugging supervisor. He's never approved a merge without a snack.",
      es: 'Supervisor oficial de debugging. Nunca ha aprobado un merge sin una galleta.',
    },
    petAlt: { en: "Dimas's dog", es: 'El perro de Dimas' },
    items: [
      { emoji: '🎮', en: 'Video games', es: 'Videojuegos' },
      { emoji: '🎬', en: 'Series & movies', es: 'Series y películas' },
      { emoji: '🎧', en: 'Music', es: 'Música' },
      { emoji: '🤝', en: 'Friends', es: 'Amigos' },
      { emoji: '🧩', en: 'A good challenge', es: 'Un buen reto' },
      { emoji: '📚', en: 'Learning new tech', es: 'Aprender tecnología' },
      { emoji: '🎨', en: 'Graphic design', es: 'Diseño gráfico' },
    ],
    itemsTitle: { en: 'Things that make me happy', es: 'Cosas que me alegran' },
  },
  about: {
    title: { en: 'About Me 🙋‍♂️', es: 'Sobre mí 🙋‍♂️' },
    p1: {
      en: "I'm a Systems Engineer from UNAH and a junior full stack developer. Most of what I've built is REST APIs and microservices with Node.js and Express, plus the React screens that use them.",
      es: 'Soy Ingeniero en Sistemas de la UNAH y desarrollador full stack junior. Lo que más he construido son APIs REST y microservicios con Node.js y Express, junto con las pantallas en React que las usan.',
    },
    p2: {
      en: 'During my professional practice at Sumadi I worked on real features of an online exam proctoring platform: branding for each institution, a watermark that protects exams and the Canvas LMS integration. I used React, Redux, Electron, NoSQL databases and AWS, always in a Scrum team.',
      es: 'En mi práctica profesional en Sumadi trabajé en funciones reales de una plataforma de supervisión de exámenes en línea: la marca de cada institución, una marca de agua que protege los exámenes y la integración con Canvas LMS. Usé React, Redux, Electron, bases de datos NoSQL y AWS, siempre en un equipo Scrum.',
    },
    p3: {
      en: "Outside of code, I was president of the IEEE Computer Society student chapter at UNAH and taught math as a volunteer. Working at IBEX made my English a lot better, and my graphic design background helps me care about how things look. I like challenges, especially the ones I don't know how to solve yet.",
      es: 'Fuera del código, fui presidente del capítulo estudiantil de IEEE Computer Society en la UNAH y di clases de matemáticas como voluntario. Trabajar en IBEX me hizo mejorar mucho mi inglés, y mi formación en diseño gráfico me ayuda a cuidar cómo se ven las cosas. Me gustan los retos, sobre todo los que todavía no sé cómo resolver.',
    },
    highlights: [
      { value: { en: 'APIs', es: 'APIs' }, label: { en: 'REST & microservices', es: 'REST y microservicios' } },
      { value: { en: 'Full Stack', es: 'Full Stack' }, label: { en: 'React + Node.js', es: 'React + Node.js' } },
      { value: { en: 'Leader', es: 'Líder' }, label: { en: 'IEEE CS UNAH president', es: 'Presidente IEEE CS UNAH' } },
    ],
    softTitle: { en: 'What I bring to a team', es: 'Lo que aporto a un equipo' },
    soft: {
      en: ['Teamwork', 'Clear communication', 'Problem solving', 'Leadership', 'Time management', 'Prioritizing tasks', 'Working under pressure', 'Decision making'],
      es: ['Trabajo en equipo', 'Comunicación clara', 'Resolución de problemas', 'Liderazgo', 'Gestión del tiempo', 'Priorizar tareas', 'Trabajo bajo presión', 'Toma de decisiones'],
    },
    languagesTitle: { en: 'Languages', es: 'Idiomas' },
    languages: {
      en: ['Spanish: native', 'English: B2, upper intermediate'],
      es: ['Español: nativo', 'Inglés: B2, intermedio alto'],
    },
  },
  experience: {
    title: { en: 'Professional Experience 💼', es: 'Experiencia Profesional 💼' },
    subtitle: { en: "Where I've learned, built and led.", es: 'Donde he aprendido, construido y liderado.' },
    details: { en: 'See project details', es: 'Ver detalles de los proyectos' },
    did: { en: 'What I did', es: 'Qué hice' },
    impact: { en: 'Impact', es: 'Impacto' },
  },
  projects: {
    title: { en: 'Projects 🚀', es: 'Proyectos 🚀' },
    subtitle: {
      en: "Things I've designed, built or helped build.",
      es: 'Cosas que he diseñado, construido o ayudado a construir.',
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
      en: 'The languages, frameworks and tools I use to build complete web apps.',
      es: 'Los lenguajes, frameworks y herramientas que uso para construir aplicaciones web completas.',
    },
  },
  education: {
    title: { en: 'Education & Certifications 🎓', es: 'Educación y Certificaciones 🎓' },
    subtitle: { en: "Where I studied and the courses I've taken along the way.", es: 'Dónde estudié y los cursos que he tomado en el camino.' },
    eduTitle: { en: 'Education', es: 'Educación' },
    certTitle: { en: 'Courses & Certifications', es: 'Cursos y certificaciones' },
    credential: { en: 'View credential', es: 'Ver credencial' },
  },
  contact: {
    title: { en: 'Get in Touch 📬', es: 'Hablemos 📬' },
    text: {
      en: "I'm open to junior developer roles, freelance projects and work for small businesses. If you have an idea or an opening, write me.",
      es: 'Estoy abierto a puestos de desarrollador junior, proyectos freelance y trabajos para pequeños negocios. Si tienes una idea o una vacante, escríbeme.',
    },
    button: { en: 'Email me', es: 'Escríbeme' },
    fallback: { en: 'Or write to me directly at', es: 'O escríbeme directo a' },
    copy: { en: 'Copy', es: 'Copiar' },
    copied: { en: 'Copied!', es: '¡Copiado!' },
  },
  footer: { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
  theme: { en: 'Toggle theme', es: 'Cambiar tema' },
  langSwitch: { en: 'Cambiar a español', es: 'Switch to English' },
  scrollDown: { en: 'Scroll to about section', es: 'Ir a la sección sobre mí' },
  menu: { en: 'Open menu', es: 'Abrir menú' },
} satisfies Record<string, unknown>

// A project inside a job, shown in the card's "See details" panel and sent to the AI chat
export type JobProject = { title: Bi; did: Record<Lang, string[]>; impact: Record<Lang, string[]> }

export type Experience = {
  role: Bi
  org: string
  team?: Bi
  period: Bi
  kind: Bi
  bullets: Record<Lang, string[]>
  projects?: JobProject[]
  tags?: string[]
}

export const experience: Experience[] = [
  {
    role: { en: 'Full Stack Developer (Trainee / Junior)', es: 'Desarrollador Full Stack (Trainee / Junior)' },
    org: 'Sumadi',
    period: { en: 'Feb 2025 - Jun 2025', es: 'Feb 2025 - Jun 2025' },
    kind: { en: 'Supervised professional practice', es: 'Práctica profesional supervisada' },
    bullets: {
      en: [
        'Built frontend features in React and Redux and connected them to the backend through new and existing endpoints.',
        "Made the platform's branding load per institution, so each university could offer Sumadi's proctoring under its own look.",
        "Added a watermark with the student's name or ID during exams, so leaked screenshots can be traced back.",
        'Kept the Canvas LMS integration working after Canvas changed how its new assessments share data, including changes to the Electron desktop app.',
        'Also worked with JWT and OAuth authentication, PostgreSQL and MongoDB, and AWS services like EC2, S3, Lambda and API Gateway.',
        'Did QA as well: tested REST endpoints, checked data with SQL and wrote Jest unit tests and basic Playwright end to end tests, working in Scrum with Git and GitHub.',
      ],
      es: [
        'Desarrollé funciones de frontend con React y Redux y las conecté al backend con endpoints nuevos y existentes.',
        'Hice que la marca de la plataforma se cargara según cada institución, para que cada universidad pudiera ofrecer el proctorizado de Sumadi con su propia imagen.',
        'Agregué una marca de agua con el nombre o identificador del estudiante durante el examen, para poder rastrear capturas filtradas.',
        'Mantuve funcionando la integración con Canvas LMS cuando Canvas cambió la forma en que sus nuevos assessments comparten información, incluyendo cambios en la app de escritorio hecha con Electron.',
        'También trabajé con autenticación JWT y OAuth, PostgreSQL y MongoDB, y servicios de AWS como EC2, S3, Lambda y API Gateway.',
        'Hice QA: pruebas de endpoints REST, verificación de datos con SQL, pruebas unitarias con Jest y pruebas end to end básicas con Playwright, trabajando en Scrum con Git y GitHub.',
      ],
    },
    projects: [
      {
        title: { en: 'Branding for each institution', es: 'Marca personalizada por institución' },
        did: {
          en: [
            "Built the frontend that loads each institution's brand elements on the fly and adapts the platform's look, using React, Redux and SVG.",
            'Connected those settings to the backend through service calls and a NoSQL database, and helped add the endpoints it needed.',
          ],
          es: [
            'Desarrollé el frontend que carga los elementos de marca de cada institución y adapta la imagen de la plataforma, con React, Redux y SVG.',
            'Conecté esa configuración con el backend mediante llamadas a servicios y una base de datos NoSQL, y participé en los endpoints nuevos que hacían falta.',
          ],
        },
        impact: {
          en: [
            "Institutions can present Sumadi's proctoring as part of their own platform.",
            'Each client decides how visible Sumadi is, from a fully branded experience to one that shows Sumadi clearly.',
          ],
          es: [
            'Las instituciones pueden presentar el proctorizado de Sumadi como parte de su propia plataforma.',
            'Cada cliente decide qué tanto se ve Sumadi, desde una experiencia con su propia marca hasta una donde Sumadi aparece claramente.',
          ],
        },
      },
      {
        title: { en: 'Exam watermark', es: 'Marca de agua en exámenes' },
        did: {
          en: [
            "Added a watermark with the student's name or ID that stays on screen for the whole exam.",
            "Hooked it into the exam start flow, so it's always on while the student is answering.",
          ],
          es: [
            'Agregué una marca de agua con el nombre o identificador del estudiante que se mantiene en pantalla durante todo el examen.',
            'La integré al flujo de inicio del examen, así siempre está activa mientras el estudiante responde.',
          ],
        },
        impact: {
          en: [
            'If someone shares a screenshot, supervisors can tell which student it came from.',
            'It discourages leaking questions and answers and helps protect the integrity of exams.',
          ],
          es: [
            'Si alguien comparte una captura, los supervisores pueden saber de qué estudiante salió.',
            'Desanima la filtración de preguntas y respuestas y ayuda a proteger la integridad de las evaluaciones.',
          ],
        },
      },
      {
        title: { en: 'Canvas LMS integration', es: 'Integración con Canvas LMS' },
        did: {
          en: [
            'Worked on the end to end integration between Sumadi and Canvas LMS for assessments, on the frontend and on the backend services.',
            'When Canvas released its new assessments, I fixed a compatibility issue with reading data from an iframe and updated the Electron desktop app to use the new way of communicating.',
          ],
          es: [
            'Trabajé en la integración completa entre Sumadi y Canvas LMS para los assessments, tanto en el frontend como en los servicios del backend.',
            'Cuando Canvas lanzó su nueva versión de assessments, resolví un problema de compatibilidad al leer información desde un iframe y adapté la app de escritorio en Electron al nuevo mecanismo de comunicación.',
          ],
        },
        impact: {
          en: [
            'Exams that depend on Canvas kept working after the update.',
            'The integration is easier to maintain the next time Canvas changes.',
          ],
          es: [
            'Las evaluaciones que dependen de Canvas siguieron funcionando después del cambio.',
            'La integración quedó más fácil de mantener para la próxima vez que Canvas cambie.',
          ],
        },
      },
      {
        title: { en: 'Frontend and backend work', es: 'Frontend y comunicación con el backend' },
        did: {
          en: [
            'Built features with React and Redux, and created and consumed the endpoints that connect them to the backend.',
            'Worked with SVG graphics for the interface and with Electron features that link the desktop app to exams and outside platforms.',
          ],
          es: [
            'Desarrollé funciones con React y Redux, y creé y consumí los endpoints que las conectan con el backend.',
            'Trabajé con gráficos SVG para la interfaz y con funciones de Electron que conectan la app de escritorio con los exámenes y con plataformas externas.',
          ],
        },
        impact: {
          en: [
            'New features fit in with the backend services that were already there.',
            'Helped keep the desktop app compatible with the outside services used during exams.',
          ],
          es: [
            'Las funciones nuevas se integraron bien con los servicios de backend que ya existían.',
            'Ayudé a mantener la app de escritorio compatible con los servicios externos que se usan durante los exámenes.',
          ],
        },
      },
    ],
    tags: ['React', 'Redux', 'Node.js', 'Express', 'Electron', 'Canvas LMS', 'SVG', 'MongoDB', 'PostgreSQL', 'AWS', 'Jest', 'Playwright'],
  },
  {
    role: { en: 'Customer Support Agent', es: 'Agente de Servicio al Cliente' },
    org: 'IBEX',
    team: { en: 'MyHumanResourcesLive campaign (Human Resources)', es: 'Campaña MyHumanResourcesLive (Recursos Humanos)' },
    period: { en: '2025 - 2026', es: '2025 - 2026' },
    kind: { en: 'Work', es: 'Trabajo' },
    bullets: {
      en: [
        'I took this job on purpose to improve my English, and it worked: I spoke English with customers every single day.',
        'Helped employees with their human resources questions for the MyHumanResourcesLive campaign.',
        'Got better at communicating clearly, being patient and empathetic, solving problems and managing my time under pressure.',
        'Worked closely with my team to hit our goals in a fast, metrics driven environment.',
      ],
      es: [
        'Elegí este trabajo a propósito para mejorar mi inglés, y lo logré: hablaba en inglés con clientes todos los días.',
        'Atendía las consultas de recursos humanos de empleados en la campaña MyHumanResourcesLive.',
        'Mejoré mucho mi comunicación, la empatía, la resolución de problemas y la gestión del tiempo bajo presión.',
        'Trabajé de cerca con mi equipo para cumplir metas en un ambiente rápido y orientado a métricas.',
      ],
    },
  },
  {
    role: { en: 'Chapter President', es: 'Presidente del Capítulo' },
    org: 'IEEE Computer Society, UNAH Student Chapter',
    period: { en: '2023 - 2024', es: '2023 - 2024' },
    kind: { en: 'Leadership', es: 'Liderazgo' },
    bullets: {
      en: [
        'Led the student chapter and organized activities and tech initiatives for students.',
        'Put teams together and learned a lot about running projects and communicating with people.',
      ],
      es: [
        'Dirigí el capítulo estudiantil y organicé actividades e iniciativas de tecnología para estudiantes.',
        'Armé equipos y aprendí mucho sobre cómo llevar proyectos y comunicarme con la gente.',
      ],
    },
  },
  {
    role: { en: 'Volunteer Teacher', es: 'Docente Voluntario' },
    org: 'Escuela La Roca',
    period: { en: '2023 - 2024', es: '2023 - 2024' },
    kind: { en: 'Volunteering', es: 'Voluntariado' },
    bullets: {
      en: [
        'Taught math, adjusting each class to different learning levels.',
        'Learned to explain things simply and to lead a group.',
      ],
      es: [
        'Di clases de matemáticas, adaptando cada clase a distintos niveles de aprendizaje.',
        'Aprendí a explicar las cosas de forma sencilla y a dirigir un grupo.',
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
      en: "An app to learn English vocabulary by seeing, hearing and reading each word in context. It's meant for beginners up to intermediate learners, English teachers, travelers and people living abroad.",
      es: 'Una app para aprender vocabulario en inglés viendo, escuchando y leyendo cada palabra en contexto. Está pensada para principiantes hasta nivel intermedio, profesores de inglés, viajeros y personas que viven fuera.',
    },
    problem: {
      en: 'Learning words from translation lists makes it hard to connect a word with what it really means.',
      es: 'Aprender palabras con listas de traducciones hace difícil conectar la palabra con lo que realmente significa.',
    },
    solution: {
      en: 'Every word comes with an image, a short video, native audio and pronunciation, plus an optional Spanish translation. The plan is to launch it as a PWA and then on Android.',
      es: 'Cada palabra viene con imagen, video corto, audio nativo y pronunciación, más una traducción opcional al español. La idea es lanzarla como PWA y después en Android.',
    },
    role: {
      en: "I'm doing the product design, the architecture, the data model and the full stack development.",
      es: 'Me encargo del diseño del producto, la arquitectura, el modelo de datos y el desarrollo full stack.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'PostgreSQL'],
  },
  {
    name: 'AutoMarket',
    status: { en: 'Graphic design', es: 'Diseño gráfico' },
    statusKind: 'design',
    summary: {
      en: 'Brand identity for AutoMarket, a car marketplace: logo, color palette, typography, gradients and the rules for using them, all in one brand manual.',
      es: 'Identidad de marca para AutoMarket, una marca de compraventa de vehículos: logo, paleta de colores, tipografía, degradados y sus reglas de uso, todo en un manual de marca.',
    },
    role: {
      en: 'I designed the brand and the manual. This portfolio uses the same palette.',
      es: 'Diseñé la marca y el manual. Este portfolio usa la misma paleta.',
    },
    stack: ['Photoshop', 'Illustrator', 'Branding', 'Mockups'],
    images: [
      { src: '/img/automarket-logo.webp', alt: { en: 'AutoMarket logo printed on paper', es: 'Logo de AutoMarket impreso en papel' } },
      { src: '/img/automarket-backpack.webp', alt: { en: 'AutoMarket backpack mockup', es: 'Mockup de mochila con la marca AutoMarket' } },
    ],
  },
  {
    name: 'CONESCAPAN 2025',
    status: { en: 'IEEE collaboration', es: 'Colaboración IEEE' },
    statusKind: 'collab',
    summary: {
      en: 'Website for CONESCAPAN 2025, the IEEE student conference for Central America and Panama, held in Tegucigalpa in September 2025.',
      es: 'Sitio web de CONESCAPAN 2025, la conferencia estudiantil de IEEE para Centroamérica y Panamá, que se hizo en Tegucigalpa en septiembre de 2025.',
    },
    role: {
      en: 'I was part of the IEEE student team that built the event site.',
      es: 'Formé parte del equipo estudiantil de IEEE que hizo el sitio del evento.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://conescapanhn.com/',
  },
  {
    name: 'Websites on Cloudflare',
    status: { en: 'Live', es: 'Publicado' },
    statusKind: 'done',
    summary: {
      en: 'I design, build and publish websites on Cloudflare Pages and Workers. This portfolio runs on a Worker, with an AI chat powered by Workers AI.',
      es: 'Diseño, construyo y publico sitios web en Cloudflare Pages y Workers. Este portfolio corre en un Worker, con un chat de IA que usa Workers AI.',
    },
    role: {
      en: 'Deployment setup, version control and automatic deploys from GitHub.',
      es: 'Configuración del despliegue, control de versiones y despliegues automáticos desde GitHub.',
    },
    stack: ['React', 'TypeScript', 'Cloudflare Pages', 'Cloudflare Workers', 'Workers AI', 'Git'],
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
]

// logo: image path; without one the card shows the issuer's initials. url: public credential page.
export type Cert = { name: Bi; issuer: string; tag: string; logo?: string; url?: string }

// Spanish labels for the course tags
export const certTagEs: Record<string, string> = {
  Networking: 'Redes',
  Design: 'Diseño',
  Leadership: 'Liderazgo',
  Business: 'Negocios',
  Communication: 'Comunicación',
}

export const certifications: Cert[] = [
  {
    name: { en: 'CCNA: Introduction to Networks', es: 'CCNA: Introduction to Networks' },
    issuer: 'Cisco Networking Academy',
    tag: 'Networking',
    logo: '/img/badges/ccna-itn.webp',
    url: 'https://www.credly.com/badges/974ae252-3f96-44b9-8a5f-48cc91fbc97b',
  },
  {
    name: { en: 'Python Essentials 1', es: 'Python Essentials 1' },
    issuer: 'Cisco Networking Academy',
    tag: 'Python',
    logo: '/img/badges/python-essentials-1.webp',
    url: 'https://www.credly.com/badges/872bd1c5-222d-483b-8dc8-0a615059c5d1',
  },
  { name: { en: 'Programming Logic with JavaScript', es: 'Lógica de Programación con JavaScript' }, issuer: 'Alura Latam', tag: 'JavaScript' },
  { name: { en: 'Graphic Design (160 hours)', es: 'Diseño Gráfico (160 horas)' }, issuer: 'Instituto Tecnológico Taular', tag: 'Design' },
  { name: { en: 'Effective Leadership', es: 'Liderazgo Efectivo' }, issuer: 'HP LIFE', tag: 'Leadership', logo: '/icons/hp.svg' },
  { name: { en: 'Effective Business Websites', es: 'Sitios Web de Negocios Efectivos' }, issuer: 'HP LIFE', tag: 'Web', logo: '/icons/hp.svg' },
  { name: { en: 'Customer Relationship Management', es: 'Administración de la Relación con los Clientes' }, issuer: 'HP LIFE', tag: 'Business', logo: '/icons/hp.svg' },
  { name: { en: 'Strategic Planning', es: 'Planificación Estratégica' }, issuer: 'HP LIFE', tag: 'Business', logo: '/icons/hp.svg' },
  { name: { en: 'Business Communication', es: 'Comunicación Empresarial' }, issuer: 'HP LIFE', tag: 'Communication', logo: '/icons/hp.svg' },
]
