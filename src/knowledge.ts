import { certifications, education, experience, profile, projects, skillGroups, ui } from './content'
import { curatedAnswers } from './chatKnowledge'

// Plain-text fact sheet that the AI chat (worker/chat.ts) is allowed to answer from.
// Built from the same data the site renders, so editing content.ts updates both.
export function buildKnowledge(): string {
  const lines: string[] = []
  const section = (title: string) => lines.push('', `## ${title}`)

  section('Profile')
  lines.push(
    `Name: ${profile.name} (goes by ${profile.shortName})`,
    `Location: ${ui.hero.location.en}`,
    `Email: ${profile.email}`,
    `GitHub: ${profile.github}`,
    `LinkedIn: ${profile.linkedin}`,
    `Roles: ${ui.hero.roles.en.join(', ')}`,
    `Status: ${ui.hero.openToWork.en}. ${ui.contact.text.en}`,
  )

  section('About (in his own words, first person)')
  lines.push(ui.about.p1.en, ui.about.p2.en, ui.about.p3.en)
  lines.push(`Soft skills: ${ui.about.soft.en.join(', ')}`)
  lines.push(`Languages: ${ui.about.languages.en.join('; ')}`)

  section('Experience')
  for (const e of experience) {
    lines.push(`- ${e.role.en} at ${e.org} (${e.period.en}, ${e.kind.en})`)
    for (const b of e.bullets.en) lines.push(`  * ${b}`)
    if (e.tags) lines.push(`  Tech: ${e.tags.join(', ')}`)
  }

  section('Projects')
  for (const p of projects) {
    lines.push(`- ${p.name} [${p.status.en}]: ${p.summary.en}`)
    if (p.problem) lines.push(`  Problem: ${p.problem.en}`)
    if (p.solution) lines.push(`  Approach: ${p.solution.en}`)
    if (p.role) lines.push(`  His role: ${p.role.en}`)
    lines.push(`  Stack: ${p.stack.join(', ')}`)
    if (p.link) lines.push(`  Link: ${p.link}`)
  }

  section('Technical skills')
  for (const g of skillGroups) lines.push(`- ${g.label.en}: ${g.skills.map(s => s.name).join(', ')}`)

  section('Education')
  for (const e of education) lines.push(`- ${e.degree.en}, ${e.school}${e.period ? ` (${e.period})` : ''}`)
  lines.push('Certifications:')
  for (const c of certifications) lines.push(`- ${c.name.en} — ${c.issuer}`)

  section('Personal')
  lines.push(ui.fun.subtitle.en)
  lines.push(`Hobbies: ${ui.fun.items.map(i => i.en).join(', ')}`)
  lines.push(`Motto: "${ui.fun.quote.en}"`)
  lines.push(`He has a dog, jokingly called his "${ui.fun.petTitle.en.replace(/[^\w\s-]/g, '').trim()}": ${ui.fun.petText.en}`)

  section('Extra facts')
  lines.push(...curatedAnswers('en'))

  return lines.join('\n').trim()
}
