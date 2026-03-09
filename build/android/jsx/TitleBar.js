import { createVoltraComponent } from '../../jsx/createVoltraComponent.js';
export const TitleBar = createVoltraComponent('AndroidTitleBar', {
    toJSON: (props) => {
        const { startIcon, ...rest } = props;
        return {
            ...rest,
            ...(startIcon ? { startIcon: JSON.stringify(startIcon) } : {}),
        };
    },
});
//# sourceMappingURL=TitleBar.js.map