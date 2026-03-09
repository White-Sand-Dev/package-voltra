export type StylesheetRegistry = {
    registerStyle: (styleObject: object) => number;
    getStyles: () => Record<string, unknown>[];
};
export declare const createStylesheetRegistry: () => StylesheetRegistry;
//# sourceMappingURL=stylesheet-registry.d.ts.map