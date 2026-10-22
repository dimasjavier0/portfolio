import { profile, type Lang } from './content'

// Rule-based assistant: answers come only from the resume content below.
// Each intent is matched by keywords (EN + ES); the first suggested questions mirror the reference site.

type Intent = { id: string; keywords: string[]; answer: Record<Lang, string> }

export const suggestions: Record<Lang, { label: string; intent: string }[]> = {
  en: [
    { label: 'What is his cloud and AWS experience?', intent: 'cloud' },
    { label: 'Has he led a team?', intent: 'lead' },
    { label: 'Tell me about his AI work', intent: 'ai' },
    { label: 'Can we set up a call?', intent: 'call' },
  ],
  es: [
    { label: '¿Qué experiencia tiene en cloud y AWS?', intent: 'cloud' },
    { label: '¿Ha liderado un equipo?', intent: 'lead' },
    { label: 'Cuéntame sobre su trabajo con IA', intent: 'ai' },
    { label: '¿Podemos agendar una llamada?', intent: 'call' },
  ],
}

const contactLine: Record<Lang, string> = {
  en: `You can email him at ${profile.email} or message him on LinkedIn.`,
  es: `Puedes escribirle a ${profile.email} o enviarle un mensaje por LinkedIn.`,
}

const intents: Intent[] = [
  {
    id: 'cloud',
    keywords: ['aws', 'cloud', 'nube', 'lambda', 's3', 'ec2', 'gateway', 'serverless', 'cloudflare', 'deploy', 'despliegue', 'desplegar'],
    answer: {
      en: 'During his supervised professional practice at Sumadi (Feb–Jun 2025), Dimas deployed services on AWS, configuring EC2, S3, Lambda, and API Gateway for serverless architectures. He also publishes websites on Cloudflare Pages and Workers (this portfolio runs on a Worker with Workers AI) and keeps learning cloud best practices.',
      es: 'Durante su práctica profesional supervisada en Sumadi (feb–jun 2025), Dimas desplegó servicios en AWS configurando EC2, S3, Lambda y API Gateway para arquitecturas serverless. También publica sitios web en Cloudflare Pages y Workers (este portfolio corre en un Worker con Workers AI) y sigue aprendiendo buenas prácticas de cloud.',
    },
  },
  {
    id: 'lead',
    keywords: ['lead', 'led', 'leader', 'team', 'manage', 'president', 'ieee', 'lider', 'líder', 'liderado', 'liderazgo', 'equipo', 'presidente', 'dirig'],
    answer: {
      en: 'Yes. From 2023 to 2024 he was President of the IEEE Computer Society student chapter at UNAH, coordinating activities, organizing teams, and driving technology initiatives — including collaborating on the website for the IEEE CONCAPAN event. He also volunteered as a math teacher at Escuela La Roca, and works in Scrum teams.',
      es: 'Sí. Entre 2023 y 2024 fue Presidente del capítulo estudiantil de IEEE Computer Society en la UNAH, coordinando actividades, organizando equipos e impulsando iniciativas tecnológicas — incluida la colaboración en el sitio web del evento IEEE CONCAPAN. También fue docente voluntario de matemáticas en la Escuela La Roca y trabaja en equipos Scrum.',
    },
  },
  {
    id: 'ai',
    // padded with spaces so "ia" does not match "experiencia" or "ml" match "html"
    keywords: [' ai ', 'artificial', 'machine learning', ' ml ', ' llm', ' ia ', 'inteligencia'],
    answer: {
      en: "AI isn't a core part of his professional experience yet — his focus is web development, REST APIs, and cloud services. He uses AI tools in his day-to-day development and is open to building AI-integrated features on top of solid backend foundations.",
      es: 'La IA todavía no es una parte central de su experiencia profesional — su enfoque es el desarrollo web, las APIs REST y los servicios en la nube. Usa herramientas de IA en su día a día como desarrollador y está abierto a construir funcionalidades con IA sobre una base sólida de backend.',
    },
  },
  {
    id: 'call',
    keywords: ['call', 'meet', 'meeting', 'contact', 'email', 'hire', 'interview', 'llamada', 'reunión', 'reunion', 'contact', 'correo', 'entrevista', 'contratar', 'agendar'],
    answer: {
      en: `Absolutely — Dimas is open to junior developer roles and collaborations. ${contactLine.en}`,
      es: `¡Claro! Dimas está abierto a oportunidades como desarrollador junior y colaboraciones. ${contactLine.es}`,
    },
  },
  {
    id: 'skills',
    keywords: ['skill', 'stack', 'tech', 'programming', 'react', 'node', 'javascript', 'typescript', 'php', 'python', 'c#', '.net', 'database', 'sql', 'mongo', 'postgres', 'frontend', 'backend', 'habilidad', 'tecnolog', 'lenguaje', 'base de datos', 'bases de datos', 'sabe'],
    answer: {
      en: 'His core stack is JavaScript/TypeScript with React on the frontend and Node.js + Express on the backend, building RESTful APIs and microservices. He has also worked with PHP, Python, C#/.NET, SQL Server, PostgreSQL, and MongoDB, plus testing with Jest and Playwright.',
      es: 'Su stack principal es JavaScript/TypeScript con React en el frontend y Node.js + Express en el backend, construyendo APIs RESTful y microservicios. También ha trabajado con PHP, Python, C#/.NET, SQL Server, PostgreSQL y MongoDB, además de pruebas con Jest y Playwright.',
    },
  },
  {
    id: 'experience',
    keywords: ['experience', 'work', 'job', 'sumadi', 'ibex', 'intern', 'practice', 'experiencia', 'trabajo', 'práctica', 'practica', 'empleo'],
    answer: {
      en: 'He worked as a Full Stack Developer (Trainee/Junior) at Sumadi during his supervised professional practice (Feb–Jun 2025): JWT/OAuth auth, PostgreSQL and MongoDB, AWS deployments, React + Redux interfaces, an Electron desktop app, and QA testing. From 2025 to 2026 he worked at IBEX as a customer support agent in English.',
      es: 'Trabajó como Desarrollador Full Stack (Trainee/Junior) en Sumadi durante su práctica profesional supervisada (feb–jun 2025): autenticación JWT/OAuth, PostgreSQL y MongoDB, despliegues en AWS, interfaces con React + Redux, una app de escritorio con Electron y pruebas de QA. De 2025 a 2026 trabajó en IBEX como agente de servicio al cliente en inglés.',
    },
  },
  {
    id: 'projects',
    keywords: ['project', 'lexflow', 'automarket', 'brand', 'marca', 'design', 'diseño', 'concapan', 'portfolio', 'built', 'proyecto', 'construido'],
    answer: {
      en: 'His featured project is LexFlow, an English vocabulary platform built around images, video, audio, and pronunciation (React, TypeScript, Node.js, Supabase/PostgreSQL) — currently in development. He also designed the AutoMarket brand identity (logo, palette, brand manual), contributed to the IEEE CONCAPAN website, and deploys static sites on Cloudflare Pages.',
      es: 'Su proyecto destacado es LexFlow, una plataforma de vocabulario en inglés basada en imágenes, video, audio y pronunciación (React, TypeScript, Node.js, Supabase/PostgreSQL), actualmente en desarrollo. También diseñó la identidad de marca de AutoMarket (logo, paleta, manual de marca), colaboró en el sitio de IEEE CONCAPAN y despliega sitios estáticos en Cloudflare Pages.',
    },
  },
  {
    id: 'education',
    keywords: ['study', 'studies', 'education', 'degree', 'university', 'unah', 'certif', 'course', 'estudi', 'educación', 'educacion', 'universidad', 'carrera', 'curso'],
    answer: {
      en: 'He is a Systems Engineer, graduated from UNAH (Universidad Nacional Autónoma de Honduras). Certifications include CCNA: Introduction to Networks and Python Essentials (Cisco), Programming Logic with JavaScript (Alura Latam), a 160-hour Graphic Design course, and HP LIFE courses in leadership and business.',
      es: 'Es Ingeniero en Sistemas egresado de la UNAH (Universidad Nacional Autónoma de Honduras). Sus certificaciones incluyen CCNA: Introduction to Networks y Fundamentos de Python (Cisco), Lógica de Programación con JavaScript (Alura Latam), un curso de Diseño Gráfico de 160 horas y cursos de HP LIFE en liderazgo y negocios.',
    },
  },
  {
    id: 'english',
    keywords: ['english', 'spanish', 'inglés', 'ingles', 'español', 'idioma', 'speak', 'habla'],
    answer: {
      en: 'Spanish is his native language and his English is B2 (upper intermediate); he communicates professionally in English — he handled customer cases in English daily at IBEX.',
      es: 'Su idioma nativo es el español y tiene un nivel de inglés B2 (intermedio alto); se comunica profesionalmente en inglés — atendía casos de clientes en inglés a diario en IBEX.',
    },
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'based', 'remote', 'relocat', 'dónde', 'donde', 'ubicación', 'remoto', 'vive'],
    answer: {
      en: 'He is based in Tegucigalpa, Honduras. For questions about availability or remote work, the best route is to reach out directly. ' + contactLine.en,
      es: 'Vive en Tegucigalpa, Honduras. Para preguntas sobre disponibilidad o trabajo remoto, lo mejor es contactarlo directamente. ' + contactLine.es,
    },
  },
  {
    id: 'fun',
    keywords: ['hobby', 'hobbies', 'fun', 'free time', 'game', 'music', 'movie', 'dog', 'pet', 'personality', 'pasatiempo', 'diversión', 'tiempo libre', 'juego', 'música', 'musica', 'película', 'perro', 'mascota', 'personalidad'],
    answer: {
      en: "Dimas is cheerful, positive, and optimistic 😄. Off the clock he enjoys video games 🎮, series and movies 🎬, music 🎧, time with friends, and his dog 🐶. His motto: \"Don't be afraid to fail — be afraid of not trying.\"",
      es: 'Dimas es alegre, positivo y optimista 😄. En su tiempo libre disfruta los videojuegos 🎮, las series y películas 🎬, la música 🎧, pasar tiempo con amigos y con su perro 🐶. Su lema: "No tengas miedo de fallar, ten miedo de no intentarlo."',
    },
  },
]

const greetings = ['hi', 'hello', 'hey', 'hola', 'buenas', 'buenos']

const fallback: Record<Lang, string> = {
  en: `I can answer questions about Dimas's experience, skills, projects, education, and leadership. For anything else, ${contactLine.en.charAt(0).toLowerCase()}${contactLine.en.slice(1)}`,
  es: `Puedo responder sobre la experiencia, habilidades, proyectos, educación y liderazgo de Dimas. Para cualquier otra cosa, ${contactLine.es.charAt(0).toLowerCase()}${contactLine.es.slice(1)}`,
}

const hello: Record<Lang, string> = {
  en: "Hi! 👋 I'm Dimas's assistant. Ask me about his experience, skills, or projects.",
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
