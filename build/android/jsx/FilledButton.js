import { createVoltraComponent } from '../../jsx/createVoltraComponent.js';
export const FilledButton = createVoltraComponent('AndroidFilledButton', {
    toJSON: (props) => {
        const { icon, ...rest } = props;
        return {
            ...rest,
            ...(icon ? { icon: JSON.stringify(icon) } : {}),
        };
    },
});
//# sourceMappingURL=FilledButton.js.map