import { shorten } from '../payload/short-names.js';
import { flattenStyle } from './flatten-styles.js';
function compressStyleObject(style) {
    if (style === null || style === undefined) {
        return style;
    }
    // Flatten style if it's a StyleSheet reference or array
    const flattened = flattenStyle(style);
    const compressed = {};
    for (const [key, value] of Object.entries(flattened)) {
        const shortKey = shorten(key);
        if (value === null || value === undefined) {
            continue;
        }
        // Handle nested objects (e.g., shadowOffset: { width, height })
        if (typeof value === 'object' && !Array.isArray(value) && value.constructor === Object) {
            const compressedNested = {};
            for (const [nestedKey, nestedValue] of Object.entries(value)) {
                compressedNested[nestedKey] = nestedValue;
            }
            compressed[shortKey] = compressedNested;
        }
        else {
            compressed[shortKey] = value;
        }
    }
    return compressed;
}
export const createStylesheetRegistry = () => {
    const styleToIndex = new Map();
    const styles = [];
    return {
        registerStyle: (styleObject) => {
            const existing = styleToIndex.get(styleObject);
            if (existing !== undefined)
                return existing;
            const index = styles.length;
            styleToIndex.set(styleObject, index);
            styles.push(compressStyleObject(styleObject));
            return index;
        },
        getStyles: () => styles,
    };
};
//# sourceMappingURL=stylesheet-registry.js.map