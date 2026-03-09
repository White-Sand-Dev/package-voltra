declare global {
    var __accept: (...args: unknown[]) => void;
}
/**
 * Taps into the HMR accept function to forcefully re-render the component when any module is updated.
 * Is only available in development mode.
 */
export declare const useUpdateOnHMR: () => void;
//# sourceMappingURL=useUpdateOnHMR.d.ts.map