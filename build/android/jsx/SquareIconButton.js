import { createVoltraComponent } from '../../jsx/createVoltraComponent.js';
export const SquareIconButton = createVoltraComponent('AndroidSquareIconButton', {
    toJSON: (props) => {
        const { icon, ...rest } = props;
        return {
            ...rest,
            ...(icon ? { icon: JSON.stringify(icon) } : {}),
        };
    },
});
//# sourceMappingURL=SquareIconButton.js.map