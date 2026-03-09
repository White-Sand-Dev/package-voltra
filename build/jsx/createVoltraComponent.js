import { createElement } from 'react';
export const VOLTRA_COMPONENT_TAG = Symbol.for('VOLTRA_COMPONENT_TAG');
export const createVoltraComponent = (componentName, options) => {
    const Component = (props) => {
        const toJSON = options?.toJSON ? options.toJSON : (props) => props;
        const normalizedProps = toJSON(props);
        return createElement(componentName, normalizedProps);
    };
    Component[VOLTRA_COMPONENT_TAG] = true;
    Component.displayName = componentName;
    return Component;
};
export const isVoltraComponent = (component) => {
    return typeof component === 'function' && VOLTRA_COMPONENT_TAG in component;
};
//# sourceMappingURL=createVoltraComponent.js.map