import { useEffect, useRef, useState } from 'react'
import { answer, answerFor, suggestions } from './chatKnowledge'
import type { Lang } from './content'
import { Icon } from './Icon'

type Msg = { from: 'user' | 'bot'; text: string }

const t = {
  title: { en: 'Ask about Dimas', es: 'Pregunta sobre Dimas' },
  subtitle: { en: 'Answers come from his resume and projects', es: 'Las respuestas vienen de su CV y proyectos' },
  placeholder: { en: 'Ask about his experience…', es: 'Pregunta sobre su experiencia…' },
  send: { en: 'Send', es: 'Enviar' },
  bubble: { en: 'Ask me about Dimas 👋', es: 'Pregúntame sobre Dimas 👋' },
  open: { en: 'Ask about Dimas Rodríguez', es: 'Preguntar sobre Dimas Rodríguez' },
  close: { en: 'Close chat', es: 'Cerrar chat' },
  note: { en: 'Automated assistant · answers are based on his resume.', es: 'Asistente automático · respuestas basadas en su CV.' },
}

export function Chat({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showBubble, setShowBubble] = useState(true)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [msgs, typing])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const ask = (question: string, reply: string) => {
    if (typing) return
    setMsgs(m => [...m, { from: 'user', text: question }])
    setTyping(true)
    setTimeout(() => {
      setMsgs(m => [...m, { from: 'bot', text: reply }])
      setTyping(false)
    }, 650)
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = input.trim()
    if (!q) return
    setInput('')
    ask(q, answer(q, lang))
  }

  return (
    <div className="chat-root">
      {open && (
        <div className="chat-panel" role="dialog" aria-label={t.title[lang]}>
          <header className="chat-header">
            <span className="chat-avatar small">DR</span>
            <div>
              <strong>{t.title[lang]}</strong>
              <small>{t.subtitle[lang]}</small>
            </div>
            <button className="icon-btn" onClick={() => setOpen(false)} aria-label={t.close[lang]}>
              <Icon name="x" size={18} />
            </button>
          </header>
          <div className="chat-body" ref={listRef}>
            {msgs.map((m, i) => (
              <div key={i} className={`chat-msg ${m.from}`}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot typing" aria-label="…">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
          {/* wraps while the chat is empty, then collapses to one scrollable row */}
          <div className={`chat-suggestions ${msgs.length ? 'compact' : ''}`}>
            {suggestions[lang].map(s => (
              <button key={s.intent} onClick={() => ask(s.label, answerFor(s.intent, lang))} disabled={typing}>
                {s.label}
              </button>
            ))}
          </div>
          <form className="chat-input" onSubmit={submit}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={t.placeholder[lang]}
              maxLength={300}
              aria-label={t.placeholder[lang]}
            />
            <button type="submit" disabled={!input.trim() || typing}>
              {t.send[lang]}
            </button>
          </form>
          <p className="chat-note">{t.note[lang]}</p>
        </div>
      )}
      {!open && showBubble && (
        <button className="chat-bubble" onClick={() => { setOpen(true); setShowBubble(false) }}>
          {t.bubble[lang]}
        </button>
      )}
      <button
        className={`chat-fab ${open ? 'is-open' : ''}`}
        onClick={() => { setOpen(o => !o); setShowBubble(false) }}
        aria-label={open ? t.close[lang] : t.open[lang]}
        aria-expanded={open}
      >
        {open ? <Icon name="x" size={24} /> : <span className="chat-avatar">DR</span>}
        {!open && <span className="online-dot" />}
      </button>
    </div>
  )
}
