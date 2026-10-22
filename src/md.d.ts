// Markdown files are bundled as plain text by wrangler ([[rules]] in wrangler.toml)
declare module '*.md' {
  const text: string
  export default text
}
