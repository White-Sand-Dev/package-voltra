export type VoltraFont = {
    readonly __voltraFontId: string;
    readonly name?: string;
    readonly size: number;
    readonly weight?: string;
    readonly family?: string;
    readonly smallCaps?: boolean;
    readonly monospacedDigit?: boolean;
    readonly italic?: boolean;
};
export declare function createFont(options: {
    name?: string;
    size: number;
    weight?: string;
    family?: string;
    smallCaps?: boolean;
    monospacedDigit?: boolean;
    italic?: boolean;
}): VoltraFont;
export declare function isVoltraFont(value: unknown): value is VoltraFont;
//# sourceMappingURL=font.d.ts.map