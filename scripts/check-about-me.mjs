// Fails the build if src/about-me.md contains private data or is too long.
// Runs before every build (local and on Cloudflare), so a bad paste never reaches the live chat.
import { readFileSync } from 'node:fs'

const FILE = 'src/about-me.md'
const MAX_CHARS = 6000
const PUBLIC_EMAIL = 'dimasjavier.0@gmail.com'

const text = readFileSync(FILE, 'utf8').replace(/<!--[\s\S]*?-->/g, '')

const keywords = [
  'date of birth', 'born on', 'birthday', 'years old', 'age:', 'fecha de nacimiento', 'nací el', 'cumpleaños', 'edad:', 'años de edad',
  'home address', 'address:', 'dirección', 'domicilio', 'colonia ',
  'salary', 'salario', 'sueldo', 'expected pay', 'pretensión salarial',
  'password', 'contraseña', 'api key', 'api_key', 'token:', 'secret',
  'passport', 'pasaporte', 'identity number', 'dni', 'número de identidad', 'social security', 'seguro social',
]

const problems = []
text.split('\n').forEach((line, i) => {
  const where = `line ${i + 1}`
  const lower = line.toLowerCase()
  for (const k of keywords) if (lower.includes(k)) problems.push(`${where}: mentions "${k}"`)
  for (const m of line.matchAll(/[\w.+-]+@[\w-]+\.[\w.]+/g)) {
    if (m[0].toLowerCase() !== PUBLIC_EMAIL) problems.push(`${where}: email address ${m[0]}`)
  }
  // Honduran ID (0801-1999-12345) or any long run of digits (cards, accounts)
  if (/\b\d{4}-?\d{4}-?\d{5}\b/.test(line) || /\d{11,}/.test(line.replace(/[\s-]/g, ''))) {
    problems.push(`${where}: looks like an ID, card, or account number`)
  }
  // Phone numbers: +504 ..., or 4+4 digits that are not a year range like 2023-2024
  if (/\+\d{1,3}[\s-]?\d{3,4}[\s-]?\d{4}/.test(line)) problems.push(`${where}: looks like a phone number`)
  for (const m of line.matchAll(/\b(\d{4})[\s-](\d{4})\b/g)) {
    const isYears = [m[1], m[2]].every(y => /^(19|20)\d\d$/.test(y))
    if (!isYears) problems.push(`${where}: looks like a phone number (${m[0]})`)
  }
})

if (text.trim().length > MAX_CHARS) {
  problems.push(`${text.trim().length} characters — keep it under ${MAX_CHARS} (each extra character costs AI quota on every question)`)
}

if (problems.length) {
  console.error(`\n✘ ${FILE} may contain private data. Fix it before deploying:\n`)
  for (const p of problems) console.error(`  - ${p}`)
  console.error('')
  process.exit(1)
}
console.log(`✓ ${FILE}: ${text.trim().length} characters, no private data found`)
