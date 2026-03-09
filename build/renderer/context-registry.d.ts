import { Context } from 'react';
declare module 'react' {
    interface Context<T> {
        _currentValue: T;
    }
}
export type ContextRegistry = {
    pushProvider: <T>(context: Context<T>, value: T) => void;
    popProvider: <T>(context: Context<T>) => void;
    readContext: <T>(context: Context<T>) => T;
};
export declare const getContextRegistry: () => ContextRegistry;
//# sourceMappingURL=context-registry.d.ts.map