/**
 * Unified mapping from full names to short names
 * Used for props and style properties
 */
export declare const NAME_TO_SHORT: Record<string, string>;
/**
 * Reverse mapping from short names to full names
 */
export declare const SHORT_TO_NAME: Record<string, string>;
/**
 * Shorten a name using the unified mapping
 * Returns the original name if no short form exists
 */
export declare function shorten(name: string): string;
/**
 * Expand a short name back to the full name
 * Returns the original value if no expansion exists
 */
export declare function expand(short: string): string;
//# sourceMappingURL=short-names.d.ts.map