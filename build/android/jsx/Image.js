import { createVoltraComponent } from '../../jsx/createVoltraComponent.js';
export const Image = createVoltraComponent('AndroidImage', {
    toJSON: (props) => {
        const { source, ...rest } = props;
        return {
            ...rest,
            source: JSON.stringify(source),
        };
    },
});
//# sourceMappingURL=Image.js.map