/**
 * Mapping from Android component name to numeric ID
 * Component IDs are assigned sequentially based on order in components.json (0-indexed)
 */
export declare const ANDROID_COMPONENT_NAME_TO_ID: Record<string, number>;
/**
 * Mapping from numeric ID to Android component name
 */
export declare const ANDROID_COMPONENT_ID_TO_NAME: Record<number, string>;
/**
 * Get Android component ID from name
 * @throws Error if component name is not found
 */
export declare function getAndroidComponentId(name: string): number;
/**
 * Get Android component name from ID
 * @throws Error if component ID is not found
 */
export declare function getAndroidComponentName(id: number): string;
//# sourceMappingURL=component-ids.d.ts.map