import type { AndroidWidgetVariants } from './types.js';
/**
 * Renders Android widget variants to JSON with size breakpoints.
 *
 * Output format:
 * {
 *   "v": 1,
 *   "variants": {
 *     "150x100": { ... node tree ... },
 *     "150x200": { ... node tree ... },
 *     "215x100": { ... node tree ... }
 *   },
 *   "s": [...shared styles...],
 *   "e": [...shared elements...]
 * }
 */
export declare const renderAndroidWidgetToJson: (variants: AndroidWidgetVariants) => Record<string, any>;
/**
 * Renders Android widget variants to a JSON string.
 */
export declare const renderAndroidWidgetToString: (variants: AndroidWidgetVariants) => string;
//# sourceMappingURL=renderer.d.ts.map