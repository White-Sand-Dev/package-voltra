/**
 * Adapted from React Native's StyleSheet.flatten
 * Removes dependency on react-native for server-side rendering.
 */
export const flattenStyle = (style) => {
    if (!style) {
        return null;
    }
    if (!Array.isArray(style)) {
        return style;
    }
    const result = {};
    for (let i = 0, styleLength = style.length; i < styleLength; ++i) {
        const computedStyle = flattenStyle(style[i]);
        if (computedStyle) {
            for (const key in computedStyle) {
                result[key] = computedStyle[key];
            }
        }
    }
    return result;
};
//# sourceMappingURL=flatten-styles.js.map