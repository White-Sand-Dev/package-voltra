declare const LEVELS: {
    readonly debug: 0;
    readonly info: 1;
    readonly warn: 2;
    readonly error: 3;
};
export type VoltraLogLevel = keyof typeof LEVELS;
export declare const logger: {
    debug: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
    setLevel: (level: VoltraLogLevel) => void;
};
export {};
//# sourceMappingURL=logger.d.ts.map