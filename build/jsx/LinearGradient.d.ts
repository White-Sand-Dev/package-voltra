import type { LinearGradientProps as SwiftLinearGradientProps } from './props/LinearGradient.js';
export type LinearGradientProps = Omit<SwiftLinearGradientProps, 'colors' | 'locations' | 'start' | 'end'> & {
    colors: readonly [string, string, ...string[]];
    locations?: readonly number[] | null;
    start?: {
        x: number;
        y: number;
    } | [number, number] | 'top' | 'bottom' | 'leading' | 'trailing' | 'topLeading' | 'topTrailing' | 'bottomLeading' | 'bottomTrailing' | 'center' | null;
    end?: {
        x: number;
        y: number;
    } | [number, number] | 'top' | 'bottom' | 'leading' | 'trailing' | 'topLeading' | 'topTrailing' | 'bottomLeading' | 'bottomTrailing' | 'center' | null;
};
export declare const LinearGradient: import("./createVoltraComponent.js").VoltraComponent<LinearGradientProps>;
//# sourceMappingURL=LinearGradient.d.ts.map