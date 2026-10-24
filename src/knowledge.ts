import { certifications, education, experience, profile, projects, skillGroups, ui } from './content'
import { curatedAnswers } from './chatKnowledge'
import aboutMe from './about-me.md'

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
    lines.push(`- ${e.role.en} at ${e.org}${e.team ? `, ${e.team.en}` : ''} (${e.period.en}, ${e.kind.en})`)
    for (const b of e.bullets.en) lines.push(`  * ${b}`)
    for (const p of e.projects ?? []) {
      lines.push(`  Project: ${p.title.en}`)
      for (const d of p.did.en) lines.push(`    - Did: ${d}`)
      for (const i of p.impact.en) lines.push(`    - Impact: ${i}`)
    }
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
  for (const c of certifications) lines.push(`- ${c.name.en}, by ${c.issuer}${c.url ? ` (credential: ${c.url})` : ''}`)

  section('Services for small businesses')
  lines.push(`In his own words: ${ui.business.text.en}`)
  lines.push(`Offers: ${ui.business.items.map(i => i.en).join(', ')}`)

  section('Personal')
  lines.push(ui.fun.subtitle.en)
  lines.push(`Hobbies: ${ui.fun.items.map(i => i.en).join(', ')}`)
  lines.push(`Motto: "${ui.fun.quote.en}"`)
  lines.push(`He has two dogs, ${ui.fun.pets.map(p => p.name).join(' and ')}, jokingly called his "co-pilots": ${ui.fun.petText.en}`)

  section('Extra facts')
  lines.push(...curatedAnswers('en'))

  // Optional notes pasted from ChatGPT (checked for private data by scripts/check-about-me.mjs)
  const notes = aboutMe.replace(/<!--[\s\S]*?-->/g, '').trim()
  if (notes) {
    section('Additional notes (lower priority than the sections above)')
    lines.push(notes)
  }

  return lines.join('\n').trim()
}
