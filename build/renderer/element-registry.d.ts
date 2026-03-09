import { ReactNode } from 'react';
import { VoltraNodeJson } from '../types.js';
export type ElementRegistry = {
    /**
     * Check if an element has already been registered
     * @returns The index if registered, undefined otherwise
     */
    isRegistered: (element: ReactNode) => number | undefined;
    /**
     * Register a rendered element and get its index
     */
    register: (element: ReactNode, rendered: VoltraNodeJson) => number;
    /**
     * Get all registered shared elements
     */
    getElements: () => VoltraNodeJson[];
};
export declare const createElementRegistry: () => ElementRegistry;
/**
 * Pre-scan the element tree to identify elements that appear multiple times (by reference).
 * This is a fast O(n) traversal that only does reference comparisons.
 */
export declare const preScanForDuplicates: (element: ReactNode) => Set<ReactNode>;
//# sourceMappingURL=element-registry.d.ts.map