import React from 'react';
const REACT_CONTEXT_TYPE = Symbol.for('react.context');
const REACT_MEMO_CACHE_SENTINEL = Symbol.for('react.memo_cache_sentinel');
export const getHooksDispatcher = (registry) => ({
    useContext: (context) => registry.readContext(context),
    use: (usable) => {
        if (usable !== null &&
            typeof usable === 'object' &&
            usable.$$typeof === REACT_CONTEXT_TYPE) {
            return registry.readContext(usable);
        }
        if (usable !== null &&
            (typeof usable === 'object' || typeof usable === 'function') &&
            typeof usable.then === 'function') {
            throw new Error('use() with promises is not supported in Voltra. Async data fetching is not available in this synchronous renderer.');
        }
        throw new Error(`An unsupported type was passed to use(): ${String(usable)}`);
    },
    useState: (initial) => [
        typeof initial === 'function' ? initial() : initial,
        () => { }, // No-op setter
    ],
    useReducer: (_, initialArg, init) => {
        const state = init ? init(initialArg) : initialArg;
        return [state, () => { }];
    },
    // Direct pass-throughs
    useMemo: (factory) => factory(),
    useCallback: (cb) => cb,
    useRef: (initial) => ({ current: initial }),
    // No-ops for effects
    useEffect: () => { },
    useLayoutEffect: () => { },
    useInsertionEffect: () => { },
    useId: () => Math.random().toString(36).substr(2, 9),
    useDebugValue: () => { },
    useImperativeHandle: () => { },
    useDeferredValue: (value) => value,
    useTransition: () => [false, (func) => func()],
    useSyncExternalStore: (_, getSnapshot) => {
        return getSnapshot();
    },
    // No-op stubs for React 19 hooks
    useActionState: (_, initialState, _permalink) => [initialState, () => { }, false],
    useOptimistic: (passthrough) => [passthrough, () => { }],
    useEffectEvent: (callback) => callback,
    useMemoCache: (size) => {
        const data = new Array(size);
        for (let i = 0; i < size; i++) {
            data[i] = REACT_MEMO_CACHE_SENTINEL;
        }
        return data;
    },
    useCacheRefresh: () => () => { },
});
export const getReactCurrentDispatcher = () => {
    return React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
};
//# sourceMappingURL=dispatcher.js.map