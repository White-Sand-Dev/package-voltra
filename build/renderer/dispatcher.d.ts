import { ReactDispatcher, ReactHooksDispatcher } from 'react';
import { ContextRegistry } from './context-registry.js';
declare module 'react' {
    type HookFn = (...args: any[]) => any;
    type ReactHooksDispatcher = {
        useState: HookFn;
        useReducer: HookFn;
        useEffect: HookFn;
        useLayoutEffect: HookFn;
        useInsertionEffect: HookFn;
        useCallback: HookFn;
        useMemo: HookFn;
        useRef: HookFn;
        useContext: HookFn;
        useId: HookFn;
        useImperativeHandle: HookFn;
        useDebugValue: HookFn;
        useDeferredValue: HookFn;
        useTransition: HookFn;
        useSyncExternalStore: HookFn;
        use: HookFn;
        useActionState: HookFn;
        useOptimistic: HookFn;
        useEffectEvent: HookFn;
        useMemoCache: HookFn;
        useCacheRefresh: HookFn;
    };
    type ReactDispatcher = {
        H: ReactHooksDispatcher;
    };
    let __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: ReactDispatcher;
}
export declare const getHooksDispatcher: (registry: ContextRegistry) => ReactHooksDispatcher;
export declare const getReactCurrentDispatcher: () => ReactDispatcher;
//# sourceMappingURL=dispatcher.d.ts.map