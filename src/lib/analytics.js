import { init as plausibleInit, track as plausibleTrack } from '@plausible-analytics/tracker'

let enabled = false

export function init(opts) {
  if (enabled) return
  enabled = true
  plausibleInit(opts)
}

export function track(name, opts) {
  if (!enabled) return
  plausibleTrack(name, opts)
}
