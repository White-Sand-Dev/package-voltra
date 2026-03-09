import type { VoltraBaseProps } from '../baseProps';
export type LinearGradientProps = VoltraBaseProps & {
    /** Pipe-separated color list (e.g., '#ff0000|#00ff00|#0000ff') */
    colors?: string;
    /** Pipe-separated gradient stops (e.g., 'red@0|orange@0.5|yellow@1') */
    stops?: string;
    /** Start point (e.g., 'topLeading', 'center', or 'x,y') */
    startPoint?: string;
    /** End point (e.g., 'bottomTrailing', 'center', or 'x,y') */
    endPoint?: string;
    /** Enable dithering (system-controlled) */
    dither?: boolean;
};
//# sourceMappingURL=LinearGradient.d.ts.map