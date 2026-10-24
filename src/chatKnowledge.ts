import { profile, type Lang } from './content'

// Rule-based assistant: answers come only from the resume content below.
// Each intent is matched by keywords (EN + ES); the first suggested questions mirror the reference site.

type Intent = { id: string; keywords: string[]; answer: Record<Lang, string> }

export const suggestions: Record<Lang, { label: string; intent: string }[]> = {
  en: [
    { label: 'What did he do at Sumadi?', intent: 'experience' },
    { label: 'Has he led a team?', intent: 'lead' },
    { label: 'Can he build software for my business?', intent: 'business' },
    { label: 'Can we set up a call?', intent: 'call' },
  ],
  es: [
    { label: '¿Qué hizo en Sumadi?', intent: 'experience' },
    { label: '¿Ha liderado un equipo?', intent: 'lead' },
    { label: '¿Puede hacer un programa para mi negocio?', intent: 'business' },
    { label: '¿Podemos agendar una llamada?', intent: 'call' },
  ],
}

const contactLine: Record<Lang, string> = {
  en: `You can email him at ${profile.email} or message him on LinkedIn.`,
  es: `Puedes escribirle a ${profile.email} o mandarle un mensaje por LinkedIn.`,
}

const intents: Intent[] = [
  {
    id: 'cloud',
    keywords: ['aws', 'cloud', 'nube', 'lambda', 's3', 'ec2', 'gateway', 'serverless', 'cloudflare', 'deploy', 'despliegue', 'desplegar'],
    answer: {
      en: 'At Sumadi (Feb to Jun 2025) Dimas deployed services on AWS using EC2, S3, Lambda and API Gateway. He also publishes websites on Cloudflare Pages and Workers. This portfolio runs on a Worker, and its chat uses Workers AI.',
      es: 'En Sumadi (feb. a jun. 2025) Dimas desplegó servicios en AWS con EC2, S3, Lambda y API Gateway. También publica sitios web en Cloudflare Pages y Workers. Este portfolio corre en un Worker y su chat usa Workers AI.',
    },
  },
  {
    id: 'lead',
    keywords: ['lead', 'led', 'leader', 'team', 'manage', 'president', 'ieee', 'lider', 'líder', 'liderado', 'liderazgo', 'equipo', 'presidente', 'dirig'],
    answer: {
      en: "Yes. From 2023 to 2024 he was president of the IEEE Computer Society student chapter at UNAH, where he organized activities, put teams together and ran tech initiatives. He also taught math as a volunteer at Escuela La Roca, and he's used to working in Scrum teams.",
      es: 'Sí. Entre 2023 y 2024 fue presidente del capítulo estudiantil de IEEE Computer Society en la UNAH, donde organizó actividades, armó equipos y sacó adelante iniciativas de tecnología. También dio clases de matemáticas como voluntario en la Escuela La Roca y está acostumbrado a trabajar en equipos Scrum.',
    },
  },
  {
    id: 'business',
    keywords: ['business', 'company', 'freelance', 'client', 'website for', 'custom software', 'app for', 'negocio', 'empresa', 'emprendimiento', 'cliente', 'a medida', 'a la medida', 'página web', 'pagina web', 'mi propia app', 'tienda'],
    answer: {
      en: `Yes. Dimas works with small businesses: he can build custom software, improve the system you already use, get your business online with a website or make your own app. Tell him what you need. ${contactLine.en}`,
      es: `Sí. Dimas trabaja con pequeños negocios: puede hacer software a la medida, mejorar el sistema que ya usas, poner tu negocio en internet con un sitio web o crear tu propia app. Cuéntale qué necesitas. ${contactLine.es}`,
    },
  },
  {
    id: 'ai',
    // padded with spaces so "ia" does not match "experiencia" or "ml" match "html"
    keywords: [' ai ', 'artificial', 'machine learning', ' ml ', ' llm', ' ia ', 'inteligencia'],
    answer: {
      en: "AI isn't the core of his experience yet. He focuses on web development, REST APIs and cloud services, uses AI tools every day while he codes, and built this portfolio's chat with Workers AI.",
      es: 'La IA todavía no es el centro de su experiencia. Su fuerte es el desarrollo web, las APIs REST y los servicios en la nube, usa herramientas de IA a diario mientras programa y armó el chat de este portfolio con Workers AI.',
    },
  },
  {
    id: 'call',
    keywords: ['call', 'meet', 'meeting', 'contact', 'email', 'hire', 'interview', 'llamada', 'reunión', 'reunion', 'contacto', 'correo', 'entrevista', 'contratar', 'agendar'],
    answer: {
      en: `Sure! Dimas is open to junior developer roles, freelance projects and work for small businesses. ${contactLine.en}`,
      es: `¡Claro! Dimas está abierto a puestos de desarrollador junior, proyectos freelance y trabajos para pequeños negocios. ${contactLine.es}`,
    },
  },
  {
    id: 'skills',
    keywords: ['skill', 'stack', 'tech', 'programming', 'react', 'node', 'javascript', 'typescript', 'php', 'python', 'c#', '.net', 'database', 'sql', 'mongo', 'postgres', 'frontend', 'backend', 'habilidad', 'tecnolog', 'lenguaje', 'base de datos', 'bases de datos', 'sabe'],
    answer: {
      en: 'His main stack is JavaScript and TypeScript, with React and Redux on the frontend and Node.js with Express on the backend, where he builds REST APIs and microservices. He has also used PHP, Python, C# and .NET, SQL Server, PostgreSQL and MongoDB, and he tests with Jest and Playwright.',
      es: 'Su stack principal es JavaScript y TypeScript, con React y Redux en el frontend y Node.js con Express en el backend, donde hace APIs REST y microservicios. También ha usado PHP, Python, C# y .NET, SQL Server, PostgreSQL y MongoDB, y hace pruebas con Jest y Playwright.',
    },
  },
  {
    id: 'experience',
    keywords: ['experience', 'work', 'job', 'sumadi', 'ibex', 'intern', 'practice', 'watermark', 'canvas', 'experiencia', 'trabajo', 'práctica', 'practica', 'empleo', 'marca de agua'],
    answer: {
      en: 'At Sumadi (Feb to Jun 2025) he was a full stack developer during his professional practice. He made the platform load each institution\'s branding, added a watermark that traces leaked exam screenshots, and kept the Canvas LMS integration working, using React, Redux and Electron. Later, at IBEX (2025 to 2026), he supported employees on an HR campaign, a job he chose to improve his English.',
      es: 'En Sumadi (feb. a jun. 2025) fue desarrollador full stack durante su práctica profesional. Hizo que la plataforma cargara la marca de cada institución, agregó una marca de agua que permite rastrear capturas filtradas de exámenes y mantuvo funcionando la integración con Canvas LMS, con React, Redux y Electron. Después, en IBEX (2025 a 2026), atendió a empleados en una campaña de recursos humanos, un trabajo que eligió para mejorar su inglés.',
    },
  },
  {
    id: 'projects',
    keywords: ['project', 'lexflow', 'automarket', 'brand', 'design', 'diseño', 'conescapan', 'portfolio', 'built', 'proyecto', 'construido'],
    answer: {
      en: "His main project is LexFlow, an app to learn English vocabulary with images, video, audio and pronunciation, built with React, TypeScript, Node.js and Supabase. It's still in development. He also designed the AutoMarket brand, helped build the CONESCAPAN 2025 website with IEEE and publishes sites on Cloudflare.",
      es: 'Su proyecto principal es LexFlow, una app para aprender vocabulario en inglés con imágenes, video, audio y pronunciación, hecha con React, TypeScript, Node.js y Supabase. Todavía está en desarrollo. También diseñó la marca AutoMarket, ayudó a hacer el sitio de CONESCAPAN 2025 con IEEE y publica sitios en Cloudflare.',
    },
  },
  {
    id: 'education',
    keywords: ['study', 'studies', 'education', 'degree', 'university', 'unah', 'certif', 'course', 'estudi', 'educación', 'educacion', 'universidad', 'carrera', 'curso'],
    answer: {
      en: 'He graduated as a Systems Engineer from UNAH (Universidad Nacional Autónoma de Honduras). He has the Cisco CCNA: Introduction to Networks and Python Essentials 1 badges, Programming Logic with JavaScript from Alura Latam, a 160 hour graphic design course and several HP LIFE courses on leadership and business.',
      es: 'Se graduó de Ingeniería en Sistemas en la UNAH (Universidad Nacional Autónoma de Honduras). Tiene las insignias de Cisco CCNA: Introduction to Networks y Python Essentials 1, Lógica de Programación con JavaScript de Alura Latam, un curso de diseño gráfico de 160 horas y varios cursos de HP LIFE sobre liderazgo y negocios.',
    },
  },
  {
    id: 'english',
    keywords: ['english', 'spanish', 'inglés', 'ingles', 'español', 'idioma', 'speak', 'habla'],
    answer: {
      en: 'Spanish is his native language and his English is B2, upper intermediate. He took the job at IBEX on purpose to improve it and spoke English with customers every day, so he is comfortable working in English.',
      es: 'Su idioma nativo es el español y su inglés es B2, intermedio alto. Entró a IBEX a propósito para mejorarlo y hablaba en inglés con clientes todos los días, así que trabaja cómodo en inglés.',
    },
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'based', 'remote', 'relocat', 'dónde', 'donde', 'ubicación', 'remoto', 'vive'],
    answer: {
      en: 'He lives in Tegucigalpa, Honduras. For availability or remote work, the best thing is to ask him directly. ' + contactLine.en,
      es: 'Vive en Tegucigalpa, Honduras. Para temas de disponibilidad o trabajo remoto, lo mejor es preguntarle directamente. ' + contactLine.es,
    },
  },
  {
    id: 'fun',
    keywords: ['hobby', 'hobbies', 'fun', 'free time', 'game', 'music', 'boxing', 'dog', 'tobi', 'toreto', 'pet', 'personality', 'challenge', 'pasatiempo', 'diversión', 'tiempo libre', 'juego', 'música', 'musica', 'boxeo', 'perro', 'mascota', 'personalidad', 'reto'],
    answer: {
      en: "Dimas is a cheerful, positive guy 😄 who loves a good challenge 🧩. In his free time he boxes 🥊, plays video games 🎮, listens to music 🎧, meets new people and hangs out with his dogs Tobi and Toreto 🐶. His motto: \"Don't be afraid to fail. Be afraid of not trying.\"",
      es: 'Dimas es alegre y positivo 😄 y le encantan los retos 🧩. En su tiempo libre boxea 🥊, juega videojuegos 🎮, escucha música 🎧, conoce gente nueva y pasa tiempo con sus perros Tobi y Toreto 🐶. Su lema: "No tengas miedo de fallar, ten miedo de no intentarlo."',
    },
  },
]

const greetings = ['hi', 'hello', 'hey', 'hola', 'buenas', 'buenos']

const fallback: Record<Lang, string> = {
  en: `I can tell you about Dimas's experience, skills, projects, studies and leadership. For anything else, ${contactLine.en.charAt(0).toLowerCase()}${contactLine.en.slice(1)}`,
  es: `Puedo contarte sobre la experiencia, habilidades, proyectos, estudios y liderazgo de Dimas. Para cualquier otra cosa, ${contactLine.es.charAt(0).toLowerCase()}${contactLine.es.slice(1)}`,
}

const hello: Record<Lang, string> = {
  en: "Hi! 👋 I'm Dimas's assistant. Ask me about his experience, skills or projects.",
  es: '¡Hola! 👋 Soy el asistente de Dimas. Pregúntame sobre su experiencia, habilidades o proyectos.',
}

// Hand-written answers, reused as extra facts for the AI chat (src/knowledge.ts)
export function curatedAnswers(lang: Lang): string[] {
  return intents.map(i => i.answer[lang])
}

export function answerFor(intentId: string, lang: Lang): string {
  return intents.find(i => i.id === intentId)?.answer[lang] ?? fallback[lang]
}

export function answer(question: string, lang: Lang): string {
  const q = ` ${question.toLowerCase().replace(/[¿?¡!.,]/g, ' ')} `
  let best: Intent | undefined
  let bestScore = 0
  for (const intent of intents) {
    const score = intent.keywords.filter(k => q.includes(k)).length
    if (score > bestScore) {
      best = intent
      bestScore = score
    }
  }
  if (best) return best.answer[lang]
  if (greetings.some(g => q.includes(` ${g} `))) return hello[lang]
  return fallback[lang]
}
