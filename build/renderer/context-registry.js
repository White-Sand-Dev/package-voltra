export const getContextRegistry = () => {
    const contextMap = new Map();
    return {
        pushProvider: (context, value) => {
            const stack = contextMap.get(context) || [];
            stack.push(value);
            contextMap.set(context, stack);
        },
        popProvider: (context) => {
            const stack = contextMap.get(context);
            if (stack) {
                stack.pop();
            }
        },
        readContext: (context) => {
            const stack = contextMap.get(context);
            // If stack has items, return top.
            if (stack && stack.length > 0) {
                return stack[stack.length - 1];
            }
            // If empty/undefined, return the default value (defined at creation time).
            return context._currentValue; // The default value passed to createContext()
        },
    };
};
//# sourceMappingURL=context-registry.js.map