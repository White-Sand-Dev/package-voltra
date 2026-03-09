import type { VoltraBaseProps } from '../baseProps';
export type NativeTimerBarProps = VoltraBaseProps & {
    /** End time in milliseconds since epoch */
    endAtMs?: number;
    /** Start time in milliseconds since epoch */
    startAtMs?: number;
    /** Color for the progress fill */
    progressColor?: string;
    /** Color for the track (background) */
    trackColor?: string;
    /** Corner radius for the bar */
    cornerRadius?: number;
    /** Explicit height for the bar */
    height?: number;
};
//# sourceMappingURL=NativeTimerBar.d.ts.map