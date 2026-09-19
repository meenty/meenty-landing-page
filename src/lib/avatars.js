export function avatarFelipe() {
  return `<svg viewBox="0 0 48 48" fill="none">
    <path d="M12 16 C 13 9, 20 6, 24 7 C 29 5, 35 9, 36 16 C 37 13, 33 20, 33 20 L 15 20 C 15 20, 11 13, 12 16 Z" style="fill:var(--earth)"/>
    <circle cx="24" cy="26" r="13" style="stroke:var(--earth)" stroke-width="2.5" fill="#FFF6DE"/>
    <circle cx="19" cy="25" r="4" style="stroke:var(--earth)" stroke-width="2"/>
    <circle cx="29" cy="25" r="4" style="stroke:var(--earth)" stroke-width="2"/>
    <path d="M23 25 h2" style="stroke:var(--earth)" stroke-width="2"/>
    <path d="M17 34 C 19 38, 29 38, 31 34 C 29 36, 19 36, 17 34 Z" style="fill:var(--earth)"/>
    <path d="M20 33 C 22 34.5, 26 34.5, 28 33" stroke="#FFF6DE" stroke-width="1.4" stroke-linecap="round"/>
  </svg>`
}

export function avatarMauricio() {
  return `<svg viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="26" r="13" style="stroke:var(--earth)" stroke-width="2.5" fill="#FFF6DE"/>
    <path d="M14 19 C 16 15, 20 13, 24 13 C 28 13, 32 15, 34 19" style="stroke:var(--earth)" stroke-width="2" stroke-linecap="round"/>
    <path d="M20 12 l1 -3 M25 11 l0 -3 M29 12 l2 -3" style="stroke:var(--earth)" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="19" cy="25" r="4" style="stroke:var(--earth)" stroke-width="2"/>
    <circle cx="29" cy="25" r="4" style="stroke:var(--earth)" stroke-width="2"/>
    <path d="M23 25 h2" style="stroke:var(--earth)" stroke-width="2"/>
    <path d="M18 32 C 20 30.5, 22 30.5, 24 32 C 26 30.5, 28 30.5, 30 32" style="stroke:var(--earth)" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M20 35.5 C 22 37, 26 37, 28 35.5" style="stroke:var(--earth)" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`
}

export function avatarAna() {
  return `<svg viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="14" r="5" style="fill:var(--earth)"/>
    <path d="M13 22 C 14 15, 19 11, 24 11 C 29 11, 34 15, 35 22 L 33 24 L 15 24 Z" style="fill:var(--earth)"/>
    <circle cx="24" cy="27" r="12.5" style="stroke:var(--earth)" stroke-width="2.5" fill="#FFF6DE"/>
    <circle cx="19.5" cy="26" r="1.6" style="fill:var(--earth)"/>
    <circle cx="28.5" cy="26" r="1.6" style="fill:var(--earth)"/>
    <path d="M19 32.5 C 21.5 35, 26.5 35, 29 32.5" style="stroke:var(--earth)" stroke-width="2" stroke-linecap="round"/>
    <circle cx="16.5" cy="30" r="1.8" fill="#F5C9B5"/>
    <circle cx="31.5" cy="30" r="1.8" fill="#F5C9B5"/>
  </svg>`
}

export function initialsAvatar(name, fill = 'var(--surface)') {
  const initials = (name || '')
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
  return `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="23" style="fill:${fill};stroke:var(--earth)" stroke-width="2.5"/>
    <text x="24" y="29" text-anchor="middle" font-size="16" font-family="Figtree, sans-serif" font-weight="700" style="fill:var(--earth)">${initials}</text>
  </svg>`
}
