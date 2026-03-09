/**
 * Return whether Liquid Glass APIs are supported on this device (iOS 26+).
 * This is a convenience gate for authoring fallbacks in JS.
 */
export declare function isGlassSupported(): boolean;
/**
 * Return whether the app was launched in the background (headless).
 * Returns true if the app was launched in background, false if launched in foreground.
 * Always returns false on non-iOS platforms.
 */
export declare function isHeadless(): boolean;
//# sourceMappingURL=helpers.d.ts.map