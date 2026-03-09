export const getRenderCache = (renderer) => {
    const renderCache = new Map();
    return {
        getOrRender: (node) => {
            const cached = renderCache.get(node);
            if (cached) {
                return cached;
            }
            const result = renderer(node);
            renderCache.set(node, result);
            return result;
        },
    };
};
//# sourceMappingURL=render-cache.js.map