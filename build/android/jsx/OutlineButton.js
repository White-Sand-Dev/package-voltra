import { createVoltraComponent } from '../../jsx/createVoltraComponent.js';
export const OutlineButton = createVoltraComponent('AndroidOutlineButton', {
    toJSON: (props) => {
        const { icon, ...rest } = props;
        return {
            ...rest,
            ...(icon ? { icon: JSON.stringify(icon) } : {}),
        };
    },
});
//# sourceMappingURL=OutlineButton.js.map