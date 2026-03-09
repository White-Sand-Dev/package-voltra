type StyleProp<T> = T | T[] | null | undefined | false;
type FlatStyleProp<T> = T extends (infer U)[] ? FlatStyleProp<U> : T;
/**
 * Adapted from React Native's StyleSheet.flatten
 * Removes dependency on react-native for server-side rendering.
 */
export declare const flattenStyle: <T extends StyleProp<unknown>>(style: T | null | undefined) => FlatStyleProp<T> | null;
export {};
//# sourceMappingURL=flatten-styles.d.ts.map