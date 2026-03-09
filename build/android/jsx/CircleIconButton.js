import { createVoltraComponent } from '../../jsx/createVoltraComponent.js';
export const CircleIconButton = createVoltraComponent('AndroidCircleIconButton', {
    toJSON: (props) => {
        const { icon, ...rest } = props;
        return {
            ...rest,
            ...(icon ? { icon: JSON.stringify(icon) } : {}),
        };
    },
});
//# sourceMappingURL=CircleIconButton.js.map