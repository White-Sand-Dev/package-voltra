let fontIdCounter = 0;
export function createFont(options) {
    // Use numeric ID (0, 1, 2, ...) for smallest payload size
    const id = String(fontIdCounter++);
    return {
        __voltraFontId: id,
        name: options.name,
        size: options.size,
        weight: options.weight,
        family: options.family,
        smallCaps: options.smallCaps,
        monospacedDigit: options.monospacedDigit,
        italic: options.italic,
    };
}
export function isVoltraFont(value) {
    return (typeof value === 'object' &&
        value !== null &&
        '__voltraFontId' in value &&
        typeof value.__voltraFontId === 'string');
}
//# sourceMappingURL=font.js.map