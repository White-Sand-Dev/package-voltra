import { FunctionComponent, ReactNode } from 'react';
import { VoltraNodeJson, VoltraPropValue } from '../types.js';
import { ContextRegistry } from './context-registry.js';
import { type ElementRegistry } from './element-registry.js';
import { type StylesheetRegistry } from './stylesheet-registry.js';
/**
 * Component registry interface for looking up component IDs.
 * This allows different platforms (iOS, Android) to have their own component ID mappings.
 */
export type ComponentRegistry = {
    getComponentId: (name: string) => number;
};
/**
 * Android component registry using Android component IDs.
 */
export declare const androidComponentRegistry: ComponentRegistry;
type VoltraRenderingContext = {
    registry: ContextRegistry;
    stylesheetRegistry?: StylesheetRegistry;
    elementRegistry?: ElementRegistry;
    duplicates?: Set<ReactNode>;
    inStringOnlyContext?: boolean;
    componentRegistry: ComponentRegistry;
};
export declare const renderFunctionalComponent: <TProps>(Component: FunctionComponent<TProps>, props: TProps, context: VoltraRenderingContext) => VoltraNodeJson;
export declare const renderVoltraVariantToJson: (element: ReactNode) => VoltraNodeJson;
/**
 * Renders a Voltra variant to JSON using Android component mappings.
 */
export declare const renderAndroidVariantToJson: (element: ReactNode) => VoltraNodeJson;
export declare function transformProps(props: Record<string, unknown>, context: VoltraRenderingContext, componentName?: string): Record<string, VoltraPropValue>;
/** Current payload version - increment when making breaking changes to payload schema */
export declare const VOLTRA_PAYLOAD_VERSION = 1;
/**
 * Factory function that creates a Voltra renderer instance.
 * The renderer is agnostic of whether it's used for live activities or widgets.
 *
 * @param componentRegistry - Optional component registry for platform-specific component ID mappings.
 *                            Defaults to iOS component registry for backwards compatibility.
 */
export declare const createVoltraRenderer: (componentRegistry?: ComponentRegistry) => {
    addRootNode: (name: string, node: ReactNode) => void;
    render: () => Record<string, any>;
};
export {};
//# sourceMappingURL=renderer.d.ts.map