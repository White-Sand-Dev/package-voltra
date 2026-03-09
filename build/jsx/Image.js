import { createVoltraComponent } from './createVoltraComponent.js';
export const Image = createVoltraComponent('Image', {
    toJSON: (props) => {
        const { source, ...rest } = props;
        return {
            ...rest,
            ...(source ? { source: JSON.stringify(source) } : {}),
        };
    },
});
//# sourceMappingURL=Image.js.map