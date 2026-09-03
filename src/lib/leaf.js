export function leaf(fill = '#6FE0B5', stroke = '#14332A', strokeWidth = 3) {
  const strokeAttrs = stroke ? ` stroke="${stroke}" stroke-width="${strokeWidth}"` : ''
  return `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 44 C 9 35, 8 17, 24 4 C 40 17, 39 35, 24 44 Z" fill="${fill}"${strokeAttrs}/></svg>`
}
