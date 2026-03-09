import type { ComponentType } from 'react';
export declare const VOLTRA_COMPONENT_TAG: unique symbol;
export type VoltraComponent<TProps extends Record<string, unknown>> = ComponentType<TProps> & {
    displayName: string;
    [VOLTRA_COMPONENT_TAG]: true;
};
export type VoltraComponentOptions<TProps extends Record<string, unknown>> = {
    toJSON?: (props: TProps) => Record<string, unknown>;
};
export declare const createVoltraComponent: <TProps extends Record<string, unknown>>(componentName: string, options?: VoltraComponentOptions<TProps>) => VoltraComponent<TProps>;
export declare const isVoltraComponent: <TProps extends Record<string, unknown>>(component: ComponentType<TProps>) => component is VoltraComponent<TProps>;
//# sourceMappingURL=createVoltraComponent.d.ts.map