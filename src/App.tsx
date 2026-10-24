import { useEffect, useState } from 'react'
import {
  certifications,
  certTagEs,
  education,
  experience,
  profile,
  projects,
  skillGroups,
  skillNameEs,
  ui,
  type Lang,
} from './content'
import { Chat } from './Chat'
import { Icon } from './Icon'
import { Typewriter } from './Typewriter'

const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'fun', 'contact'] as const
type Section = (typeof sections)[number]

const groupIcons: Record<string, string> = {
  frontend: 'code',
  backend: 'server',
  databases: 'database',
  tools: 'wrench',
  design: 'pen',
  architecture: 'layers',
}

function readStored(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}
function store(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage unavailable — preference just won't persist */
  }
}

export default function App() {
  // English by default; remembers the visitor's choice afterwards
  const [lang, setLang] = useState<Lang>(() => (readStored('lang') === 'es' ? 'es' : 'en'))
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )
  const [active, setActive] = useState<Section>('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [skillTab, setSkillTab] = useState(skillGroups[0].id)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.documentElement.lang = lang
    store('lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    store('theme', theme)
  }, [theme])

  // Scroll-reveal animations
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && (e.target.classList.add('visible'), io.unobserve(e.target))),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Highlight the nav link of the section in view
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id as Section)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    // Deep links like /#projects: the browser can't jump before React renders the section
    const target = location.hash && document.getElementById(location.hash.slice(1))
    if (target) target.scrollIntoView()
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const go = (id: Section) => (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    history.replaceState(null, '', id === 'home' ? location.pathname : `#${id}`)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked — the address is visible to copy manually */
    }
  }

  const group = skillGroups.find(g => g.id === skillTab)!
  const year = new Date().getFullYear()

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={go('home')}>
            <span className="brand-mark">D</span>
            <span className="brand-name">{profile.shortName}</span>
          </a>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main">
            {/* contact lives in the highlighted button next to the toggles instead */}
            {sections
              .filter(id => id !== 'contact')
              .map(id => (
                <a key={id} href={`#${id}`} onClick={go(id)} className={active === id ? 'active' : ''}>
                  {ui.nav[id][lang]}
                </a>
              ))}
          </nav>

          <div className="nav-actions">
            <a
              href="#contact"
              className={`nav-cta ${active === 'contact' ? 'active' : ''}`}
              onClick={go('contact')}
              aria-label={ui.navContact[lang]}
            >
              <Icon name="mail" size={16} />
              <span>{ui.navContact[lang]}</span>
            </a>
            <button
              className="lang-btn"
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              aria-label={ui.langSwitch[lang]}
              title={ui.langSwitch[lang]}
            >
              <Icon name="globe" size={16} />
              <span className={lang === 'en' ? 'on' : ''}>EN</span>
              <span className="sep">/</span>
              <span className={lang === 'es' ? 'on' : ''}>ES</span>
            </button>
            <button
              className={`theme-switch ${theme}`}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={ui.theme[lang]}
              title={ui.theme[lang]}
              role="switch"
              aria-checked={theme === 'dark'}
            >
              <span className="knob">
                <Icon name={theme === 'dark' ? 'moon' : 'sun'} size={14} />
              </span>
            </button>
            <button className="icon-btn menu-btn" onClick={() => setMenuOpen(o => !o)} aria-label={ui.menu[lang]} aria-expanded={menuOpen}>
              <Icon name={menuOpen ? 'x' : 'menu'} />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="hello-line fade-in" style={{ animationDelay: '0.05s' }}>
                <span className="dash" aria-hidden="true" />
                {ui.hero.greeting[lang]}
              </p>
              <h1 className="fade-in" style={{ animationDelay: '0.15s' }}>
                Dimas <span className="gradient-text">Rodríguez</span>
              </h1>
              <p className="hero-roles fade-in" style={{ animationDelay: '0.25s' }}>
                <Typewriter words={ui.hero.roles[lang]} />
              </p>
              <div className="hero-intro fade-in" style={{ animationDelay: '0.35s' }}>
                {ui.hero.intro[lang].map(p => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="hero-cta fade-in" style={{ animationDelay: '0.45s' }}>
                <a href="#experience" className="btn primary" onClick={go('experience')}>
                  {ui.hero.ctaPrimary[lang]}
                </a>
                <a href="#contact" className="btn ghost" onClick={go('contact')}>
                  {ui.hero.ctaSecondary[lang]}
                </a>
              </div>
              <div className="hero-social fade-in" style={{ animationDelay: '0.55s' }}>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="chip-link">
                  <Icon name="linkedin" size={16} /> LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="chip-link">
                  <Icon name="github" size={16} /> GitHub
                </a>
                <span className="chip-link muted">
                  <Icon name="pin" size={16} /> {ui.hero.location[lang]}
                </span>
              </div>
            </div>

            {/* Photo framed with guide lines that run past the corners */}
            <div className="hero-visual fade-in" style={{ animationDelay: '0.3s' }}>
              <figure className="photo-frame">
                <span className="photo-glow" aria-hidden="true" />
                <span className="photo-lines" aria-hidden="true">
                  <i className="line v l" />
                  <i className="line v r" />
                  <i className="line h t" />
                  <i className="line h b" />
                </span>
                <span className="stripes stripes-photo" aria-hidden="true" />
                <img src="/img/me.webp" alt={ui.hero.photoAlt[lang]} width={360} height={360} />
                <span className="open-badge">
                  <span className="pulse-dot" /> {ui.hero.openToWork[lang]}
                </span>
                {['💻', '🚀', '🎮', '☕', '🎧'].map((e, i) => (
                  <span key={e} className={`sticker s${i}`} aria-hidden="true">
                    {e}
                  </span>
                ))}
              </figure>
            </div>
          </div>
          <a href="#about" className="scroll-down" onClick={go('about')} aria-label={ui.scrollDown[lang]}>
            <Icon name="chevronDown" />
          </a>
        </section>

        {/* BUSINESS BANNER */}
        <section className="biz" aria-labelledby="biz-title">
          <div className="container">
            <div className="biz-card reveal">
              <div className="biz-copy">
                <h2 id="biz-title">{ui.business.title[lang]}</h2>
                <p>{ui.business.text[lang]}</p>
                <ul className="biz-items">
                  {ui.business.items.map(it => (
                    <li key={it.en}>
                      <Icon name={it.icon} size={16} /> {it[lang]}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(ui.business.subject[lang])}`}
                className="btn primary biz-btn"
              >
                <Icon name="mail" /> {ui.business.button[lang]}
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title reveal">{ui.about.title[lang]}</h2>
            <div className="about-grid">
              <div className="about-text reveal">
                <p>{ui.about.p1[lang]}</p>
                <p>{ui.about.p2[lang]}</p>
                <p>{ui.about.p3[lang]}</p>
              </div>
              <div className="about-side">
                <div className="stats reveal">
                  {ui.about.highlights.map(h => (
                    <div key={h.label.en} className="stat">
                      <strong>{h.value[lang]}</strong>
                      <span>{h.label[lang]}</span>
                    </div>
                  ))}
                </div>
                <div className="card reveal">
                  <h3>{ui.about.softTitle[lang]}</h3>
                  <div className="tags">
                    {ui.about.soft[lang].map(s => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                  <h3 className="mt">{ui.about.languagesTitle[lang]}</h3>
                  <ul className="plain">
                    {ui.about.languages[lang].map(l => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section alt">
          <div className="container">
            <h2 className="section-title reveal">{ui.experience.title[lang]}</h2>
            <p className="section-sub reveal">{ui.experience.subtitle[lang]}</p>
            <ol className="timeline">
              {experience.map(x => (
                <li key={x.org + x.period.en} className="timeline-item reveal">
                  <span className="timeline-dot">
                    <Icon name="briefcase" size={14} />
                  </span>
                  <article className="card exp-card">
                    <div className="exp-head">
                      <div>
                        <h3>{x.role[lang]}</h3>
                        <p className="exp-org">{x.org}</p>
                        {x.team && <p className="exp-team">{x.team[lang]}</p>}
                      </div>
                      <div className="exp-meta">
                        <span className="period">{x.period[lang]}</span>
                        <span className="kind">{x.kind[lang]}</span>
                      </div>
                    </div>
                    <ul className="bullets">
                      {x.bullets[lang].map(b => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    {x.projects && (
                      <details className="exp-details">
                        <summary>{ui.experience.details[lang]}</summary>
                        {x.projects.map(p => (
                          <div key={p.title.en} className="exp-project">
                            <h4>{p.title[lang]}</h4>
                            <p className="exp-label">{ui.experience.did[lang]}</p>
                            <ul className="bullets">
                              {p.did[lang].map(d => (
                                <li key={d}>{d}</li>
                              ))}
                            </ul>
                            <p className="exp-label">{ui.experience.impact[lang]}</p>
                            <ul className="bullets impact">
                              {p.impact[lang].map(d => (
                                <li key={d}>{d}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </details>
                    )}
                    {x.tags && (
                      <div className="tags">
                        {x.tags.map(tg => (
                          <span key={tg} className="tag small">{tg}</span>
                        ))}
                      </div>
                    )}
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title reveal">{ui.projects.title[lang]}</h2>
            <p className="section-sub reveal">{ui.projects.subtitle[lang]}</p>
            <div className="projects-grid">
              {projects.map(p => (
                <article key={p.name} className={`card project reveal ${p.featured ? 'featured' : ''}`}>
                  <div className="project-head">
                    <h3>{p.name}</h3>
                    <span className={`status ${p.statusKind}`}>{p.status[lang]}</span>
                  </div>
                  <p className="project-summary">{p.summary[lang]}</p>
                  {p.images && (
                    <div className="project-gallery">
                      {p.images.map(img => (
                        <img key={img.src} src={img.src} alt={img.alt[lang]} loading="lazy" />
                      ))}
                    </div>
                  )}
                  {(p.problem || p.solution || p.role) && (
                    <dl className="project-details">
                      {p.problem && (
                        <>
                          <dt>{ui.projects.problem[lang]}</dt>
                          <dd>{p.problem[lang]}</dd>
                        </>
                      )}
                      {p.solution && (
                        <>
                          <dt>{ui.projects.solution[lang]}</dt>
                          <dd>{p.solution[lang]}</dd>
                        </>
                      )}
                      {p.role && (
                        <>
                          <dt>{ui.projects.role[lang]}</dt>
                          <dd>{p.role[lang]}</dd>
                        </>
                      )}
                    </dl>
                  )}
                  <div className="tags">
                    {p.stack.map(s => (
                      <span key={s} className="tag small">{s}</span>
                    ))}
                  </div>
                  {(p.link || p.repo) && (
                    <div className="project-links">
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer">
                          <Icon name="external" size={16} /> {ui.projects.visit[lang]}
                        </a>
                      )}
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noopener noreferrer">
                          <Icon name="github" size={16} /> {ui.projects.code[lang]}
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section alt">
          <div className="container">
            <h2 className="section-title reveal">{ui.skills.title[lang]}</h2>
            <p className="section-sub reveal">{ui.skills.subtitle[lang]}</p>
            <div className="tabs reveal" role="tablist">
              {skillGroups.map(g => (
                <button
                  key={g.id}
                  role="tab"
                  aria-selected={skillTab === g.id}
                  className={skillTab === g.id ? 'active' : ''}
                  onClick={() => setSkillTab(g.id)}
                >
                  <Icon name={groupIcons[g.id]} size={18} />
                  {g.label[lang]}
                </button>
              ))}
            </div>
            {/* re-keyed on tab change so the chips replay their entrance animation */}
            <div className="skills-panel" role="tabpanel" key={skillTab}>
              {group.skills.map((s, i) => (
                <span key={s.name} className="skill" style={{ animationDelay: `${i * 0.04}s` }}>
                  <span className="skill-name">{lang === 'es' ? skillNameEs[s.name] ?? s.name : s.name}</span>
                  {s.icon && <img src={`/icons/${s.icon}.svg`} alt="" className={s.invert ? 'invert-dark' : ''} loading="lazy" />}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="container">
            <h2 className="section-title reveal">{ui.education.title[lang]}</h2>
            <p className="section-sub reveal">{ui.education.subtitle[lang]}</p>
            <h3 className="sub-heading reveal">
              <Icon name="graduation" /> {ui.education.eduTitle[lang]}
            </h3>
            <div className="edu-grid">
              {education.map(e => (
                <article key={e.school} className="card edu reveal">
                  <h4>{e.degree[lang]}</h4>
                  <p>{e.school}</p>
                  {e.period && <span className="period">{e.period}</span>}
                </article>
              ))}
            </div>
            <h3 className="sub-heading reveal">
              <Icon name="award" /> {ui.education.certTitle[lang]}
            </h3>
            <div className="cert-grid">
              {certifications.map(c => {
                const body = (
                  <>
                    <div className="cert-top">
                      {c.logo ? (
                        <img src={c.logo} alt="" className="cert-logo" loading="lazy" width={48} height={48} />
                      ) : (
                        <span className="cert-logo mono" aria-hidden="true">
                          {c.issuer.split(' ').slice(0, 2).map(w => w[0]).join('')}
                        </span>
                      )}
                      <span className="cert-issuer">{c.issuer}</span>
                    </div>
                    <h4>{c.name[lang]}</h4>
                    <div className="cert-foot">
                      <span className="tag small">{lang === 'es' ? certTagEs[c.tag] ?? c.tag : c.tag}</span>
                      {c.url && (
                        <span className="cert-link">
                          {ui.education.credential[lang]} <Icon name="external" size={14} />
                        </span>
                      )}
                    </div>
                  </>
                )
                return c.url ? (
                  <a key={c.name.en} href={c.url} target="_blank" rel="noopener noreferrer" className="card cert linked reveal">
                    {body}
                  </a>
                ) : (
                  <article key={c.name.en} className="card cert reveal">
                    {body}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* FUN */}
        <section id="fun" className="section alt fun">
          <span className="stripes stripes-corner" aria-hidden="true" />
          <div className="container">
            <h2 className="section-title reveal">{ui.fun.title[lang]}</h2>
            <p className="section-sub reveal">{ui.fun.subtitle[lang]}</p>
            <div className="fun-grid">
              <blockquote className="card quote reveal">
                <span className="quote-label">{ui.fun.quoteLabel[lang]} 👑</span>
                <p>“{ui.fun.quote[lang]}”</p>
              </blockquote>
              <article className="card pet reveal">
                <img src="/img/pet.webp" alt={ui.fun.petAlt[lang]} loading="lazy" width={140} height={140} />
                <div>
                  <h3>{ui.fun.petTitle[lang]}</h3>
                  <p>{ui.fun.petText[lang]}</p>
                </div>
              </article>
              <article className="card likes reveal">
                <h3>{ui.fun.itemsTitle[lang]}</h3>
                <ul>
                  {ui.fun.items.map(it => (
                    <li key={it.en}>
                      <span className="emoji" aria-hidden="true">{it.emoji}</span>
                      {it[lang]}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="container">
            <div className="contact-card reveal">
              <h2>{ui.contact.title[lang]}</h2>
              <p>{ui.contact.text[lang]}</p>
              <a href={`mailto:${profile.email}`} className="btn primary big">
                <Icon name="mail" /> {ui.contact.button[lang]}
              </a>
              <div className="email-fallback">
                <span>{ui.contact.fallback[lang]}</span>
                <span className="email-row">
                  <a href={`mailto:${profile.email}`} className="email">{profile.email}</a>
                  <button className="copy-btn" onClick={copyEmail} aria-live="polite">
                    <Icon name={copied ? 'check' : 'copy'} size={14} />
                    {copied ? ui.contact.copied[lang] : ui.contact.copy[lang]}
                  </button>
                </span>
              </div>
              <div className="contact-social">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn round">
                  <Icon name="linkedin" />
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn round">
                  <Icon name="github" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {year} {profile.name}. {ui.footer[lang]}
        </div>
      </footer>

      <Chat lang={lang} />
    </>
  )
}
