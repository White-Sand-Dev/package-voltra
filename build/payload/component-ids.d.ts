/**
 * Mapping from component name to numeric ID
 * Component IDs are assigned sequentially based on order in components.json (0-indexed)
 */
export declare const COMPONENT_NAME_TO_ID: Record<string, number>;
/**
 * Mapping from numeric ID to component name
 */
export declare const COMPONENT_ID_TO_NAME: Record<number, string>;
/**
 * Get component ID from name
 * @throws Error if component name is not found
 */
export declare function getComponentId(name: string): number;
/**
 * Get component name from ID
 * @throws Error if component ID is not found
 */
export declare function getComponentName(id: number): string;
//# sourceMappingURL=component-ids.d.ts.map