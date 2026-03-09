// 🤖 AUTO-GENERATED from data/components.json
// DO NOT EDIT MANUALLY - Changes will be overwritten
// Schema version: 1.0.0

import type { VoltraBaseProps } from '../baseProps'

export type NativeTimerBarProps = VoltraBaseProps & {
  /** End time in milliseconds since epoch */
  endAtMs?: number
  /** Start time in milliseconds since epoch */
  startAtMs?: number
  /** Color for the progress fill */
  progressColor?: string
  /** Color for the track (background) */
  trackColor?: string
  /** Corner radius for the bar */
  cornerRadius?: number
  /** Explicit height for the bar */
  height?: number
}
