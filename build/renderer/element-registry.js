export const createElementRegistry = () => {
    const elementToIndex = new Map();
    const elements = [];
    return {
        isRegistered: (element) => {
            return elementToIndex.get(element);
        },
        register: (element, rendered) => {
            const index = elements.length;
            elementToIndex.set(element, index);
            elements.push(rendered);
            return index;
        },
        getElements: () => elements,
    };
};
/**
 * Pre-scan the element tree to identify elements that appear multiple times (by reference).
 * This is a fast O(n) traversal that only does reference comparisons.
 */
export const preScanForDuplicates = (element) => {
    const seen = new Set();
    const duplicates = new Set();
    const scan = (node) => {
        // Skip primitives and nullish values
        if (node === null || node === undefined || typeof node !== 'object') {
            return;
        }
        // Handle arrays
        if (Array.isArray(node)) {
            for (const child of node) {
                scan(child);
            }
            return;
        }
        // Reference equality check - very fast!
        if (seen.has(node)) {
            duplicates.add(node);
        }
        else {
            seen.add(node);
        }
        // Recurse into children if this is a React element
        if ('props' in node) {
            const props = node.props;
            if (props) {
                // Scan children
                if (props.children !== undefined) {
                    scan(props.children);
                }
                // Also scan any props that might contain JSX elements
                for (const [key, value] of Object.entries(props)) {
                    if (key !== 'children' && value && typeof value === 'object' && 'type' in value && 'props' in value) {
                        scan(value);
                    }
                }
            }
        }
    };
    scan(element);
    return duplicates;
};
//# sourceMappingURL=element-registry.js.map