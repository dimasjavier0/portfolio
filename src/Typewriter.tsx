import { useEffect, useState } from 'react'

// Splits into user-perceived characters so emoji (e.g. ⚙️, 🇭🇳) are typed as one unit
function graphemes(text: string): string[] {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const seg = new Intl.Segmenter(undefined, { granularity: 'grapheme' })
    return Array.from(seg.segment(text), s => s.segment)
  }
  return Array.from(text)
}

const TYPE_MS = 70
const DELETE_MS = 35
const HOLD_MS = 1600

export function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Restart when the word list changes (language switch)
  useEffect(() => {
    setIndex(0)
    setCount(0)
    setDeleting(false)
  }, [words])

  const chars = graphemes(words[index % words.length] ?? '')

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setCount(chars.length)
      const id = setTimeout(() => setIndex(i => (i + 1) % words.length), HOLD_MS + 1000)
      return () => clearTimeout(id)
    }
    let delay = deleting ? DELETE_MS : TYPE_MS
    if (!deleting && count === chars.length) delay = HOLD_MS
    const id = setTimeout(() => {
      if (!deleting && count === chars.length) setDeleting(true)
      else if (deleting && count === 0) {
        setDeleting(false)
        setIndex(i => (i + 1) % words.length)
      } else setCount(c => c + (deleting ? -1 : 1))
    }, delay)
    return () => clearTimeout(id)
  }, [count, deleting, chars.length, words.length])

  return (
    <span className="typewriter" aria-live="off">
      {/* full list for screen readers; the animated text is decorative */}
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true">
        {chars.slice(0, count).join('')}
        <span className="caret" />
      </span>
    </span>
  )
}
